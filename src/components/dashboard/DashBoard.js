import React from 'react';
import DashBoardLink from "../dashboard/DashboardLink";
import {DashboardDiv} from '../styled-components'

const DashBoard = () => {
    return (
        <DashboardDiv>
            <div className ="profile">
            <DashBoardLink />
            </div>
            <div className = "pages">
            page
            </div>
        </DashboardDiv>
    );
};

export default DashBoard;