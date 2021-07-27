import { MusicCard } from "./MusicCard"
import './Comp.css'



export const Body = (props) => {

    const Create =item=>{
        if(props.data.show = true){
            return(
                <MusicCard info={item} />
            )
        }
    }
    return (
        <div className="music-box">
            {props.data.map(item=>Create(item))}
        </div>
    )
}
