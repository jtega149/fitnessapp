import React from 'react'
import './ExerciseDB.css'

const ExerciseDB = () => {
  return (
    <div className="ExerciseDB">
        <h1>Calories Burned From Exercise</h1>
        <input type="text" placeholder='Search...' />
        <button>Search</button>
        <h3>Matching Exercises:</h3>
        <div className="ExerciseDB-results">
            <p>No results found</p>
        </div>
    </div>
  )
}

export default ExerciseDB