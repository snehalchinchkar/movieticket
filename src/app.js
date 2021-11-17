import React from 'react'
import {BrowserRouter ,Switch, Route } from 'react-router-dom'
import Theater from './component/theater'
import Book from './component/book'
import Home from './component/home'

const app = () => {
    return (
        
        <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/book/theater/:id' component={Theater}/>

        <Route exact path='/book/:id' component={Book}/>
       
        </Switch>
     </BrowserRouter>
      
        
    )
}

export default app


