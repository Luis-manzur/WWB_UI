import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import LandingPage from './Pages/LandingPage/LandingPage';
import LogIn from './Pages/Login/LogIn';
import SingUp from './Pages/Register/SingUp';
import SuccessVerification from './Pages/Register/SuccessVerification';
import Verify from './Pages/Register/Verify';


function App() {
  return (
    <div className="App">
      <Router>
          <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/register' element={<SingUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/verify/success' element={<SuccessVerification />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
