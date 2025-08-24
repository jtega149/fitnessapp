import React from 'react'
import './Home.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = () => {
    const calories_goal = 3200;
    const calories_in = 700;
    const percentage = 70;
  return (
    <div className="home">
        <h1>Todays stats</h1>
        <div className="stats-container">
            <div className="calories-stats">
                <h2>Calories</h2>
                <p>Calories Remaing = Goal - Food + Excerise</p>
                <p>Goal: 3200</p>
                <p>Food: 2000</p>
                <p>Exercise: 500</p>
                <p>Calories Remaining: 700</p>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar value={percentage} text={`${calories_in}/${calories_goal}`} />
                </div>
            </div>
            <div className="macros-stats">
                <h2>Macros</h2>
                <p>Protein: 200g</p>
                <p>Carbs: 400g</p>
                <p>Fats: 70g</p>
                <div className="macros-progressbars">
                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={percentage} text={`${calories_in}/${calories_goal}`} />
                    </div>
                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={percentage} text={`${calories_in}/${calories_goal}`} />
                    </div>
                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={percentage} text={`${calories_in}/${calories_goal}`} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home