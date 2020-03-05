import React from 'react';
import {DashboardLink} from '../styled-components';
import {Link} from 'react-router-dom';

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

                        <Link to={{pathname: "/dashboard/profile", state:"new state"}}  className= "main-nav" activeClassName="selected" prop="Profile"><li>Profile</li></Link>
                        <Link exact to="/dashboard/transaction" className= "main-nav" activeClassName="selected" prop="Transaction"><li>Transactions</li></Link>
                        <Link exact to = "/payout" className= "main-nav" activeClassName="selected" prop="Payout"><li>Payouts</li></Link>
                        <Link exact to = "/balance" className= "main-nav" activeClassName="selected" prop="Balance"><li>Balance</li></Link>
                    </ul>
                    </div>
                </div>
            </div>
        </DashboardLink>
    );
};

export default DashBoard;
