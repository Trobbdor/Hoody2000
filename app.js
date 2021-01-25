const { CommentStream } = require("snoostorm");

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

// const streamOpts = {
//     subreddit: 'all',
//     results: 25
// };

// const stream = new CommentStream(r, streamOpts);

// stream.on("item", comment => {
//     console.log(comment)
// })

const hoodyYT_channelId = 'UCYQ_i8bUFkDF4v-HylP-T5g';

const ytnotifier = require('youtube-notifier');
const Notifier = new ytnotifier({
    channels: [hoodyYT_channelId],
    checkInterval: 50 /* Interval to check the latest video. */
});

Notifier.on('video', video => {
    console.log(video);
    /*
    video = {
        channelName,
        title,
        publishDate,
        url,
        id
    };
    */
});