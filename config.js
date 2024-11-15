const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="cpmodzyt@gmail.com"
global.location="Asia,Srilanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://AnimeFlix:Itzmecp@cluster0.qxdxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://AnimeFlix:Itzmecp@cluster0.qxdxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/HPl9gi585raKVZjzEmcvDH";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HPl9gi585raKVZjzEmcvDH";
global.website=process.env.GURL || "https://chat.whatsapp.com/HPl9gi585raKVZjzEmcvDH" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/5kmL7y2/file-2072.jpg" || "https://i.ibb.co/5kmL7y2/file-2072.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '+94773789258') : "+94773789258";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '+94773789258') : "+94773789258";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/5kmL7y2/file-2072.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_06_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDksXG4gICAgICAgIDU4LFxuICAgICAgICAzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInc3RVJsSHZMTU9pSVlFRFllZjNPc2ZrUjgydEdyekhYRTJSaXEzVyszbWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjU2NjUzNTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJDQTU0OThCMkI4OTMxNTUwQjM4NDM2MjBGQTYxQTE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY2ODc4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBZE1CeEdnSFFUS1dtbmNmalN0NjZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3ODg4MTY3LWIyNjUtNDJmNS1hZTEzLWQ3MDRlZWU3Nzk1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxMjIsXG4gICAgICA4OCxcbiAgICAgIDI1MyxcbiAgICAgIDIwNyxcbiAgICAgIDg2LFxuICAgICAgMjM5LFxuICAgICAgMSxcbiAgICAgIDE5LFxuICAgICAgMTg4LFxuICAgICAgMTc5LFxuICAgICAgNjIsXG4gICAgICAxNTksXG4gICAgICAxNjAsXG4gICAgICAxMjYsXG4gICAgICAxOTgsXG4gICAgICAxMTYsXG4gICAgICA2LFxuICAgICAgNjMsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICA1NyxcbiAgICAgIDE1NixcbiAgICAgIDE3MCxcbiAgICAgIDI0OSxcbiAgICAgIDIzOSxcbiAgICAgIDE2NCxcbiAgICAgIDE3OSxcbiAgICAgIDEzOCxcbiAgICAgIDE2NCxcbiAgICAgIDE2MCxcbiAgICAgIDk5LFxuICAgICAgMjA3LFxuICAgICAgNTYsXG4gICAgICA0NixcbiAgICAgIDM0LFxuICAgICAgMTA2LFxuICAgICAgMTU4LFxuICAgICAgMjIzLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkFYTE0xU0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY1NjY1MzU0OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSW50ZXJ3b3JsZFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMTk1Mjg0Mjk5ODk2OjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ozdWhvSURFS1RXM0xrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY2t5cXpoNTM1by9OQ0JwVlA0MjE3aVBoN3NKL1BybnUxYk9ZWTdubkpXVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVQjNRdDFmclA3MG0zelZuczhBY3BXa1JvOHV6WDhHUU1LanMrVHZNWm9LZ05KN2dlanpKVWNlMHlmK0lQQXlqL1lRUThCeWh1RjlES0tKdEVRNzJDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnQ1NadzY2VUcwbXRvN1VrdFNSV2gzWnliWFJuUVJWekhMQVpOOUZUN0xlVzFQVmhXcTk0L0s5UHRWRFU2bFJ6SUFaVTZrekxlbE12WGZsSkxPT3BDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NTY2NTM1NDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2Njg3NzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCTzVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJPNS5qc29uIjogIntcImtleURhdGFcIjpcInB4TlZ1SExWS3I1Mlg2bU1UaTBOdW95NjNvdlhuWXlManpkbUpuNUNjRkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODA5NjEzMDg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE2Njc4MDEzOTdcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Itzmecp",
  packname: process.env.PACK_NAME || "Interworld",
  botname : process.env.BOT_NAME  || "Interworld",
  ownername:process.env.OWNER_NAME|| "Itzmecp",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
