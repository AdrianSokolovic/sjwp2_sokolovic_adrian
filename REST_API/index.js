const express = require('express');
const app = express();

app.use(express.json());

// GET metoda
app.get('/users', (req, res) => {
    res.json([{ id: 1, name: "Ivan" }]);
});

// POST metoda
app.post('/users', (req, res) => {
    const user = req.body;
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log("Server radi na portu 3000");
});