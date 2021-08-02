import { useState } from 'react'
import { Banner } from './comp/Banner'
import { Body } from './comp/Body'
import data from "./comp/Data"



function Main() {

    
    const [show, setShow] = useState(false)
    const [tracks, setTracks] = useState(data)
    const [genre, setGenre] = useState([...new Set(tracks.map(item => item.genre))])
    const [artist, setArtist] = useState([...new Set(tracks.map(item => item.artist))])
    const [album, setAlbum] = useState([...new Set(tracks.map(item => item.album))])
    

    const Display = () => setShow(!show)
    const Filter = value => {
        setTracks(tracks.map(
            item => {
                switch (value) {
                    case 'all':
                        item.show = true
                    case item.genre:
                        item.show = true
                        break;
                    case item.artist:
                        item.show = true
                        break;
                    case item.album:
                        item.show = true
                        break;
                    default:
                        item.show = false
                        break;
                }
            }
        ))
    }

    

    return (
        <>
            <Banner data={tracks} Display={Display} Filter={Filter} genre={genre} artist={artist} album={album}/>
            <Body data={tracks} show={show} Display={Display} Hide={Display}/>
        </>

    )
}

export default Main