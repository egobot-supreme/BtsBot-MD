import { createHash } from 'crypto'
let handler = async function (m, { args, usedPrefix, command }) {
let idreg = `${lenguajeEB.lenguaje() == 'es' ? 'idregistro' : 'idregister'}`
let regbot = `${lenguajeEB.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`
if (!args[0]) throw lenguajeEB.smsUnreg1(usedPrefix, idreg)
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
if (args[0] !== sn) throw lenguajeEB.smsUnreg2(usedPrefix, idreg)
user.registered = false
m.reply(lenguajeEB.smsUnreg3(usedPrefix, regbot))
}
handler.command = /^anulareg|unreg(ister)?$/i
handler.register = true
export default handler
