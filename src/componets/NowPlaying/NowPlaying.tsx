import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {movieAction} from "../../redax";
import {NowPlayingCard} from "../NowPlayingCard/NowPlayingCard";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

const NowPlaying:FC = () => {
    const {nowPlayingNow} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(()=>{
       dispatch(movieAction.nowPlying())
    },[])
    console.log(nowPlayingNow)

    const leftSlide:any = () => {
        const sliderLeft:any= document.getElementById('slider');
        sliderLeft.scrollLeft = sliderLeft.scrollLeft + 500
    }
    const RightSlide:any = () => {
        const sliderRight:any= document.getElementById('slider');
        sliderRight.scrollLeft = sliderRight.scrollLeft - 500
    }

    return (
        <div style={{ marginLeft:'230px', marginBottom:'50px'}}>
            <h2  className='justify-content-sm-center flex items-center'>Дивляться</h2>
            <div className='justify-content-sm-center relative flex items-center align-content-center '  >
                <MdChevronLeft style={{color:'white'}} onClick={RightSlide} size={40}/>
                <div  id={'slider'} className='relative flex items-center w-[700px]  overflow-x-hidden overflow-y-hidden scroll whitespace-nowrap '>
            {
                nowPlayingNow.map(nowPlay => <NowPlayingCard key={nowPlay.id} nowPlay={nowPlay}/>)
            }
                </div>
                <MdChevronRight style={{color:'white'}}  onClick={leftSlide} size={40}/>
            </div>
        </div>
    );
};

export {NowPlaying};