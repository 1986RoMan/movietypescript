import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import ReactPaginate from "react-paginate";

import {tvActions} from "../../redax/slices/tv.slice";
import {Tvs, TvsTop} from "../../componets";
import './TvPage.scss'

const TvPages:FC = () => {
    const [page, setPage] = useState(1);
     const {tvs,pageCount,errors} = useAppSelector(state => state.tvReducer);
     const dispatch = useAppDispatch();
     useEffect(()=>{
         dispatch(tvActions.allTv({page}))
     },[page])

    const handlePageClick = ({selected}: { selected: number }) => {
        setPage(selected + 1)
    };

    return (
        <div>
            <TvsTop/>
        <div className={'cardo'} style={{columnGap:'15px',paddingLeft:'270px'}}>
            {
                 tvs.map(tv => <Tvs key={tv.id} tv={tv}/>)
            }
        </div>
            <div style={{position:'sticky',bottom:0}}>
                {pageCount && <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    forcePage={page - 1}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    containerClassName='Pagination'
                    activeClassName="Pagination__active"
                    previousClassName="Pagination__page-item"
                />}
            </div>
        </div>
    );
};

export {TvPages};