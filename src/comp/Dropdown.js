import { useState } from "react"

const Items = props => {

}

export const Dropdown = props => {

    /*
    const Genre = [...new Set(props.info.genre ? props.info.map(item => item.genre):[])]
    const Artist = [...new Set(props.info.map(item => item.artist))]
    const Album = [...new Set(props.info.map(item => item.album))]
    */

    console.log(props)

    const Filter = e =>{
        props.Filter(e.target.value)
    }

    return (
        <>
            <select className="dropdown" name="Filter" id="filter" onChange={Filter}>
                <option value="all">All Tracks</option>
                <optgroup label="Genre">
                    {props.genre.map(item =>
                        <option value={item}>{item}</option>
                    )}
                </optgroup>
                <optgroup label="Artist">
                    {props.artist.map(item =>
                        <option value={item}>{item}</option>
                    )}
                </optgroup>
                <optgroup label="Album">
                    {props.album.map(item =>
                        <option value={item}>{item}</option>
                    )}
                </optgroup>
            </select>
        </>
    )
}