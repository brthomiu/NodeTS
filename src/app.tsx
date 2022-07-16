import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Home from './pages/Home';
import React from 'react'

function App() {
    return (
      <>
        <Router>
          <div className='container'>
              <ResponsiveAppBar />
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
          </div>
        </Router>
      </>
    );
  }
  
  export default App;