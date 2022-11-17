import React, {FC, useEffect, useState} from 'react';
import {movieAction, personAction} from "../../redax";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {MovieCard} from "../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import './Pagination.scss';
import css from './MovieList.module.css'
import {NowPlaying} from "../NowPlaying/NowPlaying";

const MovieList: FC = () => {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const {movies, pageCount,searchM,filterYearValue,errors} = useAppSelector(state => state.movieReducer);

    console.log(errors)
    useEffect(() => {
        dispatch(movieAction.allMovie({page}))
    }, [page])

    const handlePageClick = ({selected}: { selected: number }) => {

        setPage(selected + 1)
    };
    return (
        <div >
            <NowPlaying/>
            <div  className={css.divi}>
                {
                  !errors ? movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                 : <h1>{errors}</h1>
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

export {MovieList}