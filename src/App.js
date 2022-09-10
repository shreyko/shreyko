import React,{ Suspense } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Splinepre from "./components/spline-pre";
import Spline from "./components/spline";
import Exp from "./components/exp";
import Conatct from "./components/contact"
import Contacticon from "./components/contact-icon";
function App() {
  return (
    <>
    <Suspense fallback = {<spinner />}>
    <Navbar/>
    <Splinepre/>
    <Spline/>
    <Exp/>
    <Conatct/>
    <Contacticon/>
    </Suspense>
    </>
    
  );
}

export default App;
