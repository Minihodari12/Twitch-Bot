const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: process.env.CHANNELS.split(',')
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self) return;

    if (message === '!hei') {
        client.say(channel, `Hei @${tags.username}!`);
    }

    if (message.startsWith('!echo ')) {
        const text = message.slice(6);
        client.say(channel, text);
    }
});
