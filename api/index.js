const app = require('./src/app.js');
const { sequelize } = require('./src/db.js');
require('dotenv').config();

const PORT = process.env.PORT;


sequelize.sync({ force: false }).then(() => {    /* force: true to update db Food id Datatype from integer to UUID */
  console.log('Connected to DB');
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

