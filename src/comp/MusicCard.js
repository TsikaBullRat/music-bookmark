import './Comp.css'
import albumArt from '../res/Superunknown.jpg'

export const MusicCard =()=>{
    return(
        <div className="music-card">
            <img src={albumArt}/>
            <p>Song: Black Hole Sun</p>
            <p>Artist: Soundgarden</p>
            <p>Album: Superunknown</p>
            <p>Genre: Rock</p>
        </div>
    )
}