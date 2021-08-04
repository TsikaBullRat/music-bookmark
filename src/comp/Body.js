import { MusicCard } from "./MusicCard"
import './Comp.css'
import { useState } from "react"
import { Form } from './Form'
import { v1 as uuid } from 'uuid'



export const Body = (props) => {

    const [tracks, setTracks] = useState(props.data)
    const [oldTracks, setOldTracks] = useState(tracks)

    const handleSubmit = (song, artist, album, genre, url, year) => {
        setTracks([...tracks, { id: uuid(), song, artist, album, genre, url, year, res:' ', show: true }])
        setOldTracks([...oldTracks, { id: uuid(), song, artist, album, genre, url, year, res:' ', show: true }])
        props.Display()
        
    }
    const handleDelete = id =>{
        setTracks(tracks.filter(item=>item.id !== id))
        setOldTracks(oldTracks.filter(item=>item.id !== id))
    }
    const Find = e =>{
        if(e.target.value === "")setTracks(oldTracks)
        else{
            setTracks(oldTracks.filter(item =>{
                for(var i=0; i < item.song.length; i++)
                    if(item.song.indexOf(e.target.value) !== -1) return item
                for(var i=0; i < item.artist.length; i++)
                    if(item.artist.indexOf(e.target.value) !== -1) return item
                for(var i=0; i < item.album.length; i++)
                    if(item.album.indexOf(e.target.value) !== -1) return item
                for(var i=0; i < item.genre.length; i++)
                    if(item.genre.indexOf(e.target.value) !== -1) return item
            }))
        }
        console.log(e.target.value)
    }
    return (
        <>
        <input type="text" onChange={Find} placeholder="Search" className="search_box"/>
        <div className="music-box">
            {tracks.map(item=> item.show? <MusicCard info={item} Delete={handleDelete}/> : null)}
        </div>
        <Form display={props.show} Hide={props.Display} Submit={handleSubmit} />
        </>
    )
}
