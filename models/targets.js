import db from '../firebase/admin.js';

const getTarget = (req, res) => {
    const targetRef = db.ref('targets');
    const aliasRef = targetRef.child(req.query.alias);
    aliasRef.on('value', (snapshot => {
        if (snapshot.val()) {
            res.send(snapshot.val());
        } else {
            res.send(undefined);
        }
    }));
};

export default getTarget;