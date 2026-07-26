// TODO: Write a promise

class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValueError';
    }
}

/**
 * @typedef {Object} Song
 * @property {string} title
 * @property {string} artist
 * @property {number} songDuration
 *
 * @param {Song} song
 * @param {number} duration
 */
function sendSong({song, duration = 2000}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (song.title.trim() === "" || song.title.trim() === "") {
                reject(new ValueError(`The song is not valid.`));
            } else {
                resolve(song);
            }
        }, duration);
    })
}

/**
 * @type {Song}
 */
const song = {
    title: '21',
    artist: 'Arya Star',
    songDuration: 3 * 60 * 1000, // in ms
}

sendSong({song, duration: 3000})
    .then(console.log)
    .catch((err) => {
        console.log(err.message, err.name);
    });

// TODO: Delay with a promise

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() =>
            resolve(`runs after ${ms/1000}`), ms);
    });
}

delay(3000)
    .then(alert)