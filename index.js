import express, { json} from 'express';
import connectDB from './config//db.js';
import cors from 'cors';

import { router as userRouter } from './routes/userRoutes.js';
import { router as quotesRouter } from './routes/quotesRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(json());

connectDB();

app.use('/users', userRouter)
app.use('/quotes', quotesRouter)

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
