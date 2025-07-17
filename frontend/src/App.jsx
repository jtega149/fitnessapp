import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
