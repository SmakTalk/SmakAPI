import db from '../firebase/admin.js';

const getTrivia = (res) => {
    const triviaRef = db.ref('trivia');
    triviaRef.once('value', (snapshot) => {
        const triviaObj = snapshot.val();
        const triviaKeys = Object.keys(triviaObj);
        let chosenKey = triviaKeys[0];
        let chosenQuestion = triviaObj[chosenKey];
        triviaKeys.forEach(key => {
            if (triviaObj[key].Counter < chosenQuestion.Counter) {
                chosenKey = key;
                chosenQuestion = triviaObj[key];
            }
        }, (err) => {
            if (err) console.log(err);
        });
        res.send(chosenQuestion);
        updateTrivia(chosenKey, chosenQuestion.Counter);
    });
}

const updateTrivia = (chosenKey, counter) => {
    const triviaRef = db.ref(`trivia/${chosenKey}`);
    triviaRef.update({Counter: ++counter}, (err) => {
        if (err) console.log(err);
    });
};

export default getTrivia;