import db from '../firebase/admin.js';

const getWinners = (res) => {};

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