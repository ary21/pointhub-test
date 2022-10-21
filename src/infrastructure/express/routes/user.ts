import { Router } from "express";
import * as userController from "@/app/controllers/user.controller";

export const userRoutes = Router();

userRoutes.get('/:id', userController.getByIdUserHandler);
userRoutes.get('/', userController.getAllUserHandler);
userRoutes.post('/', userController.createUserHandler);
userRoutes.put('/:id', userController.editUserHandler);
userRoutes.delete('/:id', userController.deleteByIdUserHandler);