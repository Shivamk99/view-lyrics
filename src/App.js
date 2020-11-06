import React, {Component} from "react"

import Navbar from "./Components/Layout/Navbar"

import { HashRouter as Router, Switch, Route} from "react-router-dom"

import Index from "./Components/Layout/Index"

import {Provider} from "./Context" 

import Lyrics from "./Components/tracks/Lyrics"


class App extends Component {
  render(){
    return (
        <Provider>
          <Router>
            <React.Fragment>
              <Navbar/>
                <div className = "container">
                  <Switch>
                    <Route exact path = "/" component = {Index} />
                    <Route exact path = "/lyrics/track/:id" component = {Lyrics} />
                  </Switch>
                </div>
            </React.Fragment>
          </Router>
        </Provider>
    );
  }
}

export default App;

