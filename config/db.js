import mongoose from "mongoose";

mongoose.connect('mongodb+srv://atharvagadkari05:atharva@database@cluster0.p5nxgv5.mongodb.net/?retryWrites=true&w=majority')
 .then(() => console.log('DATABASE CONNECTED'))
 .catch(err => {
  console.log('DATABASE CONNECTION ERROR', err)
  process.exit(1)
})

