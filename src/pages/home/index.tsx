import React from 'react';
import { Link } from 'react-router-dom'
import logo from '@svg/logo.svg';
// import '@svg/logo.svg';
import './App.css';

console.log('svg', logo)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg className="svg_img"><use xlinkHref="#logo" /></svg>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to='test'>
          测试页面
        </Link>
      </header>
    </div>
  );
}

export default App;
