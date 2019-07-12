import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { signupValidation, loginValidation } from '../validation';

const routes = express.Router();

routes.post('/signup', async (req, res) => {
    const data = req.body;

    // lets validate data before save
    const { error } = signupValidation(data);
    if (error) return res.status(400).send(error.details[0].message);

    // check if the email exists
    const emailExist = await User.findOne({ email: data.email });
    if (emailExist) return res.status(400).send('Email already exists');

    // confirm password
    if (data.password !== data.confirmPassword) return res.status(400).send('passwords are different');

    // hash password
    const salt = await bcrypt.genSalt(10);
    const haschedPassword = await bcrypt.hash(data.password, salt);

    // create a new user
    const user = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: haschedPassword,
    });
    try {
        const saveUser = await user.save();
        return res.send(saveUser);
    }
    catch (err) {
        return res.status(400).send(err);
    }
});

routes.post('/signin', async (req, res) => {
    const data = req.body;

    // validate data
    const { error } = loginValidation(data);
    if (error) return res.status(400).send(error.details[0].message);

    // check if the email exists
    const user = await User.findOne({ email: data.email });
    if (!user) return res.status(400).send('Email is not found');

    // password is correct
    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) return res.status(400).sed('invalid password');

    // create  and assign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET); // eslint-disable-line
    return res.header('auth-token', token).send({ user, token });
});

export default routes;
