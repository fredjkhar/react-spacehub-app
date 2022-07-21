import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Articles from './pages/Articles'
import Galleries from './pages/Galleries'
import OneArticle from './pages/OneArticle'
import FAQ from './pages/FAQ'
import { AuthContextProvider } from './contexts/AuthContext';
import i18next from 'i18next'



const App = () => {
  const [user, setUser] = useState(null);

  const [article, setArticles] = useState(1);

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

  const [lang, setlang] = useState('fr');

  const changeLanguage = () => {
    i18next.changeLanguage(lang);
    lang === 'fr' ? setlang('en') : setlang('fr');
  }; 

  return (
    <AuthContextProvider>
      <Router>
      <Switch>
        <Route exact path="/">
            <Home user = {user} changeLanguage = { changeLanguage } setArticles = { setArticles }/>
        </Route>
        <Route exact path="/signIn">
            <SignIn setUser = {setUser} changeLanguage = { changeLanguage }/>
        </Route>
        <Route exact path="/signUp">
            <SignUp setUser = {setUser} changeLanguage = { changeLanguage }/>
        </Route>
        <Route exact path="/articles">
            <Articles user = {user} changeLanguage = { changeLanguage } setArticles = { setArticles }/>
        </Route>
        <Route exact path="/galleries">
            <Galleries user = {user} changeLanguage = { changeLanguage }/>
        </Route>
        <Route exact path="/article">
            <OneArticle user = {user} changeLanguage = { changeLanguage } article = {article}/>
        </Route>
        <Route exact path="/faq">
            <FAQ user = {user} changeLanguage = { changeLanguage }/>
        </Route>
      </Switch>
    </Router>
    </AuthContextProvider>
  )
}

export default App
