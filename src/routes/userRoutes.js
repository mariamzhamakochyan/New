const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { name, surname, email, dateOfBirth, gender, password } = req.body;

    const newUser = new User({
      name,
      surname,
      email,
      dateOfBirth,
      gender,
      password,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving users.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the user.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
});

module.exports = router;