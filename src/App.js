import React from 'react';
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';
import Blog from './pages/homepage/Blog';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Blog/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/sign-up" element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
