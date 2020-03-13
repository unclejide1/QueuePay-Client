import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TransactionDiv } from "../styled-components";

const Transaction = () => {
    // const history = useHistory();
    const [transArray, setTransArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const transactions = await fetch('/transactions/' + localStorage.getItem("businessID"), {
                method: "GET",
                headers: {
                    "content-type": 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
            })
            const json = await transactions.json()
            setTransArray(json)
        }
        fetchData()
    }, [])


    return (
        <TransactionDiv>
            <div className="transactions">
                <h3>View all transactions</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Card Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>

                        {transArray.length ? transArray.map((res, index) =>
                            (<tr key={res.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{res.amount}</td>
                                <td>{res.customerName}</td>
                                <td>{res.cardType}</td>
                                <td>{res.status}</td>
                                <Link to={`/dashboard/singletransaction/${res.id}`}><td ><button id={res.id}>View</button></td></Link>
                            </tr>)
                        ) : (<tr>
                            <th scope="row">N/A</th>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </TransactionDiv>
    )
}

export default Transaction;
