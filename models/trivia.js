import db from '../firebase/admin.js';

const getTrivia = (res) => {
    const triviaRef = db.ref('/trivia');
    triviaRef.on('value', (snapshot => {
        // randomly pick one
        res.send(snapshot.val());
    }));
}

export default { getTrivia };