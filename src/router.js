import ReactDOM from "react-dom/client"
import { createBrowserRouter } from 'react-router-dom';
import Signup from "./components/SignupForm";
import Login from "./components/Login";

const router= createBrowserRouter(
    [
        {path:'signup',element:<signup/>},
        {path:'login',element:<login/>}
    ]
)