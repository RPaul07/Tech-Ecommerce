const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middlewear
app.use(bodyParser.json());

//Routes
const authRoutes = require('./routes/auth');
const clientRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

//Roues setup
app.use('./auth', authRoutes); // login
app.use('./client', clientRoutes); //client
app.use('./admin', adminRoutes); // Admin


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
