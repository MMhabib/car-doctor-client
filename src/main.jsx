import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Authprovider from './provider/Authprovider.jsx';

createRoot(document.getElementById('root')).render(
  
   <div className='max-w-7xl mx-auto '>
     <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
   </div>
  
)
