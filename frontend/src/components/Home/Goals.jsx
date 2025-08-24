import React, {useState} from 'react'
import './Goals.css';

// Outside of Goals
const MacroPanel = ({ macros, handleMacroChange, edittingMacros, setEdittingMacros }) => {
    if (!edittingMacros) {
        return (
            <div className="macros">
                <h1>MACROS</h1>
                <p>Calories: {macros.calories}</p>
                <p>Protein: {macros.protein}g</p>
                <p>Carbs: {macros.carbs}g</p>
                <p>Fats: {macros.fats}g</p>
                <button onClick={() => setEdittingMacros(true)}>Edit Macros</button>
            </div>
        );
    } else {
        return (
            <div className="macros">
                <h1>MACROS</h1>
                <p>Calories: <input type="number" name="calories" value={macros.calories} onChange={handleMacroChange}/></p>
                <p>Protein: <input type="number" name="protein" value={macros.protein} onChange={handleMacroChange}/>g</p>
                <p>Carbs: <input type="number" name="carbs" value={macros.carbs} onChange={handleMacroChange}/>g</p>
                <p>Fats: <input type="number" name="fats" value={macros.fats} onChange={handleMacroChange}/>g</p>
                <button onClick={() => setEdittingMacros(false)}>Save</button>
            </div>
        );
    }
};


const Goals = () => {
    const [macros, setMacros] = useState({
        calories: 3200,
        protein: 200,
        carbs: 400,
        fats: 70,
    });
    const [micronutrients, setMicronutrients] = useState({
        saturatedFat: 20,
        polyunsaturatedFat: 10,
        monounsaturatedFat: 15, 
    });
    const [edittingMacros, setEdittingMacros] = useState(false);
    const handleMacroChange = (e) => {
        setMacros({
            ...macros,
            [e.target.name]: e.target.value,
        });
    };
  return (
    <>
        <MacroPanel
            macros={macros}
            handleMacroChange={handleMacroChange}
            edittingMacros={edittingMacros}
            setEdittingMacros={setEdittingMacros}
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