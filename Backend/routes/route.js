import express from 'express';
import addUser from '../controller/addUser.js';
import deleteUsers from '../controller/deleteUser.js';
import editUser from '../controller/editUser.js';
import getUsers from '../controller/getUsers.js';
import getUserById from '../controller/getUser.js';

const router = express.Router();

router.post('/add', addUser)
router.get('/', getUsers)
router.get('/:id', getUserById)
router.put('/:id', editUser);
router.delete('/:id', deleteUsers);






export default router;