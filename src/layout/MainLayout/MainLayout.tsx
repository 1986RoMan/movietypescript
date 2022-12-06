import React, {FC} from 'react';

import {Outlet} from 'react-router-dom'
import {Header, Menu} from "../../componets";

const MainLayout: FC = () => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', background: 'black', margin: 'auto 200px'}}>
            <Header/>
            <div style={{boxSizing: 'border-box'}}>
                <Menu/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};