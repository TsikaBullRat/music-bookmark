import { Banner } from './comp/Banner'
import { Body } from './comp/Body'
import data from "./comp/Data"

function Main() {

    return (
        <>
            <Banner  />
            <Body  data={data}/>
        </>
    )
}

export default Main