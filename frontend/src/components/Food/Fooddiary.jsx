import React from 'react'
import './Fooddiary.css'

const Fooddiary = () => {
  return (
   <div className="food-diary">
    <h3>Your Food Diary For: </h3>
    <input type="date" id="start" name="trip-start"
       value="2024-01-01"
       min="2024-01-01" max="2024-12-31">
    </input>
    <table>
        <thead>
            <tr>
                <th>Food / Meal</th>
                <th>Calories</th>
                <th>Protein (g)</th>
                <th>Carbs (g)</th>
                <th>Fats (g)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Oatmeal with Berries</td>
                <td>350</td>
                <td>10</td>
                <td>60</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Grilled Chicken Salad</td>
                <td>450</td>
                <td>40</td>
                <td>20</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Salmon with Quinoa</td>
                <td>600</td>
                <td>50</td>
                <td>30</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Greek Yogurt</td>
                <td>150</td>
                <td>15</td>
                <td>10</td>
                <td>0</td>
            </tr>
            <tr className="totals">
                <td>Total</td>
                <td>1550</td>
                <td>115</td>
                <td>120</td>
                <td>40</td>
            </tr>
            <tr className="totals">
                <td>Your Daily Goal</td>
                <td>2000</td>
                <td>150</td>
                <td>250</td>
                <td>70</td>
            </tr>
            <tr className="totals">
                <td>Remaining</td>
                <td>450</td>
                <td>35</td>
                <td>130</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <button>Add Food</button>
    <hr></hr>
    <h3>Water Consumption</h3>
    <p>You've logged 5 cups of water today. Aim for at least 8 cups!</p>
    <button>Log Water Intake</button>
    <hr></hr>
    <h3>Guidelines & Tips</h3>
    <p>For safe weight loss, the National Institutes of Health recommends no less than 1000-1200 calories for women and 1200-1500 calories for men.</p>
    <p>Completing your diary with fewer than the minimum calories noted above will not generate a news feed post for that day, or show a five-week weight projection.</p>
    <p>Even during weight loss, it's important to meet your body's basic nutrient and energy needs. Over time, not eating enough can lead to nutrient deficiencies, unpleasant side effects & other serious health problems.</p>
   </div>
  )
}

export default Fooddiary