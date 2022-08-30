const express = require('express');
const app = express();
const compression = require('compression');
const cors = require('cors')
const fs = require('fs');

app.use(compression());
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  const db = fs.readFileSync('./db.json', { encoding: 'utf-8' });

  res.json({ trips: JSON.parse(db) });
})

app.post('/save', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }));
    db.push(req.body);

    fs.writeFileSync('db.json', JSON.stringify(db));
  
    res.status(201).json({ message: "Trip has been booked successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
})

app.listen(PORT, () => console.log(`Admin service is live at http://localhost:${PORT}`))