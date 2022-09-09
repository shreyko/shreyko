import React, { Suspense } from 'react';

import './contact.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div id='contacts'>
    <div className='relative' id = 'spline5'>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/ItQZbvhXnAQ9bP8c/scene.splinecode" />
      </Suspense>
      
      
    </div>
    <div className='relative' id = 'spline14'>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/yQCNKkYbARUpNu21/scene.splinecode" />
  
      </Suspense>
      
      
    </div>
    
    </div>
  )
}
