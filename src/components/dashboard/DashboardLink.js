import React from 'react';
import {DashboardLink} from '../styled-components';
import {NavLink} from 'react-router-dom';

const DashBoard = () => {
    return (
        <DashboardLink>
            <div className="container">
                <div className="links">
                    <div className="link-head">
                        <h4>Queue Pay</h4>
                        <h4>ID: 123456</h4>
                        
                    </div>
                    <div className="link-body">
                    <ul className ="services">
                        <NavLink exact to = "/dashboard" className= "main-nav" activeClassName="selected"><li>Home</li></NavLink>
                        <NavLink to="/dashboard/profile" className= "main-nav" activeClassName="selected"><li>Profile</li></NavLink>
                        <NavLink to="/dashboard/transaction" className= "main-nav" activeClassName="selected"><li>Transactions</li></NavLink>
                        <NavLink to = "/dashboard/payout" className= "main-nav" activeClassName="selected"><li>Payouts</li></NavLink>
                    </ul>
                    </div>
                </div>
            </div>
        </DashboardLink>
    );
};

export default DashBoard;
