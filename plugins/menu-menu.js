import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = ` @${m.sender.split("@")[0]}*
╔ೋ❀❀ೋ══❲🧧𝑀𝑒𝑛𝑢🧧❳══ೋ❀❀ೋ╗
║ ${packname}
║ ${vs} _BtsBot-MD_
╠══════════════━┉ • •
║❬♔❭➮ _${lenguajeEB.smsMenuTotal1()}_
╠══════════════━┉ • •
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'creador' ➣ 'owner'}_
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'contacto' ➣ 'contact'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'cuentaseg' ➣ 'account'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'donar' ➣ 'donate'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'codigo' ➣ 'sc'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'gruposeb' ➣ 'groupseb'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'instalarbot' ➣ 'installbot'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'grupolista' ➣ 'grouplist'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'estado' ➣ 'status'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'velocidad' ➣ 'ping'}_ 
╠❲͢͡❤️͡❳͢➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'infoego' ➣ 'infobot'}_ 
╠❲͢͡❤️͡❳͢➽ _${lenguajeEB.lenguaje() == 'es' ? 'términos y condiciones' ➣ 'terms'}_ 
╚ೋ❀❀ೋ══❲🧧𝑀𝑒𝑛𝑢🧧❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲🌇𝑀𝑒𝑛𝑢🌇❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal10()}_
╠══════════════━┉ • • 
╠❲͢͡📗͢͡❳➽ _on_
╠❲͢͡📕͢͡❳➽ _off_
╚ೋ❀❀ೋ══❲🌇𝑀𝑒𝑛𝑢🌇❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲🍓𝑀𝑒𝑛𝑢🍓❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal4()}_
╠══════════════━┉ • •
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'imagen *texto*' ➣ 'gimage *text*'}_
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'facebook *enlace*' ➣ 'facebookdl *link*'}_
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'mediafire *enlace*' ➣ 'mediafiredl *link*'}_
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'play *nombre o enlace*' ➣ 'play *name*'}_
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'yta *enlace*' ➣ 'yta *link*'}_
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ytv *enlace*' ➣ 'ytv *link*'}_
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ytadoc *enlace*' ➣ 'ytadoc *link*'}_
╠❲͢͡⬇️͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ytvdoc *enlace*' ➣ 'ytvdoc *link*'}_
╚ೋ❀❀ೋ══❲🍓𝑀𝑒𝑛𝑢🍓❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲🍩𝑀𝑒𝑛𝑢🍩❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal9()}_
╠══════════════━┉ • •
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}bass_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}blown_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}deep_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}earrape_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}fast_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}fat_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}nightcore_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}reverse_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}robot_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}slow_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}smooth_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}tupai_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}audio8d_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}echo_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}distortion_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}pitch_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}reverb_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}flanger_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}apulsator_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}tremolo_
╠❲͢͡🎤͢͡❳➽ _${usedPrefix}chorus_
╚ೋ❀❀ೋ═══❲🍩𝑀𝑒𝑛𝑢🍩❳═══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲💞𝑀𝑒𝑛𝑢💞❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal5()}_
╠══════════════━┉ • •
╠❲͢͡🚀͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'img *sticker*' ➣ 'toimg *sticker*'}_
╠❲͢͡🚀͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'url *imagen*' ➣ 'tourl *image*'}_
╠❲͢͡🚀͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'mp4 *sticker*' ➣ 'tovideo *sticker*'}_
╠❲͢͡🚀͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'gif *video*' ➣ 'togif *video*'}_
╠❲͢͡🚀͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'mp3 *video o audio*' ➣ 'tovn *video or audio*'}_
╠❲͢͡🚀͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'tts *texto*' ➣ 'totts *text*'}_
╚ೋ❀❀ೋ══❲💞𝑀𝑒𝑛𝑢💞❳══ೋ❀❀ೋ╝
 
╔ೋ❀❀ೋ══❲🎀𝑀𝑒𝑛𝑢🎀❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal3()}_
╠══════════════━┉ • •
╠❲͢͡🌹͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'google *texto*' ➣ 'googlef *text*'}_
╠❲͢͡🌹͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'bot *texto*' ➣ 'simsimi *text*'}_
╠❲͢͡🌹͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ia *texto*' ➣ 'chatgpt *text*'}_
╚ೋ❀❀ೋ══❲🎀𝑀𝑒𝑛𝑢🎀❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲💙𝑀𝑒𝑛𝑢💙❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal6()}_
╠══════════════━┉ • •
╠❲͢͡👥͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'infogrupo' ➣ 'groupinfo'}_
╠❲͢͡👥͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'admins' ➣ 'dmins'}_
╠❲͢͡👥͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'enlace' ➣ 'linkgroup'}_
╠❲͢͡👥͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'inspeccionar *enlace*' ➣ 'inspect *link*'}_
╚ೋ❀❀ೋ══❲💙𝑀𝑒𝑛𝑢💙❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲🌹𝑀𝑒𝑛𝑢🌹❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal11()}_
╠══════════════━┉ • •
╠❲͢͡👑͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'verificar *nombre.edad*' ➣ 'verify *name.age*'}_
╠❲͢͡👑͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'anulareg *id de registro*' ➣ 'unreg *id registration*'}_
╠❲͢͡👑͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'idregistro' ➣ 'idregister'}_
╚ೋ❀❀ೋ══❲🌹𝑀𝑒𝑛𝑢🌹❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲🌸𝑀𝑒𝑛𝑢🌸❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal7()}_
╠══════════════━┉ • •
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'notificar *texto*' ➣ 'hidetag'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'sacar *tag*' ➣ 'kick *tag*'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'daradmin *tag*' ➣ 'promote *tag*'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'quitaradmin *tag*' ➣ 'demote *tag*'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'prohibir *tag*' ➣ 'deprive *tag*'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'desprohibir *tag*' ➣ 'undeprive *tag*'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarwelcome *texto*' ➣ 'setwelcome'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarbye *texto*' ➣ 'setbye'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'cambiardesc *texto*' ➣ 'setdesc'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'cambiarnombre *texto*' ➣ 'setname'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'cambiarpp *imagen*' ➣ 'setppgc *image*'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'nuevoenlace' ➣ 'resetlink'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'grupo abrir' ➣ 'group open'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'grupo cerrar' ➣ 'group close'}_
╠❲͢͡💝͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'invocar' ➣ 'tagall'}_
╚ೋ❀❀ೋ══❲🌸𝑀𝑒𝑛𝑢🌸❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲🏙️𝑀𝑒𝑛𝑢🏙️❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal8()}_
╠══════════════━┉ • •
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarbass' ➣ 'editbass'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarvibra' ➣ 'editvibra'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarblown' ➣ 'editblown'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editardeep' ➣ 'editdeep'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarearrape' ➣ 'editearrape'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarfast' ➣ 'editfast'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarfat' ➣ 'editfat'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarnightcore' ➣ 'editnightcore'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarrobot' ➣ 'editrobot'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarslow' ➣ 'editslow'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editarsmooth' ➣ 'editsmooth'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editartupai' ➣ 'edittupai'}_
╠❲͢͡✨͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'editaraudio8d' ➣ 'editaudio8d'}_
╚ೋ❀❀ೋ══❲🏙️𝑀𝑒𝑛𝑢🏙️❳══ೋ❀❀ೋ╝

╔ೋ❀❀ೋ══❲💜𝑀𝑒𝑛𝑢💜❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal12()}_
╠══════════════━┉ • •
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'respaldo' ➣ 'backup'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'banusuario *@tag*' ➣ 'banuser *@tag*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'desbanusuario *@tag*' ➣ 'unbanuser *@tag*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'tenerpoder' ➣ 'autoadmin'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'nuevabiobot *texto*' ➣ 'setbiobot *texto*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'nuevonombrebot *texto*' ➣ 'setbiobot *texto*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'nuevafotobot *imagen*' ➣ 'setppbot *image*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'actualizar' ➣ 'update'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'banearchat' ➣ 'banchat'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'desbanearchat' ➣ 'unbanchat'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'salir' ➣ 'leave'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'bloquear *@tag*' ➣ 'block *@tag*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'desbloquear *@tag*' ➣ 'unblock *@tag*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'obtenercodigo *nombre de archivo*' ➣ 'getplugin *filename*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'borrardatos *número*' ➣ 'deletedatauser *number*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'unete *enlace*' ➣ 'join *link*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'bcsubbot *texto*' ➣ 'bcsubbot *text*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'bcc *texto*' ➣ 'bcchats *text*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'bcgc *texto*' ➣ 'broadcastgc *text*'}_
╠❲͢͡🍰͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'bc *texto*' ➣ 'broadcastall *text*'}_
╚ೋ❀❀ೋ══❲💜𝑀𝑒𝑛𝑢💜❳══ೋ❀❀ೋ╝

*Creador:* _ego_official_Creator_
${packname}

*SER BOT DISPONIBLE*
Creator: *_Gabay_Creator_Script_*

╔ೋ❀❀ೋ══❲🏙️𝑀𝑒𝑛𝑢🏙️❳══ೋ❀❀ೋ╗
║❬♔❭➮ _${lenguajeEB.smsMenuTotal2()}_
╠══════════════━┉ • •
╠❲͢͡🗾͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'serbot' ➣ 'QRbot'}_
╠❲͢͡🗾͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'bots' ➣ 'subsbots'}_
╠❲͢͡🗾͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'pausarsb' ➣ 'pausesb'}_
╠❲͢͡🗾͢͡❳➽ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'eliminarsesion' ➣ 'delsession'}_
╚ೋ❀❀ೋ══❲🏙️𝑀𝑒𝑛𝑢🏙️❳══ೋ❀❀ೋ╝
 `.trim()
    
const media = ['./media/menus/Menu1.jpg','./media/menus/Menu2.jpg','.media/menu/Menu3.jpg']
await conn.sendFile(m.chat, media.getRandom() || img3, 'error.mp4', menu, fkontak, false, { mentions: [m.sender] })
 
} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⛔ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⛔`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|BtsMenu|btsmenu|EgoMenu|egomenu|info|comandos|2help|menu|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
