import './Comp.css'
import profile from '../res/profile-image.jfif'
import { Dropdown } from './Dropdown'

export const Banner = props => {

    return (
        <div className="head-box">
            <div className="profile-box">
                <div className="image-hold">
                    <img src={profile} />
                </div>
                <div>
                    <h1>Ntsikayomzi Ngcakani</h1>
                    <h3>Music Bookmark</h3>
                    <button onClick={props.display('block')}>Add Track</button>
                </div>
            </div>
            <nav className="simple-nav">
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </nav>
        </div>
    )
}