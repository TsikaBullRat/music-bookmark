import './Comp.css'
import profile from '../res/profile-image.jfif'
import { Dropdown } from './Dropdown'
import {Form} from './Form'
import { useState } from 'react'

export const Banner = () => {

    const [show, setShow] = useState(false)
    const Show = () =>{
        setShow(!show)
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
                    <Form show={[show,Show]}/>
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