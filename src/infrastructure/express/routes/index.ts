import express from "express";
import StatusCodes from "http-status-codes";
import { userRoutes } from './user';

const router = express.Router();

router.get('/', (_req, res, _next) => {
  res.sendStatus(StatusCodes.NO_CONTENT);
});

router.use('/users', userRoutes);

export default router;