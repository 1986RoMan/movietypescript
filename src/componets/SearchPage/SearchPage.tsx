import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import ReactPaginate from "react-paginate";

import {movieAction} from "../../redax";
import {MovieCard} from "../MovieCard/MovieCard";

const SearchPage:FC = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const {searchM,pageCount,movies} = useAppSelector(state => state.movieReducer);

    const handlePageClick = ({selected}: { selected: number }) => {
        setPage(selected + 1)
    };
    useEffect(()=>{
            dispatch(movieAction.movieSearch({search:searchM,page}))
    }, [page,searchM])
    return (
        <div >

            <div style={{display: 'flex',flexWrap:'wrap',paddingLeft:'280px'}}>{
                movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }</div>
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
            </div >
        </div>
    );
};
export {SearchPage};