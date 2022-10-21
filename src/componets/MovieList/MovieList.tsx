import React, {FC, useEffect, useState} from 'react';
import {movieAction, personAction} from "../../redax";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {MovieCard} from "../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import './Pagination.scss';

const MovieList: FC = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const {movies, pageCount,searchM,filterYearValue} = useAppSelector(state => state.movieReducer);


    useEffect(() => {
        dispatch(movieAction.allMovie({page}))
    }, [page])
    console.log(movies)
    console.log(filterYearValue)
    console.log(pageCount)
    const handlePageClick = ({selected}: { selected: number }) => {
        console.log(selected)
        setPage(selected + 1)
    };
    return (
        <div >

            <div style={{display: 'flex',flexWrap:'wrap',paddingLeft:'250px'}}>
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
            <div>
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

export {MovieList}