const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

// import express from 'express';
// const router =express.Router(); 

//import {register ,login,forgotPassword,resetPassword} from '../controllers/auth';

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);
module.exports = router;