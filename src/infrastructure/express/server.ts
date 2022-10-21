import express from 'express';
import StatusCodes from "http-status-codes";
import bodyParser from './middlewares/bodyParser';
import { AppDataSource } from '../repositories/type-orm/dataSource';
import router from './routes';

export const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("DB connection ready")
  })
  .catch((error) => console.log(error))

app.use(bodyParser);
app.use('/api', router);
app.get('/', (_req, res, _next) => {
  res.sendStatus(StatusCodes.NO_CONTENT);
});

// Port can be configured in .env file
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;