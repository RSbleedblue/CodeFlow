import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Components/Home';
import CodingHome from './Components/Coding/CodingHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Components/utils/ProtectedRoute';
import UserDashboard from './Components/User/UserDashboard';
import UserCoding from './Components/User/UserCoding';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/*" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>}>
            <Route path="web" element={<CodingHome />} />
            <Route path="coding" element={<UserCoding/>} />
            {/* Add more user-related routes here */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
