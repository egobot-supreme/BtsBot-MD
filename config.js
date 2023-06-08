import { watchFile, unwatchFile } from 'fs'  
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js' 

//➢➢➢➢➢➢ 𝑰𝑴𝑨𝑮𝑬𝑵𝑬𝑺 𝑷𝑨𝑹𝑨 𝑴𝑬𝑵𝑼𝑺 𝑶 𝑶𝑻𝑹𝑶𝑺 𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 ➢➢➢➢➢➢

global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/img4.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')

//➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢


global.mods = [5493873687620] 
global.prems = [5493873687620]
   
  
//➢➢➢➢➢➢ 𝑨𝑷𝑨𝑹𝑻𝑨𝑫𝑶 𝑫𝑬 𝑰𝑫𝑰𝑶𝑴𝑨𝑺 ➢➢➢➢➢➢ 
//Agrega el Idioma que quieres que tenga BtsBot-MD
//Add the language you want BtsBot-MD to have
//  es = Español         id = Bahasa Indonesia
//  en = English         pt = Português 
//  ar = عرب  

global.lenguajeEB = es  //Idioma de BtsBot, Ejemplo: es | en | pt...
 
//➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢


global.openai_key = 'sk-...VbuT'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'OEkIP17LT07VnTU6MCOQpKRS'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['SZWbetatakeda2718ggeb']
global.itsrose = ['OEkIP17LT07VnTU6MCOQpKRS']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [5493873687620] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//➢➢➢➢➢➢ 𝑵𝑶𝑴𝑩𝑹𝑬 𝑫𝑬 𝑺𝑻𝑰𝑪𝑲𝑬𝑺 𝑾𝑵 ➢➢➢➢➢➢

global.packname = '💜✨𝐁𝐭𝐬 𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥✨💜'
global.author = '🌹👑𝙀𝙜𝙤_𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡_𝘾𝙧𝙚𝙖𝙩𝙤𝙧👑🌹'

//➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢

//➢➢➢➢➢➢ 𝑨𝑮𝑹𝑬𝑮𝑨𝑻𝑬 𝑺𝑰 𝑬𝑹𝑬𝑺 𝑶𝑾𝑵𝑬𝑹 𝑨𝑸𝑼𝑰 ➢➢➢➢➢➢

global.official = [ // Agregate si eres Owner
['5493873687620', '𝐄𝐠𝐨𝐁𝐨𝐭 𝐌𝐃 👑', 1], 
['51958907754', '𝐂𝐨𝐥𝐚𝐛𝐨𝐫𝐚𝐝𝐨𝐫𝐚 💜', 1],  
['5493873650768', '𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 𝐁𝐨𝐭 🛡️', 1],
['51974542432', '𝐃𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐚𝐝𝐨𝐫𝐚 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 💜', 1]] 

//➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢

//➢➢➢➢➢➢ 𝑪𝑼𝑬𝑵𝑻𝑨𝑺, 𝑫𝑰𝑹𝑬𝑪𝑻𝑶𝑺 𝑷𝑨𝑹𝑨 𝑻𝑼𝑺 𝑳𝑰𝑵𝑬𝑨𝑺 ➢➢➢➢➢➢

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇦🇷

global.vs = '1.0.0'
global.vsJB = '3.0'

global.eg = '💜✨ 𝐁𝐭𝐬𝐁𝐨𝐭-𝐌𝐃 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 ✨💜'
global.yt = 'Por el momento el YouTube es confidencial.'
global.yt2 = 'No disponible por ahora.'
global.ig = 'Por el momento el Instagram es confidencial.'
global.md = 'https://github.com/egobot-supreme/BtsBot-MD'
global.fb = 'No disponible por ahora.'

global.nna = 'No disponible por ahora.' //Grupo oficial de Ego
global.nna2 = 'No disponible por ahora.' //Ajustes
global.nn = 'No disponible por ahora.' //Grupo de Charla
global.nnn = 'No disponible por ahora.' //Grupo de clases en programacion
global.nnnt = 'No disponible por ahora.' //Grupo de OficialBots
global.nnntt = 'No disponible por ahora.' //Grupo de StickersFabrick
global.nnnttt = 'No disponible por ahora.' //Grupo de Pagos
global.nnnttt2 = 'No disponible por ahora.' //Grupo de Compras
global.nnnttt3 = 'No disponible por ahora.' //Grupo de biblioteca
global.nnnttt4 = 'No disponible por ahora.' //Grupo comunidad Bot
global.nnnttt5 = 'No disponible por ahora.' //Grupo comunidad E800
global.paypal = 'https://paypal.me/OficialPaypalBot'
global.asistencia = 'wa.me/5493873687620' //Si tienes preguntas a cerca de los bots puedes contactarme.
global.asistencia2 = 'wa.me/5493873650768' //Si tienes que registrarte con Guardian-Bot-MD, lo puedes hacer aqui
//➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢


//➢➢➢➢➢➢ 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑩𝑻𝑺 𝑩𝑶𝑻 ➢➢➢➢➢➢

global.wm = '🌹👑𝙀𝙜𝙤𝘽𝙤𝙩 - 𝙈𝘿👑🌹 : 💜✨𝐁𝐭𝐬 𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥✨💜'
global.igfg = '💜✨𝐁𝐭𝐬 𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥✨💜'
//global.wait = lenguajeEB.smsWait()
global.nomorown = owner[0][0]

//➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢



//➢➢➢➢➢➢ 𝑰𝑴𝑨𝑮𝑬𝑵𝑬𝑺 𝑨𝑳𝑬𝑨𝑻𝑶𝑹𝑰𝑶𝑺 ➢➢➢➢➢➢

global.img = 'https://i.postimg.cc/g0Thw92B/Picsart-23-05-05-10-57-33-398.jpg'
global.img2 = 'https://i.postimg.cc/pTX9Rznv/20230409-120313.jpg'

global.img3 = 'https://i.postimg.cc/PxkgwQMG/20230409-120925.jpg' //ft rectangular

//global.img3 = 'https://i.postimg.cc/4yZbK3yT/20230506-131515.jpg' //prem   //no
//global.img4 = 'https://i.postimg.cc/3w8TZXqy/20230506-135554.jpg' //prem   //no

global.img5 = 'https://i.postimg.cc/LXbjWNQw/20230409-115057.jpg'
global.img6 = 'https://i.postimg.cc/vZH1vnbC/20230505-130535.jpg'
global.img7 = 'https://i.postimg.cc/mZHFM6DD/20230506-105914.jpg'
global.img8 = 'https://i.postimg.cc/xd5fsf38/20230505-224214.jpg'
global.img9 = 'https://i.postimg.cc/X7rd27QV/20230506-102211.jpg'

global.img10 = 'https://i.postimg.cc/05XhZmSb/20230506-162204.jpg'
global.img11 = 'https://i.postimg.cc/fb76vr7N/20230506-163009.jpg'
global.img12 = 'https://i.postimg.cc/xdKS4C2B/20230506-160828.jpg'
global.img13 = 'https://i.postimg.cc/TwJfpPNn/20230506-160122.jpg'
global.img14 = 'https://i.postimg.cc/tRz4gB88/20230506-141755.jpg'
global.img15 = 'https://i.postimg.cc/mDr1KFPk/20230506-135208.jpg'

//global.img16 = 'https://i.postimg.cc/cLsZx62W/ilustracion-vector-signo-icono-prohibido-menores-18-anos-503038-1112.jpg' //+18   //no

global.img17 = 'https://i.postimg.cc/YqTNg8h3/20230506-134616.jpg'
global.img18 = 'https://i.postimg.cc/LXVv3Prs/20230506-132511.jpg'
global.img19 = 'https://i.postimg.cc/sDjqqjc8/20230506-134006.jpg'
global.img20 = 'https://i.postimg.cc/Kj2ctfqk/20230506-110558.jpg'
global.img21 = 'https://i.postimg.cc/tJQyWKGb/20230506-140032.jpg'

global.img21 = 'https://i.postimg.cc/wxcG6Fpt/20230409-111455.jpg' //paypal

global.welego = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4, nnnttt5, md, ig, paypal, yt, asistencia, asistencia2, fb]
global.egoMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.egoImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

//➢➢➢➢➢➢ 𝐀𝐆𝐑𝐄𝐆𝐀 𝐀 𝐓𝐔 𝐍𝐔𝐌𝐄𝐑𝐎 𝐏𝐀𝐑𝐀 𝐒𝐄𝐑 𝐒𝐔𝐁 𝐂𝐑𝐄𝐀𝐃𝐎𝐑(𝐀) 𝐎 𝐎𝐖𝐍𝐄𝐑 ➢➢➢➢➢➢   

global.owner = [
['5493873687620', '𝙀𝙜𝙤𝘽𝙤𝙩 - 𝙈𝘿 👑', true], 
['5493873650768', '𝐎𝐰𝐧𝐞𝐫 𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧 𝐁𝐨𝐭 🛡️', true],  
['51958907754', '𝐒𝐮𝐛 𝐜𝐫𝐞𝐚𝐭𝐨𝐫𝐬 💜', true],  
['51974542432', '𝐒𝐮𝐛 𝐜𝐫𝐞𝐚𝐭𝐨𝐫𝐬 💜', true]
]

//➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢➢

global.htki = '*┈┉━═◊❲*'
global.htka = '*❳◊═━┉┈*'
global.htjava = '⛁⛃'
global.wait = lenguajeEB['smsMeWait']()

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeEB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
