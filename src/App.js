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

          <Route path='/register/success' element ={<Message message= 'We have sent a verification link to your email!' paragraph=' Please verify your email to start enjoying or platform.' source='https://media.architecturaldigest.com/photos/5852f927001c874267ed3d97/master/w_2300,h_973,c_limit/6-japan-luxury-hotels-ritz-carlton-okinawa.jpg'>
            <Link to="/" className="btn btn-form">Home</Link>
          </Message>} />

          <Route path='/payment/success' element ={<Message message= 'Your payment has been succesfully registered!' paragraph='We have sent you an email with information regarding your payment.' source ='https://i0.wp.com/www.thesuitelife.com.hk/wp-content/uploads/2020/07/Amangiri-USA-Camp-Sarika-Tent-1-Terrace_High-Res_26928.jpg?fit=2560%2C1405&ssl=1'>
            <Link to="/" className="btn btn-form">Home</Link>
          </Message>} />

          <Route path='/booking/success' element ={<Message message= 'Your reservation has been completed successfully!' paragraph = 'We have sent you an email with additional information regarding your reservation.' source='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F02%2FVelaa-ULT0216.jpg'>
            <Link to="/" className="btn btn-form">Home</Link>
          </Message>} />

          <Route path='/error' element ={<Message message= 'Error: 404' paragraph = 'Page not found' source='https://snowkingmountain.com/wp-content/uploads/2019/02/snow-king-lodge-lobby-pool.jpg'>
            <Link to="/" className="btn btn-form">Home</Link>
          </Message>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
