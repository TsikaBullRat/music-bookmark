import { useState } from 'react'
import { Banner } from './comp/Banner'
import { Body } from './comp/Body'
import {Form} from './comp/Form'

function Main() {

    const [show,setShow] = useState(false)

    return (
        <>
            <Banner display={setShow}/>
            <Body />
            <Form open="show"/>
        </>
    )
}

export default Main