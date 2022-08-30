const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.render('booking');
})

app.listen(PORT, () => console.log(`Booking service is live at http://localhost:${PORT}`));