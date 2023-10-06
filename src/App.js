import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout'
import Policy from './Components/Policy/Policy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
    </Router>
  );
}

export default App;
