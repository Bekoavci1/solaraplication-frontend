import React from 'react';
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';
import Blog from './pages/homepage/Blog';
import LoginPage from '../src/pages/login-register/LoginPage'
import RegisterPage from '../src/pages/login-register/RegisterPage'
import Paperbase from './pages/dashboard/Paperbase';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Blog/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/sign-up" element={<RegisterPage/>} />
        <Route path="/paperbase" element={<Paperbase/>} />
      </Routes>
    </Router>
  );
}

export default App;
