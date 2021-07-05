const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongoose.connect(MONGODB_URI, {
  //useNewUrlParser: true,
  //useFindAndModify: false
//});

// routes
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/budget',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);




app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



/*
 For service worker inclass activity sample
 * Navigate to <http://localhost:3001> in Chrome and open the Dev Tools. In the `Application` tab, click on `Service Workers` on the left menu. Check to see if your service worker file was successfully found.

* If done correctly, you should see two messages logged in the browser console: one from the `service-worker.js` file and one from the script tag that you put in your `index.html` file.

Currently unable to npm run seed, or node server cannot be on
*/