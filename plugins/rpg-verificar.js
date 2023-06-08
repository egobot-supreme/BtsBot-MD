import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
if (user.registered === true) throw lenguajeEB.smsVerify0(usedPrefix)
if (!Reg.test(text)) throw lenguajeEB.smsVerify1(usedPrefix, command)
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw lenguajeEB.smsVerify2()
if (!age) throw lenguajeEB.smsVerify3()
age = parseInt(age)
if (age > 50) throw lenguajeEB.smsVerify4()
if (age < 10) throw lenguajeEB.smsVerify5()
if (name.length >= 30) throw lenguajeEB.smsVerify6()
user.name = name + '❖𝐸͜𝑔ᷛ͢𝑜ᷛ❖'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => egoMenu.getRandom())
let caption = `${lenguajeEB.smsVerify7()}
┍━═❲🌇❳═━⟬✨𝑽𝒆𝒓𝒊𝒇𝒚 𝑩𝒐𝒕✨⟭━═❲🌇❳═━┑
┋❬💜❭➤ ${lenguajeEB.smsPerfil1()} 
┋⎘➫ @${tag}
┋◊───────────────◊
┋❬💜❭➤ ${lenguajeEB.smsPerfil2()} 
┋⎘➫ ${name}
┋◊───────────────◊
┋❬💜❭➤ ${lenguajeEB.smsPerfil3()}
┋⎘➫ ${age}
┋◊───────────────◊
┋❬💜❭➤ ${lenguajeEB.smsVerify9()}
┋⎘➫ '❖𝐸͜𝑔ᷛ͢𝑜ᷛ❖'
┋◊───────────────◊
┋❬💜❭➤ ${lenguajeEB.smsPerfil5()}
┋⎘➫ \`\`\`${sn}\`\`\`
┕━═❲🌇❳═━⟬✨𝑽𝒆𝒓𝒊𝒇𝒚 𝑩𝒐𝒕✨⟭━═❲🌇❳═━┙`.trim()
await conn.sendFile(m.chat, pp, 'ego.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeEB.smsVerify8(usedPrefix)) 
await m.reply(`${sn}`) 
}
handler.command = /^(verify|EgoVerify|BtsVerify|verificar|reg(ister)?)$/i
export default handler
