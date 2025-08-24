import React from 'react'
import './MyWorkouts.css'

const MyWorkouts = () => {
  return (
    <div className="MyWorkouts">
        <h1>Your Personal Exercises / Workouts</h1>
        <button>Create Exercise</button>
        <button>Log Workout</button>
        <h3>Search your personal exercises and workouts:</h3>
        <input type="text" placeholder='Search...' />
        <button>Search</button>
        <h3>Matching Exercises / Workouts:</h3>
        <div className="MyWorkouts-results">
            <p>No results found</p>
        </div>
    </div>
  )
}

export default MyWorkouts