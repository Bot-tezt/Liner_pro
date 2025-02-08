//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "princenjiprospper@gmail.com";
global.location = "Buea,Cameroon.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/xk46jg.jpg";
global.devs = "237673805208";
global.sudo = process.env.SUDO || "237673805208";
global.owner = process.env.OWNER_NUMBER || "237673805208";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "null";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUk5Ukp4cHFZbHFzbGxlSndLWXQxSXpyU0Roa1ozdThwYUtjendvV21tMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVFpMFkxWHllV3oyZEpVVEtlbHJSZ2pUMys4b2pqNzY0dmtLTlBReEZVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhR3lBL1RXdG9mK2YrQ09TV0tyanYvMFRFV2FYaUFmYmcwQ1pQV3hENVdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZyttTmhEaFR1OVREcWc5UmZQR0QvRGw3QkFpYVRvOHU4M1MvWm9jR1dFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPaUFpNVpsRFJaMjg1bEhVeGhqbGJPeHZ0M2w4b2V3emcxUk1MaGpBWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU3UG9MVnFBWFBMdzJSU0JDT0s5MGhhcyt5cSs4U09SV3BsdG5uR2RKaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0twdUZlRWlHWmxjRlJ6cWF2ZnVrNHZVaWVnUzdVbFdXbXBOWGxkSWhIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTd4VHdoZXR2QWFPdzAzVFlFdENEMmIrSXJqaWJQdXBIRkFmQXlieWxqdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJldmhLRlMvcmpCZWthY3NYNDk4SGNuZTZ4Y3RXSWFBR2N0bEEwdEJmeXFQTGJsWDk1MDBFYVVXeGxJcHNiN1d1MHhyMFltUVVtMjFWdzFMZDVwTUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJaSHpIQm1TbXJIOTdEaHlKUkFGdTNvWnVPSFlacnRmb3I0eDlERmJ3bXBzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDb0ZPaDZPVlFNR292a0JpNE1oN3JBIiwicGhvbmVJZCI6IjE0MzQ0NmI5LTUyNDQtNDIzNi04ODEzLTQ1YjQ1MzZmOTEzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdFVxSkRrR3JIYzIvakVoSkNqN1QyVXhZYlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGpFQ0ZuQXc2UWtMZVpuNHNVVVpQZkdyRkVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI2TE41SFpSIiwibWUiOnsiaWQiOiIyMzc2NzM4MDUyMDg6MzdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ09WRU5BTlQgUFJPU1BFUiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmIydjZnQ0VQRG9yYm9HR0JzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXMxSUh1OUlnVDk5TlRFQWs1M0dobWVCL2xEemN4Zm5mdTc1OW85K2Yzbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieTlqWmRLS3FaV2pPN2YydWRQY2svTERKNUFSdmZrR20xQ2pzSEJRdHRLTHA5cWcxa0ZYTW5DcjdQZEtYYU1aR2daaVFhNmdXa3M2SWZ2MHgrL1A4REE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZrd1IrampLbjlKMzVtZlIrdFh6TXRiWlB3WmhpNkU2QVhtekEzNy81NjZ2TDhPcUMxUkdQcy80cm5xQTJpUTlFYm1qQnI3d1dRMXJMNjhObzJaUUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjczODA1MjA4OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFMTlNCN3ZTSUUvZlRVeEFKT2R4b1puZ2Y1UTgzTVg1Mzd1K2ZhUGZuOTYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI5OTgyNjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTGlXIn0===="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,$,&,+,-,*,?,~,|,•,→,©,®,™,cyber,✓,!,#,/,@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.3.4",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "CYBERDEX",
  packname: process.env.PACK_NAME || "🧑‍🎄",
  botname: process.env.BOT_NAME || "cyвerdeх",
  ownername: process.env.OWNER_NAME || "PROTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Us2pP4zzoiWjzaWQnoEkUq3Q",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "AIzaSyATKXs57vk-JrXZ2pz1cnvC2FxLcugHEmw",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "20",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0385228b961473710eff4e7daed873e8",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "cyвerdeх").toUpperCase(),
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
