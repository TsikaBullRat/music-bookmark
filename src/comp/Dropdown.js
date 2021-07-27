import { useState } from "react"

const Items = props => {

}

export const Dropdown = props => {

    const Genre = [...new Set(props.info.map(item => item.genre))]
    const Artist = [...new Set(props.info.map(item => item.artist))]
    const Album = [...new Set(props.info.map(item => item.album))]

    console.log(props)

    const Filter = (change) =>{
        
        if(change = null){
            props.info.show = true
        }else{
            props.info.show = false
            if(change == props.info.genre){props.info.show = true}
            if(change == props.info.genre){props.info.show = true}
            if(change == props.info.genre){props.info.show = true}
        }
    }
    return (
        <>
            <select className="dropdown" name="Filter" id="filter" >{/*onChange={Filter(document.getElementById('filter').value)}*/}
                <option value="">All Tracks</option>
                <optgroup label="Genre">
                    {Genre.map(item =>
                        <option value={item}>{item}</option>
                    )}
                </optgroup>
                <optgroup label="Artist">
                    {Artist.map(item =>
                        <option value={item}>{item}</option>
                    )}
                </optgroup>
                <optgroup label="Album">
                    {Album.map(item =>
                        <option value={item}>{item}</option>
                    )}
                </optgroup>
            </select>
        </>
    )
}