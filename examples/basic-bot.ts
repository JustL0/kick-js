import { createClient, type MessageData } from "@retconned/kick-js";

const client = createClient("xqc", { logger: true });

client.on("ready", () => {
  console.log(`Bot ready & logged into ${client.user?.tag}!`);
});

// currently not implemented just yet

// const token = process.env.TOKEN!;
// const cookies = process.env.COOKIES!;
// const bearerToken = process.env.BEARER!;
// client.login({ token, cookies, bearerToken });

client.on("ChatMessage", async (message: MessageData) => {
  console.log(`${message.sender.username}: ${message.content}`);

  if (message.content.match("!ping")) {
    client.sendMessage("pong");
  }

  if (message.content.match("!slowmode on")) {
    const splitMessage = message.content.split(" ");
    const duration = splitMessage[1];
    if (duration) {
      const durationNumber = parseInt(duration);
      client.slowMode("on", durationNumber);
    }
  }
  if (message.content.match("!slowmode off")) {
    client.slowMode("off");
  }

  if (message.content.match("!ban")) {
    const splitMessage = message.content.split(" ");
    const bannedUser = splitMessage[1];
    if (bannedUser) {
      client.permanentBan(bannedUser);
    }
  }
});

client.on("Subscription", async (subscription) => {
  console.log(`New subscription 💰 : ${subscription.username}`);
});

// get information about a vod
const { title, duration, thumbnail, views } = await client.vod("your-video-id");
