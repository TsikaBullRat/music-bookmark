import './Comp.css'
import { IoMdExit } from 'react-icons/io'
import {Link} from 'react-router-dom'

export const Form = (props) => {

    return (
        <>
            <div>
                <Link
                    className="exit-button"
                >
                    <IoMdExit size="50px" />
                </Link>
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
