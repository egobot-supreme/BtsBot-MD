import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper' 
import { googleImage } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from 'yt-search'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu
const isCommand1 = /^(gimage|imagen?)$/i.test(command)
const isCommand2 = /^(play2?)$/i.test(command)
const isCommand3 = /^(fgmp3|dlmp3|getaud|yt(a|mp3)?)$/i.test(command)
const isCommand4 = /^(ytmp3doc|ytadoc)$/i.test(command)
const isCommand5 = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i.test(command)
const isCommand6 = /^(ytmp4doc|ytvdoc)$/i.test(command)
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)
const isCommand8 = /^(mediafire(dl)?|dlmediafire)$/i.test(command)

switch (true) {     
case isCommand1:
if (!text) throw lenguajeEB.smsMalused2() + `\n*${usedPrefix + command} Bts*`
try{
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*💞 Resultado de:* ${text}`, m)
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
break
    
case isCommand2:
if (!text) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} Shinunoga E-wa - Fujii Kaze*`
let vid = (await yts(text)).all[0]
if (!vid) throw lenguajeEB.smsMalError2() + `_${lenguajeEB.smsYT6()}_`
try{
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let video = `╔ೋ❀👑❀═❲🌆𝑀𝑢𝑠𝑖𝑐𝐵𝑜𝑡🌆❳═❀👑❀ೋ╗
❤️͢➢ *${lenguajeEB.smsYT1()}*
◊► ${title}
• • ┈┉══════════════━┉ • •
❤️͢➢ *${lenguajeEB.smsYT2()}*
◊► ${description}
• • ┈┉══════════════━┉ • •
❤️͢➢ *${lenguajeEB.smsYT3()}*
◊► ${timestamp}
• • ┈┉══════════════━┉ • •
❤️͢➢ *${lenguajeEB.smsYT4()}*
◊► ${views}
• • ┈┉══════════════━┉ • •
❤️͢➢ *URL | ENLACE*
◊► ${url}
╚ೋ❀👑❀═❲🌆♪𝐵𝑡𝑠𝐵𝑜𝑡♪🌆❳═❀👑❀ೋ╝`.trim()
await conn.sendFile(m.chat, thumbnail, 'error.jpg', video, m)    
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
await conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})  
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}    
break
        
case isCommand3:
if (!args[0]) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeEB.smsAvisoEG() + '*' + lenguajeEB.smsYTA1() + '*', m)
try {
q = '128kbps'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
ttl = await yt.title
size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m }) 
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
}        
break
        
case isCommand4:
if (!args[0]) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeEB.smsAvisoEG() + '*' + lenguajeEB.smsYTA2() + '*', m)
try {
q = '128kbps'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.audio[q].download()
ttl = await yt.title
size = await yt.audio[q].fileSizeH
cap = `✨𝄞 𝐴𝑈𝐷𝐼𝑂 𝄞✨\n\n*⎘⃯⃗➢ ${ttl}*\n\n*⎘⃯⃗➢ ${size}*`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
cap = `🌇𝄞 𝐴𝑈𝐷𝐼𝑂 𝄞🌇\n\n*⎘⃯⃗➢ ${n}*\n\n*⎘⃯⃗➢ ${n3}*`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
}        
break
        
case isCommand5:
if (!args[0]) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeEB.smsAvisoEG() + '*' + lenguajeEB.smsYTV1() + '*', m)
try {
qu = args[1] || '360'
q = qu + 'p'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.video[q].download()
ttl = await yt.title
size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${ttl}*\n*⚖️ ${size}*`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*💫 ${n}*\n*⚖️ ${n3}*`, thumbnail: await fetch(n4) }, { quoted: m })
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
}        
break

case isCommand6:
if (!args[0]) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} https://youtu.be/ejemplo*\n*${usedPrefix + command} https://www.youtube.com/ejemplo*`
await conn.reply(m.chat, lenguajeEB.smsAvisoEG() + '*' + lenguajeEB.smsYTV2() + '*', m)
try {
qu = args[1] || '360'
q = qu + 'p'
v = args[0]
yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
dl_url = await yt.video[q].download()
ttl = await yt.title
size = await yt.video[q].fileSizeH
cap = `𖠺🌹⸨ 𝑉𝐼𝐷𝐸𝑂 ⸩🌹𖠺\n\n*͡➽͢꙰ ${ttl}*\n\n*͡➽͢꙰ ${size}*`.trim()
await await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
try{
lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
lolh = await lolhuman.json()
n = lolh.result.title || 'error'
n2 = lolh.result.link
n3 = lolh.result.size
cap = `𖠺💜⸨ 𝑉𝐼𝐷𝐸𝑂 ⸩💜𖠺\n\n**͡➽͢꙰  ${n}*\n\n**͡➽͢꙰  ${n3}*`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
}
break
        
case isCommand7:
if (!args[0]) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`
if (!args[0].match(/www.facebook.com|fb.watch/g)) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`    
try {  
let contenido = `⫹⫺꙰𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑐𝑘⫹⫺꙰`
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await m.reply(wait)
await conn.sendFile(m.chat, videovio, `error.mp4`, contenido, m)
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
break
        
case isCommand8:
if (!args[0]) throw lenguajeEB.smsMalused2() + `*${usedPrefix + command} https://www.mediafire.com/file/04kaaqx9oe3tb8b/DOOM_v13_CLONE%255BCOM.FM%255D.apk/file*`
try {  
let res = await mediafireDl(args[0])
let { name, date, mime, link, size:peso } = res
let caption = `
•°• ✾ •°••°• ✾ •°••°• ✾ •°•
🌆 ${name}
•°• ✾ •°••°• ✾ •°••°• ✾ •°•
🚀 ${date}
•°• ✾ •°••°• ✾ •°••°• ✾ •°•
🛡️ ${peso}
•°• ✾ •°••°• ✾ •°••°• ✾ •°•
✨ ${mime}
•°• ✾ •°••°• ✾ •°••°• ✾ •°•
${lenguajeEB.smsMediaFr()}`.trim()
await m.reply(caption)
await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })  
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}    
async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
break 
}}

handler.command = /^(gimage|imagen?|play2?|fgmp3|dlmp3|getaud|yt(a|mp3)?|ytmp3doc|ytadoc|fgmp4|dlmp4|getvid|yt(v|mp4)?|ytmp4doc|ytvdoc|facebook|fb|facebookdl|fbdl|mediafire(dl)?|dlmediafire)$/i
handler.register = true
export default handler
