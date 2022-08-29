const app = require('express')();
const compression = require('compression');

app.use(compression());

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.json({ message: 'Hurray!! admin service works' });
})

app.listen(PORT, () => console.log(`Admin service is live at http://localhost:${PORT}`))