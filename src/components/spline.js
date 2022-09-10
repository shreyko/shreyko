import React from 'react';

import './spline.css';
import Spline from '@splinetool/react-spline';

export default function App() {

  
  return (
   
    <div id='exper'>
    
    <div className='relative' id = 'spline1'>
    
    <Spline scene="https://prod.spline.design/vR4RVslG3wUbBI7U/scene.splinecode" />
  
    
      
      
     
    </div>
    <div className='relative' id = 'spline2'>
    
    <Spline scene="https://prod.spline.design/iYNJbjHHXjo9Y52E/scene.splinecode" />

      
    
    
    </div>
    
    
    </div>
  );
}
