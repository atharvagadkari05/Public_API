import mongoose from 'mongoose'

const mongooseConnect = async ()=>{
  await mongoose.connect('mongodb+srv://atharvagadkari05:atharva1418@cluster0.p5nxgv5.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB :', error);
});
}

export default mongooseConnect