import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import   Home from './Pages/Home';
import   About from './Pages/About';
import Contacts from './Pages/Contacts';
import Bloggg from './Pages/Bloggg.jsx';
import Users from './Pages/Users.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/home' element={<Home/>}></Route>
        <Route path = '/about' element = {<About/>}></Route>
        <Route path = '/contact' element = {<Contacts/>}></Route>
        <Route path = '/bloggg' element = {<Bloggg/>}></Route>
        <Route path = '/users' element = {<Users/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
