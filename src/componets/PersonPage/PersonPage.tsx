import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook";

import {personAction} from "../../redax";
import {Person} from "../Person/Person";
import ReactPaginate from "react-paginate";


const PersonPage:FC = () => {
   const [page,setPage]=useState(1)
    const dispatch = useAppDispatch();
    const {moviesPerson,pageCount} = useAppSelector(state => state.personReducer);
  useEffect(()=>{
      dispatch(personAction.personPopular({page}))
  },[page])

    const handlePageClick = ({selected}: { selected: number }) => {
        setPage(selected + 1)
    };
    return (
        <div>

        <div  style={{display: 'flex',flexWrap:'wrap',marginTop:'50px',marginLeft:'280px'}}>
            {
                moviesPerson.map(person=><Person key={person.id} person={person}/>)
            }
        </div>
            <div style={{position:'sticky',bottom:0,width:"100%"}}>
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

export {PersonPage};