// step-1
// const express = require('express');
import express from 'express';

const app = express();
const PORT = 8000;

const callBackFunction = () => {
    console.log(`Server is running on port ${PORT}`);
}

app.listen(PORT, (PORT)=>{
    console.log(`Server is running on port ${PORT}`);
})