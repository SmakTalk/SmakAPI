const admin = require('firebase-admin');
const serviceAccount = require('../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://thesmakbot-default-rtdb.firebaseio.com"
});
// admin.initializeApp(functions.config().firebase);

const db = admin.database();

module.exports = { admin, db };