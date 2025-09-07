import React, {useState, useEffect} from 'react'
import './Goals.css';
import AxiosInstance from '../AxiosInstance';

// Outside of Goals
const MacroPanel = ({ macros, handleMacroChange, edittingMacros, setEdittingMacros, UpdateGoals }) => {
    if (!edittingMacros) {
        return (
            <div className="macros">
                <h1>MACROS</h1>
                <p>Calories: {macros.caloric_goal}</p>
                <p>Protein: {macros.protein_goal}g</p>
                <p>Carbs: {macros.carbs_goal}g</p>
                <p>Fats: {macros.fat_goal}g</p>
                <button onClick={() => setEdittingMacros(true)}>Edit Macro Goals</button>
            </div>
        );
    } else {
        return (
            <div className="macros">
                <h1>MACROS</h1>
                <p>
                  Calories: <input type="number" name="caloric_goal" value={macros.caloric_goal} onChange={handleMacroChange}/>
                </p>
                <p>
                  Protein: <input type="number" name="protein_goal" value={macros.protein_goal} onChange={handleMacroChange}/>g
                </p>
                <p>
                  Carbs: <input type="number" name="carbs_goal" value={macros.carbs_goal} onChange={handleMacroChange}/>g
                </p>
                <p>
                  Fats: <input type="number" name="fat_goal" value={macros.fat_goal} onChange={handleMacroChange}/>g
                </p>
                <button onClick={() => { UpdateGoals(macros); setEdittingMacros(false); }}>Save</button>
            </div>
        );
    }
};


const Goals = () => {

    const [macros, setMacros] = useState(null);
    const [loading, setLoading] = useState(true);

    const GetData = () => {
        AxiosInstance.get('userprofile/')
        .then((res) => {
            if (res.data.length > 0) {
            setMacros(res.data[0]); // grab first (and only) profile
            }
            console.log(res.data[0]);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const UpdateGoals = (newGoals) => {
        AxiosInstance.patch(`userprofile/${macros.id}/`, newGoals)
            .then((res) => {
                console.log("Goals updated:", res.data);
                setMacros(res.data);
            })
            .catch((err) => {
                console.error("Error updating goals:", err);
            });
    };


    useEffect(() => {
        GetData();
    }, []);

    const [micronutrients, setMicronutrients] = useState({
        saturatedFat: 20,
        polyunsaturatedFat: 10,
        monounsaturatedFat: 15, 
    });
    const [edittingMacros, setEdittingMacros] = useState(false);
    const handleMacroChange = (e) => {
        setMacros({
            ...macros,
            [e.target.name]: Number(e.target.value),
        });
    };

    if (loading) return <p>Loading...</p>;
    if (!macros) return <p>No profile found. Please create one.</p>;

  return (
    <>
        <MacroPanel
            macros={macros}
            handleMacroChange={handleMacroChange}
            edittingMacros={edittingMacros}
            setEdittingMacros={setEdittingMacros}
            UpdateGoals={UpdateGoals}
        />

        <div className="micronutrients">
            <h1>MICRONUTRIENTS</h1>
            <p>Saturated Fat</p>
            <p>Polyunsaturated Fat</p>
            <p>Monounsaturated Fat</p>
            <p>Trans Fat</p>
            <p>Cholesterol</p>
            <p>Sodium</p>
            <p>Potassium</p>
            <p>Fiber</p>
            <p>Sugar</p>
            <p>Vitamin A</p>
            <p>Vitamin C</p>
            <p>Calcium</p>
            <p>Iron</p>
            <button>Update Micronutrient Goals</button>
        </div>
        <div className="fitness">
            <h1>Fitness</h1>
            <p>Daily Steps: 10000</p>
            <p>Weekly Workouts: 5</p>
            <p>Calories Burned / Week</p>
        </div>
    </>
  )
}

export default Goals