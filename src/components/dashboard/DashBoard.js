import React from 'react';
import DashBoardLink from "../dashboard/DashboardLink";
import {DashboardDiv} from '../styled-components'
import UpdateProfile from './UpdateProfile';
import Transaction from "./Transaction";
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import DashboardHeader from './DashboardHeader';

const DashBoard = () => {
    return (
        <DashboardDiv>
            <div className ="profile">
            <DashBoardLink />
            </div>
            <div className = "pages">

                <DashboardHeader/>
                <div className="pages-content">
                <Route path='/dashboard/profile'>
                    <UpdateProfile/>
                </Route>
                <Route path='/dashboard/transaction'>
                    <Transaction/>
                </Route>
                <Route exact path='/dashboard/home'>
                    <Home/>
                </Route>
            </div>
            </div>
        </DashboardDiv>
    );
};

export default DashBoard;