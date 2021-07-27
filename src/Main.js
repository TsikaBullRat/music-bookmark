import { Banner } from './comp/Banner'
import { Body } from './comp/Body'
import { Form } from './comp/Form'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import data from "./comp/Data"

function Main() {

    return (
        <Router>
            <Route path='/' render={props =>
                <>
                    <Banner data={data} />
                    <Body data={data} />
                </>
            } />
        <Switch >
            <Route>
            <Form />
            </Route>
        </Switch>

            
        </Router>
    )
}

export default Main