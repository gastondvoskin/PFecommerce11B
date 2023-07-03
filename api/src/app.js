// REQUIRE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/indexRouter.js");


// EXPRESS()
const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
// MIDDLEWARE: CORS CONFIGURATION
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*' ); /* https://viandaexpress.vercel.app, http://localhost:5173 */
  res.header("Access-Control-Allow-Credentials", "true"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); 
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// MIDDLEWARE TO THE ROUTER
app.use("/", router);

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  /* ?? */
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// EXPORTS
module.exports = app;
