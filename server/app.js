const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors());

const api = [
    {
        "id": 2,
        "position": "Full Stack Developer",
        "name": "Geace",
    }
]

app.get('/', (req, res) => {
    res.json(api);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
