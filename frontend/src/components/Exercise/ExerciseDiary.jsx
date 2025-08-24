import React from 'react'
import './ExerciseDiary.css'

const ExerciseDiary = () => {
  return (
    <div className="exercise-diary">
        <h1>Your Personal Exercise Diary</h1>
        <p>Your Exercise Diary for: </p>
        <input type="date" />
        <table>
            <thead>
                <tr>
                    <th>Cardiocascular</th>
                    <th>Duration (minutes)</th>
                    <th>Calories Burned</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Running</td>
                    <td>30</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>Cycling</td>
                    <td>45</td>
                    <td>400</td>
                </tr>
                <tr>
                    <td>Daily Total</td>
                    <td>60</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>Weekly Total</td>
                    <td>300</td>
                    <td>2500</td>
                </tr>
            </tbody>
        </table>
        <button className="add-cardio-button">Add Cardio Exercise</button>
        <hr></hr>
        <table>
            <thead>
                <tr>
                    <th>Strength Training</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight (lbs)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bench Press</td>
                    <td>3</td>
                    <td>10</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>Squats</td>
                    <td>4</td>
                    <td>8</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Daily Total</td>
                    <td>7</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Weekly Total</td>
                    <td>35</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
            <button className="add-strength-button">Add Strength Exercise</button>
        </table>
    </div>
  )
}

export default ExerciseDiary