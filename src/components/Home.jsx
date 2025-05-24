import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {

    useEffect(() => {
        axios.get('http://localhost:5000/api/signup',{
            Role:role
        })
    },[])


    return(
        <div>
            <h1>Concert List</h1>
        </div>
    )
}