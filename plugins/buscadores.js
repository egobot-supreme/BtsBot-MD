import { googleIt } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, command, usedPrefix, args, text }) => {
const isCommand1 = /^(googlef?)$/i.test(command)
const isCommand2 = /(openai|chatgpt|ia|ai)/i.test(command)
const isCommand3 = /^(bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle)$/i.test(command)
const isCommand4 = /^(githubstalk|usuariogithub|usergithub)$/i.test(command)

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
async function reportError(e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)
}

switch (true) {     
case isCommand1:
if (!text) return conn.reply(m.chat, lenguajeEB.smsAvisoMG() + lenguajeEB.smsMalused2() + `\n*${usedPrefix + command} Qué es Matemáticas?*` , m)
try{
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text, { limit: 30 });
let msg = search.articles.map(({ title, url, description }) => { return `*${title}*\n_${url}_\n_${description}_` }).join('\n\n')
m.reply(msg)
} catch (e) {
reportError(e)
}    
break 
    
case isCommand2:
if (!text) return conn.reply(m.chat, lenguajeEB.smsOpenai1() + `\n*${usedPrefix + command}* ${lenguajeEB.smsOpenai2()}\n\n*${usedPrefix + command}* ${lenguajeEB.smsOpenai3()}` , m)
try {
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch (e) {
reportError(e)
}    
break
    
case isCommand3:
if (!text) return conn.reply(m.chat, lenguajeEB.smsMalused2() + `\n*${usedPrefix + command} ${lenguajeEB.smsCreA()}*` , m) 
try{
await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=${lenguajeEB.lenguaje()}`)  
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
} catch (e) {
reportError(e)
}     
break
        
case isCommand4:
if (!text) return conn.reply(m.chat, lenguajeEB.smsGit1(usedPrefix, command), m)
await m.reply(lenguajeEB.smsGit2())
try{
let err = lenguajeEB.smsGit14()
let request = await githubstalk(text) 
let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
let thumb = await (profile_pic)
let cont = `*✰━❲🌟❳━─♫︎💜♫︎❮ 𝑮𝒊𝒕𝒉𝒖𝒃 ❯♫︎💜♫︎─━❲🌟❳━✰*\n
${lenguajeEB.smsGit3()}
${username || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit4()}
${bio || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit5()}
${company || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit6()}
${email || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit7()}
${blog || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit8()}
${public_repo || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit9()}
${public_gists || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit10()}
${followers || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit11()}
${following || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit12()}
${location || err}
❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎━❤︎
${lenguajeEB.smsGit13()}
${type || err}
✰━❲🌟❳━─♫︎🌹♫︎❮ 𝑮𝒊𝒕𝒉𝒖𝒃 ❯♫︎🌹♫︎─━❲🌟❳━✰
𝒃𝒚: 𝑬𝒈𝒐_𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍_𝑪𝒓𝒆𝒂𝒕𝒐𝒓`
await conn.sendFile(m.chat, thumb || egoMenu.getRandom(), 'githubstalk.jpg', cont, fkontak) 
} catch (e) {
reportError(e)
}  
break   
}}

handler.command = /^(googlef?|openai|chatgpt|ia|ai|bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle|githubstalk|usuariogithub|usergithub)$/i
handler.register = true
export default handler

async function githubstalk(user) {
return new Promise((resolve, reject) => {
axios.get('https://api.github.com/users/'+user)
.then(({ data }) => {
let hasil = {
 username: data.login,
 nickname: data.name,
 bio: data.bio,
 id: data.id,
 nodeId: data.node_id,
 profile_pic: data.avatar_url,
 url: data.html_url,
 type: data.type,
 admin: data.site_admin,
 company: data.company,
 blog: data.blog,
 location: data.location,
 email: data.email,
 public_repo: data.public_repos,
 public_gists: data.public_gists,
 followers: data.followers,
 following: data.following,
 ceated_at: data.created_at,
 updated_at: data.updated_at
}
resolve(hasil)})})  
}
