import './Comp.css'
import { IoMdExit } from 'react-icons/io'
import { useState } from 'react'
import { Track } from './Data'

const song = []



export const Form = props => {

    const [add_track, setAdd_Track] = useState({})
    const state = props.open

    const showForm = () =>{
        if( state = true){
            setAdd_Track({
                display: 'block',
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '967.8px',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 1
            })
        }else{
            setAdd_Track({ display: 'none'})
        }
    }

    const hideForm = () => state = false

    return (
        <div style={add_track}>
            {showForm()}
            <button
                className="exit-button"
                onClick={() => hideForm()}
            >
                <IoMdExit size="40px" />
            </button>
            <form>
                <h2>Add Track</h2>

                <label htmlFor="track">Track</label>
                <input id="track" type="text" />

                <label htmlFor="artist">Artist</label>
                <input id="artist" type="text" />

                <label htmlFor="album">Album</label>
                <input id="album" type="text" />

                <label htmlFor="genre">Genre</label>
                <input id="genre" type="text" />

                <label htmlFor="year">Year</label>
                <input id="year" type="text" />

                <label htmlFor="url">URL</label>
                <input id="url" type="url" />

                <input type="submit" className="submit" />
            </form>
        </div>

    )
}



