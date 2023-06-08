import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => img2)
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let user = global.db.data.users[m.sender]
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let str = `┎━❲🌆❳━─💜─⟬✨𝑷𝒆𝒓𝒇𝒊𝒍✨⟭─💜─━❲🌆❳━┒
┋ ${lenguajeEB.smsPerfil0()}
┖━❲👑❳━─🌹─⟬✨𝑷𝒆𝒓𝒇𝒊𝒍✨⟭─🌹─━❲👑❳━┚

⛧ೋ🏙️ೋ⟬✨𝑩𝒕𝒔𝑩𝒐𝒕✨⟭ೋ🏙️ೋ⛧
╭❲🎡❳➮ ${lenguajeEB.smsPerfil1()} 
╰✎ @${tag}
⟣⚊⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊⚊⟢
╭❲🎡❳➮ ${lenguajeEB.smsPerfil2()} 
╰✎ ${name}
⟣⚊⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊⚊⟢
╭❲🎡❳➮ ${lenguajeEB.smsPerfil3()}
╰✎ ${age}
⟣⚊⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊⚊⟢
╭❲🎡❳➮ ${lenguajeEB.smsPerfil4()}
╰✎ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
⟣⚊⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊⚊⟢
╭❲🎡❳➮ ${lenguajeEB.smsPerfil5()}
╰✎ \`\`\`${sn}\`\`\`
⛧ೋ💖ೋ⟬✨𝑩𝒕𝒔𝑩𝒐𝒕✨⟭ೋ💖ೋ⛧
𝒆𝒈𝒐_𝒐𝒇𝒇𝒊𝒄𝒊𝒂𝒍_𝒄𝒓𝒆𝒂𝒕𝒐𝒓.`.trim()
await conn.sendFile(m.chat, pp, 'ego.jpg', str, m, false, { mentions: [aa] }) 
}
handler.command = /^perfil|EgoPerfil|BtsPerfil|profile?$/i
handler.register = true
export default handler
