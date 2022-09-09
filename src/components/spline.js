import React, { Suspense } from 'react';

import './spline.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
export default function App() {

  
  return (
   
    <div id='exper'>
    <div className='relative' id = 'spline1'>
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/zGUMgdzKQVplZboc/scene.splinecode" />
    </Suspense>
      
      
     
    </div>
    <div className='relative' id = 'spline2'>
    <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/iYNJbjHHXjo9Y52E/scene.splinecode" />
      </Suspense>
    
    
    </div>
    
    </div>
  );
}
