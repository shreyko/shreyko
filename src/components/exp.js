import React, { Suspense } from 'react';

import './exp.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div id='spline-pre'>
    <div className='relative' id = 'spline4'>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/8CKQmiVS7gaFizmm/scene.splinecode" />
    </Suspense>
      
      
    </div>
    <div className='relative' id = 'spline10'>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/2JI0AsMlaliphsck/scene.splinecode" />
    </Suspense>
      
      
    </div>
    <div className='relative' id = 'spline11'>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/poKk1X79iGfC0SiJ/scene.splinecode" />
    </Suspense>
      
      
    </div>
    <div className='relative' id = 'spline12'>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/zY-0MYiIJUMFbdVH/scene.splinecode" />
    </Suspense>
      
      
    </div>
    
    
    </div>
  )
}