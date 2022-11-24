import db from '../firebase/admin.js';

const getEntries = (res) => {};

const postEntries = (req, res) => {
    const entriesRef = db.ref('/entries');
    console.log(req.body);
    entriesRef.set(req.body);
    res.send('something happened');
};

const _postEntries = postEntries;
export { _postEntries as postEntries };