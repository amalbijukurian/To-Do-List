const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {
  createActivity,
  getActivity,
  deleteActivity,
} = require('./controllers/activityControllers');

const app = express();
const PORT = 3000;

const MONGODB_URL =
  'mongodb+srv://amalbiju:alen@cluster0.qgpfjnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(express.json());
app.use(cors());

app.post('/', createActivity);
app.get('/', getActivity);
app.delete('/:id', deleteActivity);
app.listen(PORT, () => {
  console.log('Server is running on port ', PORT);
});
