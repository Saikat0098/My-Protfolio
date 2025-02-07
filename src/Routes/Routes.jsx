import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layoutes/Layout";
import Home from "../Home/Home";
import AboutMe from "../Components/AboutMe";
 

 export const router = createBrowserRouter([
     
            {
                path : '/' , 
                element : <Home></Home> , 
                children : [
                    {
                        path : 'about' , 
                        element : <AboutMe></AboutMe>
                    }
                 
                ]
            } ,
            
])