import './Comp.css'
import { IoMdExit } from 'react-icons/io'
import { useState } from 'react'

export const Form = props => {

    const [display, setDisplay] = useState(props.open)
    document.getElementsByClassName('form').style.display = display

    return (
        <div className="form">
            <button 
                className="exit-button" 
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

    )
}