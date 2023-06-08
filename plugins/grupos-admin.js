import fetch from 'node-fetch'
let handler = async (m, { conn,usedPrefix, command, text, args, isOwner, isAdmin, participants }) => {
var number, user, fkontak, pp, bot, bant, ownerNumber, aa, users, usr
const isCommand1 = /^(promote|daradmin|darpoder)$/i.test(command)
const isCommand2 = /^(demote|quitarpoder|quitaradmin)$/i.test(command)
const isCommand3 = /^(setwelcome|bienvenida|edit(?:ar)?wel(?:come)?)$/i.test(command)
const isCommand4 = /^(setbye|despedida|edit(?:ar)?(bye)?)$/i.test(command)
const isCommand5 = /^(setdesk|setdesc|newdesc|descripción|descripcion|cambiardesc)$/i.test(command)
const isCommand6 = /^(setname|newnombre|nuevonombre|cambiarnombre)$/i.test(command);
const isCommand7 = /^(setpp(group|grup|gc)?|cambiarpp)$/i.test(command)
const isCommand8 = /^(nuevolink|nuevoenlace|revoke|resetlink)$/i.test(command)
const isCommand9 = /^(kick|echar|hechar|sacar|ban)$/i.test(command)
const isCommand10 = /^(group|grupo)$/i.test(command)
const isCommand11 = /^(tagall|invocar|invocacion|todos|invocación)$/i.test(command)
const isCommand12 = /^(prohibir|prohibit|privar|deprive)$/i.test(command)

fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
switch (true) {     
case isCommand1:
if(isNaN(text) && !text.match(/@/g)){
}else if(isNaN(text)) {
number = text.split`@`[1]
}else if(!isNaN(text)) {
number = text
}
if(!text && !m.quoted) return conn.reply(m.chat, lenguajeEB['smsMalused3']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, lenguajeEB['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)	
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
} } catch (e) {
} finally {
await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
await conn.reply(m.chat, lenguajeEB['smsAvisoEG']() + lenguajeEB['smsDemott2'](), fkontak, m)
}
break
  
case isCommand2:
if(isNaN(text) && !text.match(/@/g)){	
}else if(isNaN(text)) {
number = text.split`@`[1]
}else if(!isNaN(text)) {
number = text
}	
if (!text && !m.quoted) return conn.reply(m.chat, lenguajeEB['smsMalused3']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, lenguajeEB['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)	  
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
await conn.reply(m.chat, lenguajeEB['smsAvisoEG']() + lenguajeEB['smsDemott3'](), fkontak, m)
}  
break
  
case isCommand3:
if (text) {
global.db.data.chats[m.chat].sWelcome = text
await conn.reply(m.chat, lenguajeEB['smsSetW'](), fkontak, m)
} else throw `${lenguajeEB['smsSetW2']()}`  
break
  
case isCommand4:
if (text) {
global.db.data.chats[m.chat].sBye = text
await conn.reply(m.chat, lenguajeEB['smsSetB'](), fkontak, m)
} else throw `${lenguajeEB['smsSetB2']()}`  
break
  
case isCommand5:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeEB.smsDest(), m, fkontak)
break
  
case isCommand6:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
if (!text) return conn.reply(m.chat, lenguajeEB['smsNam2'](), fkontak, m)
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
await conn.groupUpdateSubject(m.chat, text)}
} catch (e) { 
throw lenguajeEB['smsNam3']()
}  
break
  
case isCommand7:
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw lenguajeEB.smsGrupoPP()
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(lenguajeEB.smsGrupoPP2()))
} else throw lenguajeEB.smsGrupoPP()
break
  
case isCommand8:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let res = await conn.groupRevokeInvite(m.chat)
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeEB.smsRestGp() + '\n\n*https://chat.whatsapp.com/' + res + '*', m, fkontak)
break
  
case isCommand9:
try{
let texto = `${lenguajeEB['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeEB['smsAvisoAG']()}${lenguajeEB['smsSoloOwner']()}`, fkontak, m)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(texto, m.chat, { mentions: conn.parseMention(texto)}) 
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return conn.reply(m.chat, texto, fkontak, m) 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return conn.reply(m.chat, `${lenguajeEB['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)  
let eliminar = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
let done = `${lenguajeEB['smsAvisoEG']()}*@${mentioned.split("@")[0]} ${lenguajeEB['smskick2']()}*`
let err1 = `${lenguajeEB['smsAvisoFG']()}*@${mentioned.split("@")[0]} ${lenguajeEB['smskick3']()}*`
let err2 = `${lenguajeEB['smsAvisoAG']()}*@${mentioned.split("@")[0]} ${lenguajeEB['smskick4']()}*`
if (eliminar[0].status === "200") m.reply(done, m.chat, { mentions: conn.parseMention(done)})  
else if (eliminar[0].status === "406") m.reply(err1, m.chat, { mentions: conn.parseMention(err1)})   
else if (eliminar[0].status === "404") m.reply(err2, m.chat, { mentions: conn.parseMention(err2)})  
else conn.reply(m.chat, lenguajeEB['smsMalError3']() + '#report ' + usedPrefix + command, m)  
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) return
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)
}
break
    
case isCommand10:
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { 
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `${lenguajeEB['smsMalused']()}
*❬📗❭➢ ${usedPrefix + command} ${lenguajeEB.lenguaje() == 'es' ? 'abrir' : 'open'}*
*❬📕❭➢ ${usedPrefix + command} ${lenguajeEB.lenguaje() == 'es' ? 'cerrar' : 'close'}*`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
if (isClose === 'not_announcement'){
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeEB.smsGrupoOpen(), m)}
if (isClose === 'announcement'){
await conn.sendFile(m.chat, pp, 'error.jpg', lenguajeEB.smsGrupoClose(), m)}      
break
    
case isCommand11:
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `▻ ${lenguajeEB['smsAddB5']()} ${pesan}`
let teks = `*${lenguajeEB['smstagaa']()}*\n\n${oi}\n\n`
for (let mem of participants) {
teks += `➭ @${mem.id.split('@')[0]}\n`}
await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )    
break
    
case isCommand12:
try{
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = lenguajeEB.smsPropban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, lenguajeEB.smsPropban2(bot), null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, lenguajeEB.smsPropban3(ownerNumber), null, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, lenguajeEB.smsPropban4(number), null, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, lenguajeEB.smsPropban5(), null, { mentions: [user] })   
await conn.reply(user, lenguajeEB.smsPropban6(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, lenguajeEB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}
break
}} 
  
handler.command = /^(promote|daradmin|darpoder|demote|quitarpoder|quitaradmin|setwelcome|bienvenida|edit(?:ar)?wel(?:come)?|setbye|despedida|edit(?:ar)?(bye)?|setdesk|setdesc|newdesc|descripción|descripcion|cambiardesc|setname|newnombre|nuevonombre|cambiarnombre|cambiarpp|setpp(group|grup|gc)?|nuevolink|nuevoenlace|revoke|resetlink|kick|echar|hechar|sacar|ban|group|grupo|tagall|invocar|invocacion|todos|invocación|prohibir|prohibit|privar|deprive)$/i
handler.group = true
handler.botAdmin = true 
handler.register = true
handler.admin = true

export default handler 
