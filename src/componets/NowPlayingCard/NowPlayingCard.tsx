import React, {FC, useState} from 'react';
import {IMovie} from "../../interfaces/interfaces";
import {Link} from "react-router-dom";
import {IoIosInformationCircleOutline} from "react-icons/io";

import {useAppSelector} from "../../hooks/hook";
import css from './NowPlayingCard.module.css'

interface NowPlayingCard{
    nowPlay:IMovie
}
const NowPlayingCard:FC<NowPlayingCard> = ({nowPlay}) => {

    const {genres} = useAppSelector(state => state.genreReducer);
    const [info,setInfo] = useState(false);

    return (
        <div>
            <IoIosInformationCircleOutline style={{color:'white',fontSize:'30px',marginBottom:'-5px'}}
                                           onMouseOver={()=>{setInfo(prevState => !prevState)}}
                                           onMouseOut={()=>{setInfo(prevState => !prevState)}}
            />
            <div style={{ position: 'relative'}}>
                <Link to={`${nowPlay.id}`}
                     state={nowPlay}>
                <div className='w-[250px]  inline-block p-2 cursor-pointer ease-in-out decoration-300 '>
                    <img className='h-[250px]' src={`https://image.tmdb.org/t/p/w300/${nowPlay.backdrop_path}`}
                         alt={nowPlay.title}/>
                </div>
            </Link>
                {!info ? <div  onClick={() => {
                        setInfo(prevState => !prevState)
                    }}></div>
                    :
                    <div onClick={() => {
                        setInfo(prevState => !prevState)
                    }} className={css.blok1}>
                        <div><b>{nowPlay.title}</b></div>
                        Peйтинг:<div>{nowPlay.vote_average}</div>
                        Дата релізу:<div>{nowPlay.release_date}</div>
                        <div>
                            <b>Жанри:</b> {genres.map(value =>
                            <div key={value.id}> {nowPlay.genre_ids.includes(value.id)
                                ?
                                <div>
                                    {(value.name + ", ")}
                                </div> : ''}
                                <div/>
                            </div>)
                        }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export {NowPlayingCard};