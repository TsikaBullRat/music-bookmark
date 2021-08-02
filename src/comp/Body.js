import { MusicCard } from "./MusicCard"
import './Comp.css'
import { useState } from "react"
import { Form } from './Form'
import { v1 as uuid } from 'uuid'



export const Body = (props) => {

    const [tracks, setTracks] = useState(props.data)

    const handleSubmit = (song, artist, album, genre, url, year) => {
        setTracks([...tracks, { id: uuid(), song, artist, album, genre, url, year, res:' ', show: true }])
        props.Display()
    }
    const handleDelete = id =>{
        var newtracks = tracks.filter(item=>item.id !== id)
        setTracks(newtracks)
    }
    return (
        <>
        <div className="music-box">
            {tracks.map(item=> item.show? <MusicCard info={item} Delete={handleDelete}/> : null)}
        </div>
        <Form display={props.show} Hide={props.Display} Submit={handleSubmit} />
        </>
    )
}
