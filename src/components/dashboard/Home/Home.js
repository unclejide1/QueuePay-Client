import React from 'react';
import PieChart from './PieChart';
import { HomeDiv } from '../../styled-components';

const Home = () => {
    return (
        <HomeDiv>
        <div className ="details">
            <div className = "value transact">
            <h3>Total Transactions</h3>
            <h4>10,000</h4>
            </div>
            <div className ="value val">
            <h3>Total Value</h3>
            <h4>15,000</h4>
            </div>
            <div className ="value bal">
            <h3>Balance</h3>
            <h4>25,000</h4>
            </div>   
        </div>
        <div className = "piechart">
        <h1>Transactions Details</h1>
        <PieChart/>
        </div>
           
        </HomeDiv>
    );
};

export default Home;