import ReactDOM from "react-dom/client"
import { createBrowserRouter } from 'react-router-dom';
import signup from "./pages/signup";
import login from "./pages/login";

const router= createBrowserRouter(
    [
        {path:'signup',element:<signup/>},
        {path:'login',element:<login/>}
    ]
)