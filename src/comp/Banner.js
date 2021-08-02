import './Comp.css'
import profile from '../res/profile-image.jfif'
import { Dropdown } from './Dropdown'


export const Banner = props => {

    const add_track= {
        position: 'relative',
        width: '50%',
        height: '5vh'
    }
    
    return (
        <div className="head-box">
            <div className="profile-box">
                <div className="image-hold">
                    <img src={profile} />
                </div>
                <div>
                    <h1>Ntsikayomzi Ngcakani</h1>
                    <h3>Music Bookmark</h3>
                    <button style={add_track} onClick={props.Display}>
                Add Track
            </button>
                </div>
                
            </div>
            <nav className="simple-nav">
            <Dropdown  
                info={props.data}
                Filter={props.Filter}
            />
            </nav>
        </div>
    )
}