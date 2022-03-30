import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import AboutUs from './Pages/AboutUs/AboutUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import LogIn from './Pages/Login/LogIn';
import SingUp from './Pages/Register/SingUp';
import SuccessVerification from './Pages/Register/SuccessVerification';
import Verify from './Pages/Register/Verify';
import Message from './Components/Message/Message';



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
          <Route path='/about' element={<AboutUs />} />
          <Route path='/register/success' element ={<Message message= 'We have sent a verification link to your email!' paragraph=' Please verify your email to start enjoying or platform.'>
            <Link to="/" className="btn btn-form">Home</Link>
          </Message>} />
          <Route path='/payment/success' element ={<Message message= 'Your payment has been succesfully registered!' paragraph='We have sent you an email with information regarding your payment.'>
            <Link to="/" className="btn btn-form">Home</Link>
          </Message>} />
          <Route path='/booking/success' element ={<Message message= 'Your reservation has been completed successfully!' paragraph = 'We have sent you an email with additional information regarding your reservation.'>
            <Link to="/" className="btn btn-form">Home</Link>
          </Message>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
