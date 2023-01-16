import db from '../firebase/admin.js';

const getToken = (res) => {
    const tokenRef = db.ref('token');
    tokenRef.on('value', (snapshot => {
        res.send(snapshot.val());
    }));
};

const updateToken = (req, res) => {
    const tokenRef = db.ref('token');
    tokenRef.set(req.body);
};

export { getToken, updateToken };
export default { getToken, updateToken };