import { Banner } from './comp/Banner'
import { Body } from './comp/Body'
import data from "./comp/Data"

function Main() {

    return (
        <>
            <Banner  data={data}/>
            <Body  data={data}/>
        </>
    )
}

export default Main