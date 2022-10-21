import React, {FC} from 'react';

import {Outlet} from 'react-router-dom'
import {Header, Menu} from "../../componets";

const MainLayout:FC = () => {
    return (
        <div style={{ height:'300px',display:'flex',flexDirection:'column'}}>
             {/*backgroundImage:"url(https://klike.net/uploads/posts/2019-11/1573724735_11.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>*/}
            <div style={{}}>
                <Header/>
                <div>
                    <Menu/>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export {MainLayout};