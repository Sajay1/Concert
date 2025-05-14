import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import signup from "./components/signup";
import login from "./components/login";
import './index.css';
import React from "react";


export default function App() {
  return(
    <div>
      <Navbar>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<signup />} />
              <Route path="/login" element={<login />} />
            </Routes>
          </BrowserRouter>
        </main>
      </Navbar>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);