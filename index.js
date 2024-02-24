const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1201205173083705475')
    .setType('STREAMING')
    .setURL('https://bit.ly/RK-Community') //Must be a youtube video link 
    .setState('SRO [RK-Community]')
    .setName('SRO [RK-Community]')
    .setDetails(`Community For Sro Games`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1191538536378277908/1201089611502469160/rk_gif.gif?ex=65e43c5e&is=65d1c75e&hm=ca8332f9ef0f80472c7c18885c099ea4a04561c0b5c8b128fe802bf998720506&=&width=350&height=350') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Community For Sro Games') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1077716803435909232/1169543166999937024/Verification.png?ex=65e970f4&is=65d6fbf4&hm=3bc2e95305242abb9776c2e72f6d4a4c9a79bdef65cbfe99f5647d4f86ba027e&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('SRO [RK-Community]') //Text when you hover the Small image
    .addButton('Community', 'https://discord.gg/YTQN84kRWU')
    .addButton('RK-Community', 'https://discord.gg/YTQN84kRWU');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `RK-Community`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
