import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authentication';
import userRoutes from './routes/user';
// config .env
dotenv.config();

// app
const app = express();

// connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('conected to db'));

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'auth-token, X-PINGOTHER,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization');
    next();
});

// routes middlewares
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// run app on port
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server up and running in port ${process.env.PORT}`);
});
