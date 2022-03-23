import './App.css';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import HomePage from './Pages/HomePage';
import SingUp from './Components/SingUp';
import LogIn from './Components/LogIn'

function App() {
  return (
    <div className="App">
      <Router>
          <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/register' element={<SingUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
