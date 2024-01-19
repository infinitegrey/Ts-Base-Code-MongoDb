import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import movieRoutes from './routes/movieRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', movieRoutes);

mongoose.connect(process.env.MONGODB_URI!);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
