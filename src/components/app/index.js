import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { PageAdmins, PageUsers, PageUser } from '../pages'
class App extends Component{


    render(){
        return(
            <Switch>
                <Route
                path="/"
                component={PageUsers}
                exact />
        
                <Route
                path="/page-admins"
                component={PageAdmins}
                />
                <Route path='/:id' render={({match}) => {
                  const id = match.params.id;
                  return(<PageUser idx={id}/>)
              }} exact/>
          </Switch>
        )
    }
}


export default App;