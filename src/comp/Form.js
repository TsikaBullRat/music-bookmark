import './Comp.css'
import { IoMdExit } from 'react-icons/io'
import { useState } from 'react'

export const Form = (props) => {

    const[ show, setShow] = useState(false)
    const add_track = {
        form: {
            display: 'block',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '967.8px',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1
        },
        add: {
            display: 'block',
            position: 'relative',
            zIndex: 'inherit'
        }
    }

    return (
        <>
            <button style={add_track.button} onClick={setShow(!show)}>Add Track</button>
            <div style={show ? add_track.form : {display:'none'}}>

                <button
                    className="exit-button"
                    onClick={setShow(!show)}
                >
                    <IoMdExit size="50px" />
                </button>
                <form>
                    <h2>Add Track</h2>
                    <label>Track</label>
                    <input type="text" />
                    <label>Artist</label>
                    <input type="text" />
                    <label>Album</label>
                    <input type="text" />
                    <label>Genre</label>
                    <input type="text" />
                    <label>Year</label>
                    <input type="text" />
                    <label>URL</label>
                    <input type="url" />
                    <input type="submit" className="submit" />
                </form>
        </div>
        </>
    )
}
