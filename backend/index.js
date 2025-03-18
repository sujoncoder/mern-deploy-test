const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend 2.0!' });
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});