import React, { Suspense } from 'react';

import './spline-pre.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div id='about_a'>
    <div className='relative' id = 'spline3'>
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/LXZzVHtmxPFDpkkT/scene.splinecode" />
    </Suspense>
      
      
    </div>
    <div className='relative' id = 'spline7'>
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/IwisDt8Z1KfSOuwv/scene.splinecode" />
    </Suspense>
      
      
    </div>

    <div className='relative' id = 'spline8'>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/9bKHMuMcbQOeDghk/scene.splinecode" />
    </Suspense>
      
      
    </div>
    
    </div>
  )
}
