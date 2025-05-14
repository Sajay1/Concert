import ReactDOM from "react-dom/client"
import { createBrowserRouter } from 'react-router-dom';
import signup from "./components/signup";
import login from "./components/login";

const router= createBrowserRouter(
    [
        {path:'signup',element:<signup/>},
        {path:'login',element:<login/>}
    ]
)