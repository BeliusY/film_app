import express from 'express';
const userRouter = express.Router();

import {
  register,
  login,
  edit,
  getInfo,
  deleteUser,
} from '../controllers/userController.js';

import auth from '../middleware/auth.js';

userRouter
  .post('/register', register)
  .post('/login', login)
  .get('/get-user', auth, getInfo)
  .put('/edit', auth, edit)
  .delete('/delete', auth, deleteUser);

export default userRouter;
