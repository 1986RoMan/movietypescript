import React, {FC} from 'react';

import {Outlet} from 'react-router-dom'
import {Header, Menu} from "../../componets";

const MainLayout:FC = () => {
    return (
        <div style={{ display:'flex', flexWrap:'wrap',background:'black', margin:'auto 200px' }}>
             {/*backgroundImage:"url(https://klike.net/uploads/posts/2019-11/1573724735_11.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>*/}
                <Header/>
                <div style={{boxSizing:'border-box'}}>
                    <Menu/>
                    <Outlet/>
                </div>
        </div>
    );
};

export {MainLayout};