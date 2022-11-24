import db from '../firebase/admin.js';

const deleteChannel = (req, res) => {};

const getChannels = (res) => {
    const channelsRef = db.ref('/channels');
    channelsRef.on('value', (snapshot => {
        res.send(snapshot.val());
    }));
}

const postChannel = (req, res) => {};

const putChannel = (req, res) => {};

export default { getChannels };