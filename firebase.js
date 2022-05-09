const admin = require('firebase-admin');
const serviceAccount = require('./firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
// admin.initializeApp(functions.config().firebase);

const db = admin.database();