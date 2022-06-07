import { useState, useEffect } from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Box from '@mui/material/Box';
//import "./LoginScreen.css";
//import React, { useState } from 'react'
import Intro from "../components/Intro";
import Price from "../components/Price";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Team from "../components/Team";
import Blog from "../components/Blog";
import Counter from "../components/Counter";

import About from "../components/About";

import SignIn from '../components/LoginForm';




import {Container, Grid, Stack, TextField} from "@mui/material";
import * as PropTypes from "prop-types";
const config = {
  header: {
    "Content-Type": "application/json",
  },
};




function Item(props) {
  return null;
}

Item.propTypes = {children: PropTypes.node};
const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }
  // }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();


    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
     // localStorage.setItem("authToken", data.token);
      history.push("/dashboard");
    } catch (error) {
      console.log("--------->",error)
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
<Slider/>
      <form onSubmit={loginHandler} >

        {error && {error}}

          {/*<label htmlFor="email">Email:</label>*/}
          {/*<input*/}
          {/*  type="email"*/}
          {/*  required*/}
          {/*  id="email"*/}
          {/*  placeholder="Email address"*/}
          {/*  onChange={(e) => setEmail(e.target.value)}*/}
          {/*  value={email}*/}
          {/*  tabIndex={2}*/}
          {/*/>*/}
        {/*<input*/}
          {/*  type="password"*/}
          {/*  required*/}
          {/*  id="password"*/}
          {/*  autoComplete="false"*/}
          {/*  placeholder="Enter password"*/}
          {/*  onChange={(e) => setPassword(e.target.value)}*/}
          {/*  value={password}*/}
          {/*  tabIndex={2}*/}
          {/*/>*/}
        <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
        >


          <Grid style={{marginTop:"100px"}} item xs={6}>

            <Grid item xs={6}>
              <h3 >Login</h3>
            </Grid>
            <TextField
                required
                id="outlined-required"
                label="email"
                defaultValue="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Grid>

          <Grid item xs={6}>
          Don't have an account? <Link to="/register">Register</Link>
          </Grid>

            <Grid item xs={6}>
              <label htmlFor="password">
                Password:{" "}
                <Link to="/forgotpassword" className="login-screen__forgotpassword">
                  Forgot Password?
                </Link>
              </label>
          </Grid>

        </Grid>



        





      </form>

    </>
  );
};

export default Login;