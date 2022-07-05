import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import { AppContext } from './contexts/AppContext';
import './App.css';
import NavTabs from './components/nav-tabs';

function App() {
  return (
    <div className="App">
    <AppContext>
      <Router>
          <NavTabs />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/2" element={<SecondPage />} />
          </Routes>
      </Router>
        </AppContext>
    
    </div>
  );
}

export default App;
