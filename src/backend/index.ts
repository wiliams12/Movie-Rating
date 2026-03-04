const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: "Backend is running!" });
});

// Backend needed for API calls
app.get('/search', (req, res) => {
    res.json({});
});


app.listen(5000, () => console.log('Node server started on port 5000'));