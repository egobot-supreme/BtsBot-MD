import { webp2mp4, webp2png  } from '../lib/webp2mp4.js'  
import { ffmpeg, toPTT } from '../lib/converter.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, command, usedPrefix, args }) => {
let q, mime, media, out, caption

const isCommand1 = /^(to(img|image)?|img|jpe?g|png)\b$/i.test(command)
const isCommand2 = /^(tourl|url|upload)\b$/i.test(command)
const isCommand3 = /^(to(video|mp4)?|mp4)\b$/i.test(command)
const isCommand4 = /^(to(gif|gifau)?|gif|gifau)\b$/i.test(command)
const isCommand5 = /^(to(vn|ptt|audio|mp3)?|mp3)\b$/i.test(command)
const isCommand6 = /^(to(voice|tts)?|tts)\b$/i.test(command)

switch (true) {     
case isCommand1:
const notStickerMessage = lenguajeEB.smsToimg()
if (!m.quoted) throw notStickerMessage
try{  
q = m.quoted || m
mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
media = await q.download()
out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)} 
break  

// Codigo Command   
case isCommand2:    
q = m.quoted ? m.quoted : m
mime = (q.msg || q).mimetype || ''
if (!mime) throw lenguajeEB.smsConURL()
try{ 
media = await q.download()
const urlRegex = /(https?:\/\/.*\.(?:png|jpe?g|webp))/i
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media) 
//Resultado en MG o KB
const bytes = media.length;
let result
const kilobytes = bytes / 1024;
if (kilobytes < 1) {
result = kilobytes.toFixed(2) + ' KB';
} else {
const megabytes = bytes / (1024 * 1024);
if (Math.floor(megabytes) >= 1) {
result = megabytes.toFixed(2) + ' MB';
} else {
result = kilobytes.toFixed(2) + ' KB';
}} 
caption = `
╭┉┉⟬🌹⟭━❮𝙱𝚝𝚜 𝙱𝚘𝚝 𝙼𝙳❯━⟬🌹⟭┉┉╮
├❲💎❳▻${lenguajeEB.smsConURL1()}
╰꙳͢➢ ${link}\n
⚚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⚚
╭❲💎❳▻${lenguajeEB.smsConURL2()}
╰꙳͢➢ ${result}\n
⚚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⚚
╭❲💎❳▻${lenguajeEB.smsConURL3()}
╰꙳͢➢ ${isTele ? lenguajeEB.smsConURLERR1() : lenguajeEB.smsConURLERR2()}\n
⚚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⚚
╭❲💎❳▻${lenguajeEB.smsConURL4()}
├꙳͢➢ ${await shortUrl(link)}
╰┉┉⟬👑⟭━❮𝙱𝚝𝚜 𝙱𝚘𝚝 𝙼𝙳❯━⟬👑⟭┉┉╯
`.trim()
m.reply(caption) 
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()}    
break 

case isCommand3:       
if (!m.quoted) throw lenguajeEB.smsConVIDEO() 
mime = m.quoted.mimetype || ''
if (!/webp|gif/.test(mime)) throw lenguajeEB.smsConVIDEO2() 
try{ 
media = await m.quoted.download()
out = Buffer.alloc(0)
if (/webp|gif/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')}
await conn.sendFile(m.chat, out, 'error.mp4', lenguajeEB.smsConVIDEO3(), m, 0, { thumbnail: out }) 
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
break 

case isCommand4:       
if (!m.quoted) throw lenguajeEB.smsConGIF()
q = m.quoted || m
mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw lenguajeEB.smsConGIF2() + mime
try{ 
m.reply(global.wait)
media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: lenguajeEB.smsConGIF3() }, { quoted: m })
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
break
    
case isCommand5:       
q = m.quoted ? m.quoted : m
mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw lenguajeEB.smsConVN()
media = await q.download?.()
if (!media && !/video/.test(mime)) throw lenguajeEB.smsConVN1()
if (!media && !/audio/.test(mime)) throw lenguajeEB.smsConVN2()
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw lenguajeEB.smsConVN3()
if (!audio.data && !/video/.test(mime)) throw lenguajeEB.smsConVN4()
try{
let aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
if (!aa) return conn.sendMessage(m.chat, { audio: { url: media }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
break
        
case isCommand6: 
let defaultLang = lenguajeEB.lenguaje()
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) { 
lang = defaultLang 
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text
let res
try { res = await tts(text, lang) }
catch (e) {
//m.reply(e + '')
text = args.join(' ')
if (!text) throw lenguajeEB.smsTradc1() + usedPrefix + command + lenguajeEB.smsTradc2() + usedPrefix + command + ' ' + lenguajeEB.smsTradc3() + lenguajeEB.smsTradc4()
res = await tts(text, defaultLang)
} finally {
try{
if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}        
}    
function tts(text, lang = lenguajeEB.lenguaje()) {
console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(readFileSync(filePath))
unlinkSync(filePath)
})
} catch (e) { reject(e) }
})}
break        
}}

handler.command = /^(to(img|image)?|img|jpe?g|png|tourl|url|upload|to(video|mp4)?|mp4|to(gif|gifau)?|gif|gifau|to(vn|ptt|audio|mp3)?|mp3|to(voice|tts)?|tts)\b$/i
export default handler
