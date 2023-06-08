//NO BORRAR O CAMBIAR NOMBRE DEL ARCHIVO, DE LO CONTRARIO NO FUNCIONARÁ  
let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return m.reply(lenguajeEB.smsUnbanCH1())
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return m.reply(lenguajeEB.smsUnbanCH2())
chat.isBanned = false
await conn.reply(m.chat, lenguajeEB.smsUnbanCH3(), m)
}
handler.command = /^unbanchat|desbanearchat|desbanchat$/i
handler.owner = true

export default handler
