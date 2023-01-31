import db from '../firebase/admin.js';

const getLatest = (req, res) => {
    const listRef = db.ref('music-streamers');
    const streamerRef = listRef.child(req.query.streamer);
    streamerRef.on('value', (snapshot => {
        const data = snapshot.val();
        if (data) {
            const platforms = parsePlatforms(data.platforms, '');
            res.send(`"${data.release}" by ${data.artist}. Released on ${data.date}. Available on ${platforms}.`);
        } else {
            res.send(null);
        }
    }));
};

const parsePlatforms = (platformsArr, platformStr) => {
    if (platformsArr.length === 1) {
        platformStr += platformsArr[0];
    } else if (platformsArr.length === 2) {
        platformStr += platformsArr[0] + ' and ' + platformsArr[1];
    } else {
        platformStr += platformsArr[0] + parsePlatforms(platformsArr.slice(1));
    }
    return platformStr;
};

export default getLatest;