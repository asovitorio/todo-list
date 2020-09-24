import React from 'react'
import { BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Todo from '../todo/todo'
import About from '../about/about'

export default props =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/todos' exact component={Todo} />
                <Route path='/about'  component={About} />
                <Redirect from='*' to='/todos' />
            </Switch>
        </BrowserRouter>
    )
}