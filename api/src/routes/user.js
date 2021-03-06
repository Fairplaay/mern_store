import express from 'express';
import verify from '../verifyToken';
import User from '../models/User';

const routes = express.Router();

routes.get('/getuser', verify, async (req, res) => {
    const { id } = req.query;
    const user = await User.findOne({ _id: id });


    res.send({
        email: user.email,
        firtsName: user.firstName,
        lastName: user.lastName,
    });
});

export default routes;
