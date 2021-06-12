const { response } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const temporaryData = [
    {
        "name": "snaket",
        "email": "snaket@gmail.com",
        "password": "sdf45"
    },
    {
        "name": "shikhar",
        "email": "snadsasdgmail.com",
        "password": "sad5"
    },
    {
        "name": "ayush",
        "email": "snadfadast@gmail.com",
        "password": "1sd"
    }
]

exports.signUp = (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, " ", email, " ", password, "  ");

    const isValid = temporaryData.findIndex((ele) => (ele.email === email));
    if (isValid != -1) {
        res.status(400).json({
            error: "user already exists"
        });
    }
    // token 
    const token = jwt.sign({
        email: email,
    }, process.env.SCERET_KEY);
    // console.log(token);


    // hashig
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.send(500).json({
                error: "eroor generated"
            });
        }
        const user = {
            name,
            email,
            password: hash,
        }
        temporaryData.push(user);
        console.log(temporaryData);
        res.status(200).json({
            message: "user added suceesfully",
            token: token,
        })

        // res.send("token generated")
        // res.status(200).send(hash);
    });


};
exports.signIn = (req, res) => {
    // todo;
};
// check  if user exists or not

// hash password
// generate token
// send res to user 