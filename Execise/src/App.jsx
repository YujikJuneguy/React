import React from 'react';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="food">
      <h1>Restaurant Menu</h1>
      <Header/>
      <Footer/>
      <Menu />
    </div>
  );
}

export default App;

