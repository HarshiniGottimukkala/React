import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './MainPage/Main'
import SignIn from './SignIn/SignIn';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
      </ScrollToTop>
  </Router>
  );
}

export default App;
