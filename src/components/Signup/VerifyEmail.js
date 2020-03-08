import React, {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom'
import NavBar from '../NavBar';
import {VerifyDiv} from '../styled-components'

const VerifyEmail = () => {
    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery()
    let token = query.get("token")
    const [message, setMessage] =useState('')
    useEffect(()=>{
        
        const verify = async (token) =>{
            const verifyEmail = await fetch(`/auth/verifyEmail/${token}`, {
                method: "PATCH",
                headers:{
                    "content-type": "application/json"
                }
            })
            const response = await verifyEmail.json()
            setMessage(response.message)
        }
        verify(token)
    })
    return (
        <VerifyDiv>
        <NavBar/>
        <div className = "verify">
           <h3>{message}</h3> 
           <p>Proceed To <Link className = "link" to = "/signIn">Login...</Link></p>
           </div>
        </VerifyDiv>
    );
};

export default VerifyEmail;