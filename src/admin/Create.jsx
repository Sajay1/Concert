import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {

     useEffect(() => {
            axios.get('http://localhost:5000/api/signup')
            .then(res=>{
                if(res.data.Role === 'Admin'){
                    navigate('/Create');
            }
            else{
                navigate('/login');
            }
        }
            )
            .catch(error=>console.error('Error fetching data:', error));
        },[])

    return(
        <div>
            <h1>Concert List</h1>
            
        </div>
    )
}