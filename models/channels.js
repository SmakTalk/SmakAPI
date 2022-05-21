const { db } = require('../firebase/admin');

const getChannels = (res) => {
    const channelsRef = db.ref('/channels');
    channelsRef.on('value', (snapshot => {
        res.send(snapshot.val());
    }));
}

exports.getChannels = getChannels;