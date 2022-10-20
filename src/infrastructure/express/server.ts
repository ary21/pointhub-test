import express from 'express';
import bodyParser from './middlewares/bodyParser';
import { userRoutes } from './routes/user';

export const app = express();

app.use(bodyParser);
app.use('/users', userRoutes);

// Port can be configured in .env file
const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
