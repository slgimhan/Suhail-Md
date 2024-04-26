const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="colombo,srilanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://slgimhan:gimhan123@cluster0.gj9tgdt.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94762354615" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_40_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgMixcbiAgICAgICAgMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDgyLFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwLFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL2ZuZHlDVXNrdkhBOXdtZXZKT0pnNHhiWUIzc3JGbnI2SVMxN0NSbk5QOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxMzMxNzMzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNThGN0ZCQjE4NkE5MTA3QzczM0UxNjg2N0NDQjU2OTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0MDkxOTk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTMzMTczMzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQyMEIxRjA1QjI0MDE3QTExOUU3NkYyOTI4MDc1RDlBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDA5MTk5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0cWJZZ0JwalQzR2hZbzlBdnNJYTdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyMjNkOGM0LWI2ODMtNDRkNy1iODk0LTkzNTU4OTc1MzA2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAzMyxcbiAgICAgIDE4NCxcbiAgICAgIDQ3LFxuICAgICAgMTA3LFxuICAgICAgMTA1LFxuICAgICAgMTk0LFxuICAgICAgMTU3LFxuICAgICAgMTU2LFxuICAgICAgNTEsXG4gICAgICAzOSxcbiAgICAgIDIwOSxcbiAgICAgIDE3MCxcbiAgICAgIDcyLFxuICAgICAgMjIxLFxuICAgICAgMjQxLFxuICAgICAgNzYsXG4gICAgICAxMCxcbiAgICAgIDg3LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTE5LFxuICAgICAgNjQsXG4gICAgICAxOTQsXG4gICAgICAxMzEsXG4gICAgICAxNzQsXG4gICAgICAxOTQsXG4gICAgICA2MCxcbiAgICAgIDEzNSxcbiAgICAgIDE5OSxcbiAgICAgIDU4LFxuICAgICAgMzcsXG4gICAgICA2OCxcbiAgICAgIDkyLFxuICAgICAgMzksXG4gICAgICA2MCxcbiAgICAgIDIsXG4gICAgICAxNCxcbiAgICAgIDI0OCxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJLUjNTWUZIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMzMxNzMzOToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmb3wnZm+IHwgOiDwnZm+8J2ZvvCdmbEg44OkXCIsXG4gICAgXCJsaWRcIjogXCI3OTc3NTE0MjAyNzI2NjoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV3F2cGNHRU5YdnE3RUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktuWFlnV01oemRyUVA3VjQzeFhQTmZrTDVJWjFBdnFMSEV1NkN0bzZQM2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicU1CaW1PajBjSmlJb1VRcEhvUk1laTNQNTNFTG1LVXhQbm56NTBpeHdvZXNKRlNyY2tCcVk4RUlDbUJNMDhJblpmSzZGVkJraFFPVGFQSkJkOVZDQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVh4bWpRdXRaSWszY29sSUtaSEtpUW11TmprYzZUb2x3MTJ1M0hQWndBdWV4ZHM0L1h4aUkxa2VId1cvbUE1OUhWb3NMV2lVbTRIZHdaMDFNSit5Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTMzMTczMzk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0MDkxOTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkNqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQ2ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzajVhNWlHSzZUWmsxUU5ibXFsa3pNdFc2Zis5UkZDdWRFemg5RDRRalJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTk4Njg0NjksXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCw2LDEwLDExLDEzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQwOTE5OTY2MDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙶𝙸𝙼 | 𝙱𝙰𝙱𝙰𝙷:",
  ownername:process.env.OWNER_NAME|| "It𝙱𝙾𝚃 : 𝙶𝙸𝙼",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
