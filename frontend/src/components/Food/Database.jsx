import React from 'react'
import './Database.css'

const Database = () => {
  return (
    <div className="food-database">
        <h1>Calorie Chart, Nutrition Facts for Food</h1>
        <p>Search for a food, brand, or restaurant</p>
        <input type="text" placeholder='Search...' />
        <button>Search</button>
        <h3>Matching Foods:</h3>
        <div className="food-database-results">
            <p>No results found</p>
        </div>
    </div>
  )
}

export default Database