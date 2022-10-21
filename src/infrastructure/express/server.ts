import express from 'express';
import bodyParser from './middlewares/bodyParser';
import { AppDataSource } from '../repositories/type-orm/dataSource';
import { userRoutes } from './routes/user';

export const app = express();

app.use(bodyParser);
app.use('/users', userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("DB connection ready")
  })
  .catch((error) => console.log(error))

// Port can be configured in .env file
const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
