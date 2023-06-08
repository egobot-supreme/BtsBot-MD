import translate from '@vitalets/google-translate-api'
import * as fs from 'fs'
import { es, en, id, ar, pt } from '../lib/idiomas/total-idiomas.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let texto = `*🌹El idioma fue cambiado exitosamente 🌹:* `
let texto2 = `*🍰 Seleccione el idioma deseado 🍰*`
let texto3 = `*🚀Info🚀 _El idioma coreano todavoa no esta disponible, lo estara en proximas actualizaciones si hay colaboradores o colaboradoras, por otra parte al cambiar de idioma, los comandos no cambiaran de idioma solo el contenido (texto)._*`
let idioma = await translate(`${texto}`, { to: args[0], autoCorrect: true })
let idioma2 = await translate(`${texto2}`, { to: lenguajeEB.lenguaje(), autoCorrect: true })
let idioma3 = await translate(`${texto3}`, { to: lenguajeEB.lenguaje(), autoCorrect: true })

try {  
if (args[0] == 'es'){
global.lenguajeEB = es
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + '➮ ```Español```', wm, null, [[`📗 𝗠 𝗘 𝗡 𝗨 📗`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'en'){
global.lenguajeEB = en
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + '➮ ```English```', wm, null, [[`📗 𝗠 𝗘 𝗡 𝗨 📗`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'id'){
global.lenguajeEB = id
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + '➮ ```Bahasa Indonesia```', wm, null, [[`📗 𝗠 𝗘 𝗡 𝗨 📗`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'ar'){
global.lenguajeEB = ar
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + '➮ ```عرب```', wm, null, [[`📗 𝗠 𝗘 𝗡 𝗨 📗`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'pt'){
global.lenguajeEB = pt
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + '➮ ```Português```', wm, null, [[`📗 𝗠 𝗘 𝗡 𝗨 📗`, `${usedPrefix}menu`]], fkontak, m)
}else{
  
const sections = [{
title: '💖𝑰𝒅𝒊𝒐𝒎𝒂𝒔 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆𝒔 𝒑𝒂𝒓𝒂 𝑩𝒕𝒔𝑩𝒐𝒕-𝑴𝑫💖',
rows: [
{title: "💎 Español", rowId: `${usedPrefix + command} es`},
{title: "💎 English", rowId: `${usedPrefix + command} en`},
{title: "💎 Bahasa Indonesia", rowId: `${usedPrefix + command} id`},
{title: "💎 عرب", rowId: `${usedPrefix + command} ar`},
{title: "💎 Português", rowId: `${usedPrefix + command} pt`}]}]

const listMessage = {
text: idioma2.text + '\n\n' + idioma3.text,
footer: `▢► Español = ${usedPrefix + command} es
▢► English = ${usedPrefix + command} en
▢► Bahasa Indonesia = ${usedPrefix + command} id
▢► عرب = ${usedPrefix + command} ar
▢► Português = ${usedPrefix + command} pt\n\n` + wm,
title: `${htki} Idioma 🌎`,
buttonText: `🌹 Seleccionar 🌹`,
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
}catch(e){
await m.reply(`${fg}\`\`\`*_🌹ERROR🌹_* *NO SE LOGRO CAMBIAR DE IDIOMA, INTENTE NUEVAMENTE, Y SI SIGUE CON EL PROBLEMA, REPORTA ESTE COMANDO:* ${usedPrefix + command} *CON EL CODIGO:* ${usedPrefix}reporte\`\`\``) 
console.log(e) 
}}

handler.command = /^(idioma|languaje|EgoIdioma|idiomas|languajes|languages)$/i
handler.owner = true

export default handler
