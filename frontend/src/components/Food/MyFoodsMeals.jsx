import React from 'react'
import './MyFoodsMeals.css'

const MyFoodsMeals = () => {
  return (
    <div className="my-foods-meals">
        <h1> Your Personal Foods and Meals</h1>
        <button>Add New Food</button>
        <button>Add New Meal</button>
        <p>Search your personal foods by name:</p>
        <input type="text" placeholder="Search foods..." />
        <h3>Matching Foods and Meals</h3>
        <p>No matching foods or meals found.</p>
        <h3>Your Foods</h3>
        <p>You have no personal foods added.</p>
        <h3>Your Meals</h3>
        <p>You have no personal meals added.</p>
    </div>
  )
}

export default MyFoodsMeals