import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Articles from './pages/Articles'
import Galleries from './pages/Galleries'
import userEvent from '@testing-library/user-event';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("auth failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home user = {user}/>
        </Route>
        <Route exact path="/signIn">
            <SignIn user = {user}/>
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
