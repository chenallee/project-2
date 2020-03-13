const express = require('express');
//import routes here
const sequelize = require('.config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});