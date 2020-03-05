import React from 'react';
import DashBoardLink from "../dashboard/DashboardLink";
import {DashboardDiv} from '../styled-components'
import UpdateProfile from './UpdateProfile';
import Transaction from "./Transaction"
import {Route} from 'react-router-dom';

const DashBoard = () => {
    return (
        <DashboardDiv>
            <div className ="profile">
            <DashBoardLink />
            </div>
            <div className = "pages">
            <Route path='/dashboard/profile'>
            <UpdateProfile/>
            </Route>
            </div>
        </DashboardDiv>
    );
};

export default DashBoard;