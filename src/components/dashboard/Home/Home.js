import React, { useState, useEffect } from 'react';
import PieChart from './PieChart';
import { HomeDiv } from '../../styled-components';

const Home = () => {

    const [output, setOutput] = useState('');
    const businessId = localStorage.getItem("businessID");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            const merchantPerformance = await fetch('/merchants/' + businessId + '/performance', {
                method: "GET",
                headers: {
                    "content-type": 'application/json',
                    "Authorization": "Bearer " + token
                },
            })
            const json = await merchantPerformance.json()

            setOutput(json)
        }
        fetchData()
    }, [])
    console.log(output)

    return (
        <HomeDiv>
            <div className="details">
                <div className="value transact">
                    <h3>Total Transactions</h3>
                    <h4>{output.totalVolume}</h4>
                </div>
                <div className="value val">
                    <h3>Total Value</h3>
                    <h4>{output.totalValue}</h4>
                </div>
                <div className="value bal">
                    <h3>Balance</h3>
                    <h4>{output.balance}</h4>
                </div>
            </div>
            <div className="piechart">
                <h1>Transactions Details</h1>
                <PieChart output={output} />
            </div>

        </HomeDiv>
    );
};

export default Home;