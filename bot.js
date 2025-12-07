import { ChatClient } from 'twitch-js';

// Luo chat-clientti
const client = new ChatClient({
  username: process.env.BOT_USERNAME,
  password: process.env.OAUTH_TOKEN,
  channels: process.env.CHANNELS.split(','),
});

// Chat-viestien kuuntelu
client.on('PRIVMSG', (msg) => {
  const message = msg.message.trim();
  const user = msg.username;
  const channel = msg.channel;

  // !hei
  if (message === '!hei') {
    client.say(channel, `Hei @${user}! 👋`);
  }

  // !echo <teksti>
  if (message.startsWith('!echo ')) {
    const text = message.slice(6);
    client.say(channel, text);
  }
});

// Käynnistä botti
client.connect().catch(console.error);
