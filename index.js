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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1189739975663697971/1226270558761652386/image.png?ex=6628c5b4&is=66277434&hm=c3760c92517fd74ab5d2011aeaa50901b1cbba47efff42adf098af7868bd49cc&=&format=webp&quality=lossless&width=671&height=671') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Community For Sro Games') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/789468512288112690.gif?size=44&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('SRO [RK-Community]') //Text when you hover the Small image
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
