import express from 'express'
import mongoose, { mongo } from 'mongoose';
import cors from 'cors'
// import './config/db.js'
const app = express();

mongoose.connect('mongodb+srv://atharvagadkari05:<password>@cluster0.p5nxgv5.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Database connected")
})


const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json());

// app.use('/api/v1/', auth)
// app.use('/api/v1/', posts)
// app.use('/api/v1/', features)
app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`)
})