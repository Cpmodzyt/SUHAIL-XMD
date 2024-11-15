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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_01_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxODksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSWdEcFZXUEpIUE53V2pOOExRZm4xeE9iTlpWYWtuMlpQRUtmS003Y0ZUYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NTY2NTM1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTE2QTk1QTFEODJBMzY1M0NFNjZDRkI1RDAxOEI4QUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjQ2ODc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjU2NjUzNTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ2MkNFQTVGN0MyNUMxM0ExRTgyNUE4RTNCOEQ4RDdBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY0Njg3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzVjhVLUU3SFNyeXc5X01VZzFWdzJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjllMDAwNTdlLWFhZTAtNDRjMy04MGMyLTAzZmU1YmVlYmJjNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAyNDgsXG4gICAgICAxMDIsXG4gICAgICA0MCxcbiAgICAgIDc2LFxuICAgICAgODMsXG4gICAgICAyMzcsXG4gICAgICAxOTAsXG4gICAgICAxNzcsXG4gICAgICAyMzcsXG4gICAgICAyNDcsXG4gICAgICAyMCxcbiAgICAgIDEzNSxcbiAgICAgIDE0LFxuICAgICAgMTQxLFxuICAgICAgMTM1LFxuICAgICAgMjQ3LFxuICAgICAgMzksXG4gICAgICAyMTUsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgOTUsXG4gICAgICA0OSxcbiAgICAgIDEzLFxuICAgICAgMTAzLFxuICAgICAgMTQ1LFxuICAgICAgOTgsXG4gICAgICA2NixcbiAgICAgIDY5LFxuICAgICAgMTA0LFxuICAgICAgMjQ4LFxuICAgICAgMTUwLFxuICAgICAgNjYsXG4gICAgICA1OCxcbiAgICAgIDE0NSxcbiAgICAgIDg4LFxuICAgICAgMTY2LFxuICAgICAgMTUsXG4gICAgICA1NCxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllRMlFHTkY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NTY2NTM1NDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuOCpOODs+OCv+ODvOODr+ODvOODq+ODiVwiLFxuICAgIFwibGlkXCI6IFwiMTkxMTk1Mjg0Mjk5ODk2OjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2dWhvSURFSktyMjdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY2t5cXpoNTM1by9OQ0JwVlA0MjE3aVBoN3NKL1BybnUxYk9ZWTdubkpXVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxM3V1SFd0Y040NlVWRzB1MHI2NHUvOU5XUGVtZUNyNERpeE5JTUNGT2FuOEk2dUNpN1JkWjlITHNmalRKQlNUakxVQXEvV1lPSWl2LzIxcXlqamlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5L2JWWkxyYVdKdVFXdWpnWU9hbmk4TTUweE81TEdrbndoTUtocUxJUEtnWkVGYTg1T1lWMFhTOE9ZbjdqeGMzMmVkVUJ3SFlLZklLOTYrYVRPdTNBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NTY2NTM1NDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2NDY4NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNUUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1RSS5qc29uIjogIntcImtleURhdGFcIjpcIjNEWDRuZVBhaDZtcHdMejU4clhQZkYzR1A5MFBiRVdsU2FEM3VPZjZUcjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODA5NjEzMDgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE2NDY4NzM3NDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Itzmecp",
  packname: process.env.PACK_NAME || "Interworld",
  botname : process.env.BOT_NAME  || "Interworld",
  ownername:process.env.OWNER_NAME|| "SItzmecp",


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
