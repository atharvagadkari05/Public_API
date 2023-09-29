import express from 'express'
import MongoConnection from './config/db.js'
import cors from 'cors'
// import './config/db.js'
const app = express();

MongoConnection();


const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json());

// app.use('/api/v1/', auth)
// app.use('/api/v1/', posts)
// app.use('/api/v1/', features)
app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`)
})