import { useState, useEffect } from 'react'
import { MusicCard } from "./MusicCard"
import './Comp.css'



export const Body = (props) => {

    /*useEffect(() => {
        console.log(props.data);
    });*/

    const Create =item=>{
        return(
            <MusicCard info={item} />
        )
    }
    return (
        <div className="music-box">
            {props.data.map(item=>Create(item))}
        </div>
    )
}
