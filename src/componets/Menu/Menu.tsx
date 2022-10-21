import React, {FC} from 'react';
import {SearchForm} from "../SearchForm/SearchForm";
import {FilterMovie} from "../FilterMovie/FilterMovie";
import {FormYear} from "../FormYear/FormYear";
import {Link} from "react-router-dom";

const Menu:FC = () => {
        return (
            <div style={{}}>
                <div style={{ height: '500px',width:'250px', background: 'silver', position: 'fixed', margin: '0',borderRadius:'5%'}}>

                    <div>
                        <Link to={'/'} >На головну сторінку</Link>
                    </div>
                    <SearchForm/>
                    <FilterMovie/>
                    <FormYear/>
                    <Link to={'person'}>Популярні актори</Link>
                </div>
            </div>

        );
    };
export {Menu};