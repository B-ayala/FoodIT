import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import productsRouter from './routes/productsroutes.js'; 

import { authentication } from './middlewares/auth.middleware.js';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', authentication, productsRouter);
app.use('/auth', authRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});