import React from 'react';
import './App.css';
import NavBar from './component/Navbar/NavBar';
import SwitchRouter from './SwitchRouter';
import Footer from './component/Footer/Footer';
import LayoutVertical from './component/Navbar/LayoutVertical';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <LayoutVertical content={<SwitchRouter />} />
      <Footer />
    </div>
  );
}

export default App;
