const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/userModel');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/usersDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// Read users
app.get('/read', async (req, res) => {
    const users = await User.find();
    res.render('read', { users });
});

// Create user
app.post('/create', async (req, res) => {
    const { name, email, imageUrl } = req.body;
    await User.create({ name, email, imageUrl });
    res.redirect('/read');
});

// Delete user
app.post('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.redirect('/read');
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
