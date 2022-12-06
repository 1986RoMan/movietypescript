import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {SearchForm} from "../SearchForm/SearchForm";
import {FormYear} from "../FormYear/FormYear";

const Menu:FC = () => {
        return (
            <div style={{top:'100px'}}>
                <div style={{ height: '500px',width:'250px', background: 'rgba(129,45,211,0.3)',marginTop:'-200px',position: 'fixed',borderRadius:'5%'}}>

                    <div className='mb-0.5'>
                        <Link to={'/'} >На головну сторінку</Link>
                    </div>
                    <SearchForm/>
                    <FormYear/>
                    <Link to={'person'}>Популярні актори</Link>
                </div>
            </div>

        );
    };
export {Menu};