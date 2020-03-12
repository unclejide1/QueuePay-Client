import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
function GetTransaction() {
    let {id} = useParams()
    const [trans, setTrans] = useState('')
    useEffect(() => {
        const fetchData = async ()=>{
            const transactions = await fetch(`/transactions/${localStorage.getItem("businessID")}/${id}`, {
                method: "GET",
                headers:{
                  "content-type": 'application/json',
                  "Authorization": "Bearer " + localStorage.getItem("token")
                },
              })
              const json = await transactions.json()
              setTrans(json)
        }
       fetchData()
    }, [id])
    return (
        <div>
            <p>Customer name: {trans.customerName}</p>
            <p>Card Type: {trans.cardType}</p>
            <p>Transaction Status: {trans.status}</p>
            <p>Transaction Amount: {trans.amount}</p>
            
    {console.log(trans)}
        </div>
    )
}

export default GetTransaction
