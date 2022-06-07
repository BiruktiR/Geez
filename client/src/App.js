import React from 'react';

import Footer from './components/Footer'
import Header from './components/Header'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute';
// Screens
import PrivateScreen from "./components/screens/PrivateScreen";

import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
// pages
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Login from'./Pages/Login'
import Register from'./Pages/Register'
import Dashboard from "./Pages/Dashboard";
import Continue from './Pages/Continue';


function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='main-wrapper'>
          <Switch>
         
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
              <Route path='/dashboard'>
              <Dashboard />
            </Route>  
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path= '/continue'>
              <Continue/>
              </Route>
             <PrivateRoute exact path="/" component={PrivateScreen} />
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/register'>
              <Register/>
            </Route>
              
            <Route path='/forgotpassword'>
              <ForgotPasswordScreen/>
            </Route>
            <Route path='/passwordreset/:resetToken'>
              <ResetPasswordScreen/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
