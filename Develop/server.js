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

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



/*
 For service worker inclass activity sample
 * Navigate to <http://localhost:3001> in Chrome and open the Dev Tools. In the `Application` tab, click on `Service Workers` on the left menu. Check to see if your service worker file was successfully found.

* If done correctly, you should see two messages logged in the browser console: one from the `service-worker.js` file and one from the script tag that you put in your `index.html` file.

Currently unable to npm run seed, or node server cannot be on




Your challenge this week is to update an existing budget tracker application to allow for offline access and functionality.

If the user enters transactions offline, the total should be updated when they're brought back online. Once you’ve made these changes, you’ll deploy the application to Heroku.

Acceptance Criteria

GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated

You’ll need to use IndexedDB to add offline functionality. Review Module 18: NoSQL, Lesson 4: Add Offline Persistence with IndexedDB as a refresher on how to add this to your application.

You’ll also need to add a service worker to your application. Review Module 19: Progressive Web Applications (PWA), Lesson 4: Using Service Workers as a refresher on how to add this to your application.
Start with Service Worker first


Find out (TA): 
1. how and where to use indexdb
2. why we use this if service worker already
3. how we can establish both and one section or seperate
4. Currently unable to npm run seed, or node server cannot be on
5. Files to cache we have to choose
6. After server running how to check offline, and see cache items and service worker file
7. how to check on network everything
8. Do we need to install this
Require service woker
Require Manifest.json
Require indexDb
9. What we include Manifest.json, fix it 

Check Run `npm run seed`, and `npm start` not working and npm init if needed may be needed

Chrome DevTools makes it possible to test service workers on localhost in development. Simply click the Application tab, then select Service Workers from the menu on the left.

You should add your service worker to the root of the public/ directory of your application


This manifest.json file for this project will contain the following properties:

name

short_name

icons

theme_color

background_color

start_url

display


For this application, you’ll need to create it manually and add it to the root of the public/ directory of your application. You can also review Module 19: Progressive Web Applications (PWA), Lesson 5: Convert the App to a PWA as a refresher on web manifests.

Deployment to Heroku Using MongoDB Atlas
Finally, the budget tracker has a server and uses MongoDB as its database, so you’ll need to deploy this application to Heroku using MongoDB Atlas. To review this process, look at Module 18: NoSQL, Lesson 5: Add Mongoose Validation, specifically 18.5.5: Deploy to Heroku.
(It will be similar to JawsDB used last time as Heroku database)

Application must use IndexedDB for offline functionality.

Repository contains high-quality README file with description, screenshot, and link to deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository, with a unique name and a README describing the project.

*/