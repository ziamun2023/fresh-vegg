import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <div>
 <ParallaxProvider>
 <RouterProvider router={router} />
 </ParallaxProvider>

 </div>
  </React.StrictMode>,
)
