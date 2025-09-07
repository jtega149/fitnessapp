import { React, useState, useEffect } from 'react'
import './Home.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AxiosInstance from '../AxiosInstance';

const Home = () => {
    const [myData, setMyData] = useState(null);
    const [loading, setLoading] = useState(true);

    const GetData = () => {
        AxiosInstance.get('userprofile/')
        .then((res) => {
            if (res.data.length > 0) {
            setMyData(res.data[0]); // grab first (and only) profile
            }
            console.log(res.data[0]);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        GetData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!myData) return <p>No profile found. Please create one.</p>;

    // Values of user's goals from profile via database
    // Default to 0 if not set to avoid NaN in calculations
    const caloric_goal = myData.caloric_goal || 0;
    const protein_goal = myData.protein_goal || 0;
    const carbs_goal = myData.carbs_goal || 0;
    const fat_goal = myData.fat_goal || 0;

    //Calories burned from exercise
    const exercise_calories = 500;

    // Values for users daily intake
    const current_calories = 1456;
    const current_protein = 80;
    const current_carbs = 40;
    const current_fats = 20;

    // Temporary placeholders until you track food/exercise
    //const calories_in = 3000;  

  return (
    <div className="home">
      <h1>Today's Stats</h1>

      <div className="stats-container">
        <div className="calories-stats">
          <h2>Calories</h2>
          <p>Calories Remaining = Goal - Food + Exercise</p>
          <p>Goal: {caloric_goal} kcal</p>
          <p>Food: {current_calories} kcal</p>
          <p>Exercise: {exercise_calories} kcal burned</p>
          <p>Calories Remaining: {caloric_goal - current_calories + exercise_calories}</p>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={caloric_goal > 0 ? (current_calories / caloric_goal) * 100 : 0}
              text={`${current_calories}/${caloric_goal}`}
            />
          </div>
        </div>

        <div className="macros-stats">
          <h2>Macros</h2>
          <p>Protein Goal: {protein_goal}g</p>
          <p>Carbohydrates Goal: {carbs_goal}g</p>
          <p>Fats Goal: {fat_goal}g</p>

          <div className="macros-progressbars">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={50}
                text={`Protein: ${current_protein}/${protein_goal}`}
                styles={{
                    path: { stroke: "red"},
                    text: { fill: "red", fontSize: '12px', fontWeight: 'bold' },
                    trail: { stroke: "#FFA899" },
                }}
              />
            </div>
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={50}
                text={`Carbs: ${current_carbs}/${carbs_goal}`}
                styles={{
                    path: { stroke: "orange"},
                    text: { fill: "orange", fontSize: '12px', fontWeight: 'bold' },
                    trail: { stroke: "#EBC998" },
                }}
              />
            </div>
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={50}
                text={`Fats: ${current_fats}/${fat_goal}`}
                styles={{
                    path: { stroke: "green"},
                    text: { fill: "green", fontSize: '12px', fontWeight: 'bold' },
                    trail: { stroke: "#98EB98" },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
