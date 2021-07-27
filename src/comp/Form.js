import './Comp.css'
import { IoMdExit } from 'react-icons/io'
import { useState } from 'react'

export const Form = (props) => {

    console.log(props.show)

    const [display, setDisplay] = useState({
        form: {
            display: 'none'
        },
        add: {
            display: 'block',
            position: 'relative',
            zIndex: 'inherit'
        }
    })

    const Check = (bool) =>{
    if (bool = true) {
        setDisplay({
            form: {
                display: 'none',
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '967.8px',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 1
            },
            add: {
                display: 'block',
                position: 'relative',
                zIndex: 'inherit'
            }
        })
    } else {
        setDisplay({
            form: {
                display: 'none'
            },
            add: {
                display: 'block',
                position: 'relative',
                zIndex: 'inherit'
            }
        })
    }
}

    return (
        <>
            <button style={display.add} onClick={props.show[1]()}>Add Track</button>
            <div style={display.form}>

                <button
                    className="exit-button"
                >
                    <IoMdExit size="50px" />
                </button>
                <form>
                    <h2>Add Track</h2>
                    <label>Track</label>
                    <input type="text" />
                    <label>Artist</label>
                    <input type="text" />
                    <label>Album</label>
                    <input type="text" />
                    <label>Genre</label>
                    <input type="text" />
                    <label>Year</label>
                    <input type="text" />
                    <label>URL</label>
                    <input type="url" />
                    <input type="submit" className="submit" />
                </form>
            </div>
        </>
    )
}
