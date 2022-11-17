import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {tvActions} from "../../redax/slices/tv.slice";
import {TvTop} from "./TvTop";
import {MdChevronLeft,MdChevronRight} from "react-icons/md";

const TvsTop:FC = () => {
    const {tvsTop} = useAppSelector(state => state.tvReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(tvActions.allTvTop())
    },[])

    const leftSlide:any = () => {
      const sliderLeft:any= document.getElementById('slider');
        sliderLeft.scrollLeft = sliderLeft.scrollLeft + 500
    }
    const RightSlide:any = () => {
        const sliderRight:any= document.getElementById('slider');
        sliderRight.scrollLeft = sliderRight.scrollLeft - 500
    }
    return (
        <div style={{marginLeft:'280px', marginBottom:'50px'}}>
            <h2  className='justify-content-sm-center flex items-center'>Топ TVпередачі</h2>
            <div className='justify-content-sm-center relative flex items-center align-content-center ' >
                <MdChevronLeft onClick={RightSlide} size={40}/>
                <div  id={'slider'} className='w-[700px]  overflow-x-hidden overflow-y-hidden scroll whitespace-nowrap ' >
                    {
                    tvsTop.map(tvTop => <TvTop key={tvTop.id} tvTop={tvTop}/>)
                }
                </div>
                <MdChevronRight onClick={leftSlide} size={40}/>
            </div>
        </div>
    );
};

export {TvsTop};