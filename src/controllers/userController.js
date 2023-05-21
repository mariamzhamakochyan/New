const User = require('../models/User');

exports.createUser = async (req, res) => {
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

    res.status(201).json(savedUser); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving users.' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the user.' });
  }
};


exports.updateUserById = async (req, res) => {
  try {
    const { name, surname, email, dateOfBirth, gender, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, surname, email, dateOfBirth, gender, password },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};


exports.deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};