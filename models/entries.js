import db from '../firebase/admin.js';

const getEntries = (res) => {};

const postEntries = (req, res) => {
    const entriesRef = db.ref('/entries');
    console.log(req.body);
    entriesRef.set(req.body);
    res.send('something happened');
};

const postWinners = (req, res) => {
    const winnersRef = db.ref('/winners');
    console.log(req.body.list);
    winnersRef.set(req.body.list, (err) => {
        res.send(Boolean(err));
    });
    res.send('Winners saved');
};

export { postWinners };
export default postWinners;