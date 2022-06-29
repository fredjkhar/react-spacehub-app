import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Articles from './pages/Articles'
import Galleries from './pages/Galleries'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/signIn">
            <SignIn/>
        </Route>
        <Route exact path="/signUp">
            <SignUp/>
        </Route>
        <Route exact path="/articles">
            <Articles/>
        </Route>
        <Route exact path="/galleries">
            <Galleries/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
