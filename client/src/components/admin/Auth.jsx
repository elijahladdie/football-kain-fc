import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("userToken") || localStorage.getItem("userId") === undefined ){
            if(localStorage.getItem("userId") === "undefined" ){
                localStorage.removeItem("userId") 
            }
            Navigate("/admin/portal/auth")                    
        }


    })
    return;
}

export default Auth