import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Goals from './components/Home/Goals';
import Home from './components/Home/Home';
import Checkin from './components/Home/Checkin';
import Fooddiary from './components/Food/Fooddiary';
import Database from './components/Food/Database';
import MyFoodsMeals from './components/Food/MyFoodsMeals';
import ExerciseDiary from './components/Exercise/ExerciseDiary';
import ExerciseDB from './components/Exercise/ExerciseDB';
import MyWorkouts from './components/Exercise/MyWorkouts';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/signup', '/login'];
  const shouldShowNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {
        shouldShowNavbar ?
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        :
        <>
          <Navbar/>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/goals" element={<Goals />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/checkin" element={<Checkin />} />
              <Route path="/food/food-diary" element={<Fooddiary />} />
              <Route path="/food/database" element={<Database />} />
              <Route path="/food/my-foods-and-meals" element={<MyFoodsMeals />} />
              <Route path="/exercise/exercise-diary" element={<ExerciseDiary />} />
              <Route path="/exercise/database" element={<ExerciseDB />} />
              <Route path="/exercise/my-workouts" element={<MyWorkouts />} />
            </Route>
          </Routes>
        </>
      }
    </>
  );
}


export default App;
