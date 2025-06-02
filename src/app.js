import express from 'express';
import config from './config/config.js';
import usersRouter from './routes/user.routes.js'
import petsRouter from './routes/pets.routes.js'
import mocksRouter from './routes/mock.routes.js';
import connectDB from './config/dbconfig.js';

const app = express();

const connection = connectDB(config.MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/mocks', mocksRouter);

app.listen(config.PORT, () => console.log(`Listening on http://localhost:${config.PORT}`))