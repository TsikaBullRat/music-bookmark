import './Comp.css'
import profile from '../res/profile-image.jfif'
import { Dropdown } from './Dropdown'
import {Link} from 'react-router-dom'

export const Banner = props => {

    var i;
    
    return (
        <div className="head-box">
            <div className="profile-box">
                <div className="image-hold">
                    <img src={profile} />
                </div>
                <div>
                    <h1>Ntsikayomzi Ngcakani</h1>
                    <h3>Music Bookmark</h3>
                    <Link>Add Track</Link>{/* style={{position: 'relative', top: '10%', left:'10%', background: '#50404d', width: '10%', height: '5%'}}*/}
                </div>
            </div>
            <nav className="simple-nav">
            <Dropdown  
                    info={props.data}/>
            </nav>
        </div>
    )
}