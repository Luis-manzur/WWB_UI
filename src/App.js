import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import AboutUs from './Pages/AboutUs/AboutUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import LogIn from './Pages/Login/LogIn';
import SingUp from './Pages/Register/SingUp';
import Verify from './Pages/Register/Verify';
import Message from './Components/Message/Message';
import Search from './Pages/Search/Search';
import MessageBanner from './Components/MessageBanner/MessageBanner';
import Accommodations from './Pages/Accommodations/Accommodations';
import Profile from './Pages/Profile/Profile';
import AccommodationDetail from './Pages/AccommodationDetail/AccommodationDetail';
import Reservation from './Pages/Reservation/Reservation';



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
          <Route path='/about' element={<AboutUs />} />
          <Route path='/search' element={<Search />} />
          <Route path = '/profile' element={<Profile />} />
          <Route path = '/accommodations/:slugName' element={<AccommodationDetail />} />
          <Route path='accommodations/search/:city' element={<Accommodations />} />
          <Route path='accommodation/:slugName' element={<Reservation />} />

          <Route path='/verify/success' element ={<MessageBanner message= 'You have been verified!' paragraph='Congratulations, you can now go explore the world!' source='https://upload.wikimedia.org/wikipedia/commons/1/10/Canaima_6.JPG'>
            <Link to="/login" className="btn btn-form">Log in</Link>
          </MessageBanner>} />

          <Route path='/payment/success' element ={<MessageBanner message= 'Your payment has been succesfully registered!' paragraph='We have sent you an email with information regarding your payment.' source ='https://i0.wp.com/www.thesuitelife.com.hk/wp-content/uploads/2020/07/Amangiri-USA-Camp-Sarika-Tent-1-Terrace_High-Res_26928.jpg?fit=2560%2C1405&ssl=1'>
            <Link to="/" className="btn btn-form">Home</Link>
          </MessageBanner>} />

          <Route path='/error' element ={<MessageBanner message= 'Error: 404' paragraph = 'Page not found' source='https://snowkingmountain.com/wp-content/uploads/2019/02/snow-king-lodge-lobby-pool.jpg'>
            <Link to="/" className="btn btn-form">Home</Link>
          </MessageBanner>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
