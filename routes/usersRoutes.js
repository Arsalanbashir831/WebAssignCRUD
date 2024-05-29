const express = require('express');
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUser,

} = require('../controllers/userController');

const router = express.Router();
router.get('/search',searchUser)
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;
