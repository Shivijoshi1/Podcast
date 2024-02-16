import React from "react";
import '../src/App.css'
import Navbar from '../src/Component/Navbar.jsx'
import MainComp from "./Component/MainComp.jsx";
import Footer from "./Component/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <MainComp/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
