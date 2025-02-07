import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Checkout from "../Pages/Checkout/Checkout";
import Services from "../Pages/Home/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/checkout/:id',
            element:<Checkout></Checkout>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    },
  ]);
  export default router;