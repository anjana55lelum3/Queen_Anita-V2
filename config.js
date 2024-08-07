//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94760105256";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/1138a68a47b3b0d7f7818.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0xEQWZEUm9jWUJiMVRLUlNGdjdCTHdQYm9vNzlWYXhzZGJZNG9pUXhIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnAraitHTVZTb1prQ2RHdCtOTERWMWhubWtYUEI4U081b0lNcFJWUUhVND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTzNCVGZnVWdRRnUyblo2RU9Ic3l3MGE1cHpHU0ZScE53K1JRendhcFhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXS293dE5vVzQ2V2JnbWhsZkdhdXZiMnVsbVA4SngvelR2NlB4ZEdaekg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEUnZ5emRHcCtpSmxWa0NDcGppUGVCSjNyQjBKTmQ5d1ppOFFuV0dLbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRmQ1dyeUVKZlN3eU11RUdzTTllQVFDd3FCT0NCV3l4YWFtMzJCSVQ5dzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xUS1JJbzJ2QkNsay9lb1BONlBrZU14dlZCOXNNU2E0amdELzZJQmRGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTBqTGduV0FhM0JNdlRXR0hiZXZtUkJjL0pwZ3NXam1sQmZHRDMweWNBST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5wZVFsT2JHbldjcnBaOTI0Ymc3UUpSd1ZNSnVUZVRxT3VWck5SS1VXbzBSa3cxRU5ubDlnNnpYbEZFUWIrRldMRVEwa3VPaFMzRmpISGJyUWZRUUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiI3dDRmcEYzTGdQV3JrbkZtWHdXRU9GR3NOYlcvOUltREI5R3Z0VTFHWFBrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYwMTA1MjU2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QUJBQ0M3Q0M1REJBMjhGMUJDNDRDNzM5MDU5NTM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNDY4OTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InY0UmRLWW14VHpXdWRTSTY1NVBMeUEiLCJwaG9uZUlkIjoiZDRkMGJkYWQtYzIwOS00NWUwLWIzZWMtYzEwYmJkZWM5ZmIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpJYXIwakN2WmZ2Y292US9iZzFxMzBxNUcwMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUWF1MDBsZlBWaWY5L3VCY1NpeDFvbmFMWFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVYxNzNGOUwiLCJtZSI6eyJpZCI6Ijk0NzYwMTA1MjU2OjQ3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0i8mqybTJoi3htIDJtOG0iuG0gMm04bSAIDrKmcqZypzXgCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTNscDc4REVONjN6clVHR0NzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOVFNZnBQRmhnM1BJa0ZycUVvb0ZzWElnNHIyNnFaL2lpOExSdXJ2VDQxTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid3lycHA4WTRWMWc1RXdXYW8wK3Fkbm1KeEhvdTR0Sk9zcmZCZWNFT3RLMG1TWDNYV0VqbC9rU2o5eUVLaHJ2Um1hQzRRRlFrWmlwQUhoZkszVXBxQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlF4cUhxZlBXejdoRWEzWG03NkpxTDUrWmVkMWxXeE5hRnkzR1VCdjV2WHk1ZmNNbk43RFVieVpoSDM5STZYRjM4MXR3RmVBMXY0dUNXVGNYUThCOEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjAxMDUyNTY6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlVESDZUeFlZTnp5SkJhNmhLS0JiRnlJT0s5dXFtZjRvdkMwYnE3MCtOVCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzA0Njg5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJUHkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂`",
  author: process.env.PACK_AUTHER || "🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂",
  packname: process.env.PACK_NAME || "𝑲𝑰𝑵𝑮 𝑨𝑵𝑱𝑨𝑵𝑨 𝑴𝑫 ",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-b164ab7d-e20d-4e65-b647-34369b156ccd",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "anjanalelum",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
