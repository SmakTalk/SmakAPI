const { db } = require('../firebase/admin');

const deleteChannel = (req, res) => {};

const getChannels = (res) => {
    const channelsRef = db.ref('/channels');
    channelsRef.on('value', (snapshot => {
        res.send(snapshot.val());
    }));
}

const postChannel = (req, res) => {};

const putChannel = (req, res) => {};

exports.getChannels = getChannels;