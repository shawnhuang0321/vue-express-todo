var firebaseAdmin = require("firebase-admin");

var serviceAccount = require("../todo-project-16a57-firebase-adminsdk-7eq0u-a079d30462");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://todo-project-16a57.firebaseio.com"
});

const db = firebaseAdmin.database();

module.exports = db;
