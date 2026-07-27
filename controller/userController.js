const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = db.User;

async function registerUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists.' });
            