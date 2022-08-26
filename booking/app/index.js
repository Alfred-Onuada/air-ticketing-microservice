const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.static('./assets'));

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.render('booking');
})

app.post('/save', (req, res) => {
  res.status(201);
})

app.listen(PORT, () => console.log(`Booking service is live at http://localhost:${PORT}`));