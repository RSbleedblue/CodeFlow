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
import UserHome from './Components/User/UserHome';
import CommonSearchPage from './Components/Common/CommonSearchPage';
import UserLogin from './Components/User/UserLogin';
import CommonLanding from './Components/Common/CommonLanding';
import CommonExplore from './Components/Common/CommonExplore';
function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path='' element={<CommonLanding />} />
            <Route path="search" element={<CommonSearchPage />} />
            <Route path="login" element={<UserLogin />} />
            <Route path='explore' element={<CommonExplore/>}/>
          </Route>
          <Route path="/user/*" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>}>
            <Route path="web" element={<CodingHome />} />
            <Route path="coding" element={<UserCoding />} />
            <Route path="" element={<UserHome />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
