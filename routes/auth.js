const express = require('express');
const { signUp, signIn } = require('../contollers/auth');
const router = express.Router();
router.post("/signup", signUp);
router.post("/signin", signIn);
// /.middleware
module.exports = router;
// localhost:8000/auth/signin
// localhost:8000/auth/signup