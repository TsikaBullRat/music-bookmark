import React from 'react'
import './Comp.css'

export const MusicCard = props => {
    
    return (
        <div key={props.info.id} className="music-card">
            <img src={props.info.res} alt="No Album Art"/>
            <p>Song: {props.info.song}</p>
            <p>Artist: {props.info.artist}</p>
            <p>Album: {props.info.album}</p>
            <p>Genre: {props.info.genre}</p>
        </div>
    )
}