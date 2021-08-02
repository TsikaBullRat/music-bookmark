import './Comp.css'
import { IoMdExit } from 'react-icons/io'
import { useState } from 'react'

export const Form = (props) => {
    const [track, setTrack] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState(0)
    const [url, setURL] = useState('')

    let show = {
        form: {
            display: 'none'
        },
        
    }
        if(props.display){
            show.form = {
                display: 'block',
            }
        }else{
            show.form = {
                display: 'none',
            }
        }
        const Submit = e =>{
            e.preventDefault();
            props.Submit(track, artist, album, genre,url)
        }

    return (
        <>
            
            <div style={show.form} className="add_form">
                <button
                    className="exit-button"
                    onClick={props.Hide}
                >
                    <IoMdExit size="50px" />
                </button>
                <form onSubmit={Submit}>
                    <h2>Add Track</h2>
                    <label>Track</label>
                    <input type="text" onChange={e=> setTrack(e.target.value)}/>
                    <label>Artist</label>
                    <input type="text" onChange={e=> setArtist(e.target.value)}/>
                    <label>Album</label>
                    <input type="text" onChange={e=> setAlbum(e.target.value)}/>
                    <label>Genre</label>
                    <input type="text" onChange={e=> setGenre(e.target.value)}/>
                    <label>Year</label>
                    <input type="text" onChange={e=> setYear(e.target.value)}/>
                    <label>URL</label>
                    <input type="url" onChange={e=> setURL(e.target.value)}/>
                    <input type="submit" className="submit" />
                </form>
            </div>
        </>
    )
}
