import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/signup', '/login'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* other routes */}
      </Routes>
    </>
  );
}


export default App;
