// step-1
// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
});

const app = express();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});