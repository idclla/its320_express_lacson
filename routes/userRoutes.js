import { createUser, getUsers } from "../controller/userController.js";
import e from "express";

export const router = e.Router();

router.post('/create', createUser);
router.get('/', getUsers);

