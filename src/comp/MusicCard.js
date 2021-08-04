import React from 'react'
import './Comp.css'
import { BiPlay, BiTrash } from 'react-icons/bi'

export const MusicCard = props => {

    const image = require('../res/Superunknown.jpg')
    const handleDelete = () => {
        props.Delete(props.info.id)
    }

    return (
        <div key={props.info.id} className="music-card">
            <img src={props.info.res} alt="No Album Art" />
            <p>Song: {props.info.song}</p>
            <p>Artist: {props.info.artist}</p>
            <p>Album: {props.info.album}</p>
            <p>Genre: {props.info.genre}</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                
            <a href={props.info.url} className="music-icons">
                <BiPlay />
            </a>
            <button onClick={handleDelete} className="music-icons">
                <BiTrash />
            </button>
            </div>
        </div>
    )
}