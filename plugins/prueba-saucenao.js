//Código creado por https://github.com/SerizawaBeta-MD

import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {

try {   
let url
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = /\.(jpg|jpeg|png)$/i;
const pageUrlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i

if (pageUrlRegex.test(text) && urlRegex.test(text)) {
//if (text) {
url = text
    
} else if (m.quoted && /image\/(png|jpe?g)/.test(mime) || mime.startsWith('image/')) {
let media = await q.download()
url = await uploadImage(media)
    
} else if (m.quoted && /image\/webp/.test(mime)) {
let media = await q.download()
url = await webp2png(media)
    
} else {
return m.reply('❲🍰❳➜ RESPONDA A UN MENSAJE CON IMAGEN EN FORMATO JPG O JPEG.')
}
    
const apiKeys = ["d3a88baf236200c2ae23f31039e599c252034be8", "a74012c56b54b8d36d2675e12b1a216809c353fe", "45e67c4cbc3d784261ffc83806b5a1d7e3bd09ae",
"9812eb9464efa1201c69e5592ba0c74e7edd95e8", "2e7da9f5e70c65f2885b07d48595ba03c4be2ba7", "dafca3c54e59ae1b7fea087ca75984f9e64b74e1"]
let response;
let success = false;

for (let i = 0; i < apiKeys.length; i++) {
const apiKey = apiKeys[i];
try {
response = await axios.get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=6&api_key=${apiKey}&url=${encodeURIComponent(url)}`)
success = true;
break
} catch (error) {
console.error(`Error en la API key: ${apiKey}`, error) 
}}
if (!success) {
m.reply("❲❗❳➜ Todas las solicitudes fallaron. No se pudo encontrar una respuesta exitosa.")
return
}

const results = response.data.results;
const primerResultado = results[0]
    
let resultadoEnBruto = ''
for (let prop in primerResultado.header) {
let propName = '';
switch (prop) {
case 'similarity': propName = 'Puntuación de similitud' 
break        
case 'thumbnail': propName = 'URL de la miniatura' 
break        
case 'index_id': propName = 'ID del índice' 
break        
case 'index_name': propName = 'Nombre del índice' 
break        
case 'dupes': propName = 'Imágenes duplicadas' 
break        
case 'hidden': propName = 'Imágenes ocultas o bloqueadas' 
break        
case 'author_name': propName = 'Nombre del autor' 
break         
case 'source': propName = 'Fuente' 
break        
case 'material': propName = 'Material' 
break

default:
propName = prop;
}
resultadoEnBruto += `*${propName}*\n${primerResultado.header[prop]}\n\n`}
//resultadoEnBruto += ''
    
for (let prop in primerResultado.data) {
let propName = ''

switch (prop) {
case 'title': propName = 'Título' 
break        
case 'ext_urls': propName = 'URLs' 
break        
case 'member_name': propName = 'Nombre del autor' 
break        
case 'pixiv_id': propName = 'ID de Pixiv' 
break        
case 'danbooru_id': propName = 'ID de Danbooru' 
break        
case 'gelbooru_id': propName = 'ID de Gelbooru' 
break        
case 'source': propName = 'Fuente' 
break        
case 'material': propName = 'Material' 
break        
case 'da_id': propName = 'ID de la imagen' 
break        
case 'author_name': propName = 'Nombre del Autor' 
break        
case 'author_url': propName = 'URL del Autor' 
break        
case 'member_id': propName = 'ID del Autor' 
break        
case 'fa_id': propName = 'ID del Autor en FurAffinity' 
break        
case 'as_project': propName = 'Proyecto en Anime-Source' 
break

default:
propName = prop
}
resultadoEnBruto += `*${propName}*\n${primerResultado.data[prop]}\n\n`}
    
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: md, thumbnail: await(await fetch(primerResultado.header.thumbnail)).buffer() }}}
await m.reply('*🎀 𝐄𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*')
await conn.sendButton(m.chat, `*🎀𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬:* ${results.length}
*𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨𝐬:* ${Boolean(results) === true ? 'Si' : 'No'}

*❲👑❳➜ 𝐋 𝐈 𝐌 𝐈 𝐓 𝐄 𝐒*

*❮ 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐔𝐃𝐄𝐒 𝐑𝐄𝐒𝐓𝐀𝐍𝐓𝐄𝐒 ❯*
*❮ 𝐂𝐎𝐑𝐓𝐎 𝐏𝐋𝐀𝐙𝐎 ❯*
➮ ${results.short_remaining === undefined ? 'No especificado' : results.short_remaining} 

*❮ 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐔𝐃𝐄𝐒 𝐑𝐄𝐒𝐓𝐀𝐍𝐓𝐄𝐒 ❯*
*❮ 𝐋𝐀𝐑𝐆𝐎 𝐏𝐋𝐀𝐙𝐎 ❯*
➮ ${results.long_remaining === undefined ? 'No especificado' : results.long_remaining} 


*❲📗❳➜ 𝐑 𝐄 𝐒 𝐔 𝐋 𝐓 𝐀 𝐃 𝐎*

*❮ 𝐔𝐑𝐋 𝐝𝐞 𝐥𝐚 𝐦𝐢𝐧𝐢𝐚𝐭𝐮𝐫𝐚 ❯*
➮ ${primerResultado.header.thumbnail}

*❮ 𝐏𝐔𝐍𝐓𝐔𝐀𝐂𝐈𝐎𝐍 ┋ 𝐒𝐈𝐌𝐈𝐋𝐈𝐓𝐔𝐃 ❯*
➮ ${primerResultado.header.similarity}%

*❮ 𝐓𝐈𝐓𝐔𝐋𝐎 ❯*
➮ ${primerResultado.data.title}

*❮ 𝐔𝐑𝐋 ┋ 𝐄𝐍𝐋𝐀𝐂𝐄 ❯*
➮ ${primerResultado.data.ext_urls}

*❮ 𝐀𝐔𝐓𝐎𝐑/𝐀 ❯*
➮ ${primerResultado.data.member_name === undefined ? 'No encontrado' : primerResultado.data.member_name}\n`,  `*❲💜❳➜ 𝐈 𝐍 𝐅 𝐎  𝐀 𝐃 𝐈 𝐂 𝐈 𝐎 𝐍 𝐀 𝐋*

${resultadoEnBruto}`.trim(), url, [['📗 𝗠 𝗘 𝗡 𝗨 📗', '/menu']], m, frep)
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}
}

handler.command = /^sauce$/i
export default handler
