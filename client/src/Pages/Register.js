//import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Slider from "../components/Slider";
import '../App.css';
//export default Register
import {useState} from "react";
import axios from "axios";
//import "./Register.css";
import SignUp from '../components/SignUpForm';
import {Alert} from "@mui/material";
import Login from './Login';
const config = {
    header: {
        "Content-Type": "application/json",
    },
};
const Register = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("");
    const registerHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Passwords do not match");
        }

        try {
            const {data} = await axios.post(
                "/api/auth/register",
                {
                    username:name,
                    email,
                    password,
                },
                config
            );
            console.log("token----", data)

           

            history.push("/login");
        } catch (error) {
            setError(error.message);
            console.log("error==--", error.message)
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    // const registerUser = async (event) => {
    //     event.preventDefault()
    //     // const body = {
    //     //     name: name,
    //     //     email: email,
    //     //     password: password
    //     // }
    //     // const response = await axios.post('https://localhost:5000/register', body)
    //     // const data = await response.data
    //     const response = await fetch('http://localhost:5000/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name,
    //             email,
    //             password,
    //         }),
    //     })
    //     const data = await response.json()
    //     if (data.status === 'OK') {
    //         history.push('/login')
    //     }
    // }


    return (
        <><Slider/>
        
            {error&&<Alert severity="error">{error}</Alert>}
            <SignUp
                name={name}
                setName={setName}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}

                registerUser={registerHandler}
            />

            {/* <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name" />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email" />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password" />
                <input type="submit" value="Register" />
            </form>
        </div> */
            }
        </>
    )
}



export default Register;

