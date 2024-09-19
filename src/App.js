import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';  // Ensure correct path to Homepage
// import Hospital from './components/Hospital';  // Ensure correct path to Hospital

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/hospital" element={<Hospital />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
