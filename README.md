![Version](https://img.shields.io/npm/v/@retconned/kick-js?label=Version)
![License](https://img.shields.io/npm/l/@retconned/kick-js?label=License)

❇️ **@retconned/kick-js**

## **What is kick-js**

**kick-js** is a TypeScript-based library for [kick.com](https://kick.com)'s chat system. It provides a simple interface that allows developers to build chat bots and other chat-related applications.

### :construction: This is a new rewrite of the kick-js library, it is not compatible with the previous version. :construction:

## Features :rocket:

- Supports reading & writing to Kick.com chat.
- Moderation actions (ban, slowmode).
- Written in TypeScript.

## Installation :package:

Install the @retconned/kick-js package using the following command:

```sh
npm install @retconned/kick-js
```

## Example code :computer:

```ts
import { createClient } from "@retconned/kick-js";
import "dotenv/config";

const client = createClient("xqc", { logger: true });

client.on("ready", () => {
  console.log(`Bot ready & logged into ${client.user?.tag}!`);
});

const token = process.env.TOKEN;
const cookies = process.env.COOKIES;
const bearer = process.env.BEARER;

client.login({ token: token, cookies: cookies, bearer: bearer });

client.on("ChatMessage", async (message) => {
  console.log(`${message.sender.username}: ${message.content}`);
});

// get information about a vod
// your-video-id = vod uuid
const { title, duration, thumbnail, views } = await client.vod("your-video-id");
```

## Disclaimer :warning:

@retconned/kick-js is not affiliated with or endorsed by [Kick.com](https://kick.com). It is an independent tool created to facilitate making moderation bots & other chat-related applications.
