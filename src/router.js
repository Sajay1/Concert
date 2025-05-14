import ReactDOM from "react-dom/client"
import { createBrowserRouter } from 'react-router-dom';
import signup from "./components/pages/signup";
import login from "./components/pages/login";

const router= createBrowserRouter(
    [
        {path:'signup',element:<signup/>},
        {path:'login',element:<login/>}
    ]
)