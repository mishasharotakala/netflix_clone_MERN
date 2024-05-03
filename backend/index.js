// step-1
// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';

databaseConnection();

dotenv.config({
    path: '.env'
});

const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// api
app.use('/api/v1/user', userRoute);
// http://localhost:5000/api/v1/user/register

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});