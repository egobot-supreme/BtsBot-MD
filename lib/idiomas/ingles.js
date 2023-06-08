const lenguaje = () => { return 'en' } //ENGLISH

const smsAvisoRG = () => { return `╔ೋ❀❀ೋ══❲✅❳══ೋ❀❀ೋ╗\n╟❬❤️❭꙳꙰➣ *_RESULT_*\n╚ೋ❀❀ೋ══❲✅❳══ೋ❀❀ೋ╝\n\n` }
const smsAvisoAG = () => { return `╔ೋ❀❀ೋ══❲🛡️❳══ೋ❀❀ೋ╗\n╟❬❤️❭꙳꙰➣ *_WARNING_*\n╚ೋ❀❀ೋ══❲🛡️❳══ೋ❀❀ೋ╝\n\n` }
const smsAvisoIIG = () => { return `╔ೋ❀❀ೋ══❲📝❳══ೋ❀❀ೋ╗\n╟❬❤️❭꙳꙰➣ *_INFORMATION_*\n╚ೋ❀❀ೋ══❲📝❳══ೋ❀❀ೋ╝\n\n` }
const smsAvisoFG = () => { return `╔ೋ❀❀ೋ══❲⛔❳══ೋ❀❀ೋ╗\n╟❬❤️❭꙳꙰➣ *_ERROR_*\nೋ❀❀ೋ══❲⛔❳══ೋ❀❀ೋ╝\n\n` }
const smsAvisoMG = () => { return `╔ೋ❀❀ೋ══❲🚀❳══ೋ❀❀ೋ╗\n╟❬❤️❭꙳꙰➣ *_MISUSED ACTION_*\n╚ೋ❀❀ೋ══❲🚀❳══ೋ❀❀ೋ╝\n\n` }
const smsAvisoEEG = () => { return `╔ೋ❀❀ೋ══❲📂❳══ೋ❀❀ೋ╗\n╟❬❤️❭꙳꙰➣ *_REPORT_*\n╚ೋ❀❀ೋ══❲📂❳══ೋ❀❀ೋ╝\n\n` }
const smsAvisoEG = () => { return `╔ೋ❀❀ೋ══❲🍀❳══ೋ❀❀ೋ╗\n╟❬❤️❭꙳꙰➣ *_SUCCESS_*\n╚ೋ❀❀ೋ══❲🍀❳══ೋ❀❀ೋ╝\n\n` }

const smsRowner = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND ONLY THE NUMBER OF THE BOT CAN USE._*\`\`\`` }
const smsOwner = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND ONLY MY CREATOR CAN USE IT._*\`\`\`` }
const smsMods = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND ONLY MODERATORS AND MY CREATOR CAN USE IT._*\`\`\`\`` }
const smsPremium = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND IS ONLY AVAILABLE FOR PREMIUM USERS AND MY CREATOR(A), TO GET PREMIUM BUY A PASS USING:_* #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND CAN ONLY BE USED IN GROUPS._*\`\`\`` }
const smsPrivate = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND CAN ONLY BE USED BY THE PRIVATE._*\`\`\`` }
const smsAdmin = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND IS ONLY FOR ADMINS._*\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`*_❮🍰❯ I NEED TO BE ADMIN SO YOU CAN USE THIS COMMAND._*\`\`\`` }
const smsUnreg = () => { return `\`\`\`*_❮🍰❯ YOU NEED TO BE REGISTERED TO USE THIS COMMAND, WRITE #verify TO REGISTER._*\`\`\`` }
const smsRestrict = () => { return `\`\`\`*_❮🍰❯ THIS COMMAND IS RESTRICTED BY MY CREATOR._*\`\`\`` }

//main.js
const smsWelcome = () => { return `╔ೋ❲💜❳ೋ═⟬ *@subject* ⟭═ೋ❲💜❳ೋ╗\n╟⟬🍰✨ *WELCOME* ✨🍰⟭\n╠══════════════━┉ • •\n╟❨💝❩➣ @user\n╠══════════════━┉ • •\n╟❮😊❯ *Read the group description.*\n╚ೋ❲💜❳ೋ═⟬ *_BtsBot-MD_* ⟭═ೋ❲💜❳ೋ╝\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '╔ೋ❀❀ೋ══❲🌸❳══ೋ❀❀ೋ╗\n╠▢► *@user*\n╠▢► *He was not worthy to be here✨*\n╚ೋ❀❀ೋ══❲🌸❳══ೋ❀❀ೋ╝'}
const smsSpromote = () => { return '*_❮🍰❯ @user 𝐇𝐄 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐏𝐑𝐎𝐌𝐎𝐓𝐄𝐃 𝐀𝐒 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍._ ✨💝✨*'}
const smsSdemote = () => { return '*_❮🍰❯ @user 𝐇𝐄 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐑𝐄𝐌𝐎𝐕𝐄𝐃 𝐀𝐒 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍._ 😜🌸*'}
const smsSdesc = () => { return '*❮👑❯ _𝐊𝐍𝐎𝐖 𝐓𝐇𝐄 𝐍𝐄𝐖 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 𝐎𝐅 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏._ ❮👑❯:*\n\n@desc'}
const smsSsubject = () => { return '*❮💜❯ _𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐔𝐏𝐃𝐀𝐓𝐄._ ❮💜❯*\n@subject'}
const smsSicon = () => { return '*❮💖❯ _𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏 𝐏𝐇𝐎𝐓𝐎 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐔𝐏𝐃𝐀𝐓𝐄._ ❮💖❯*'}
const smsSrevoke = () => { return '*❮✨❯ _𝐊𝐍𝐎𝐖 𝐓𝐇𝐄 𝐍𝐄𝐖 𝐋𝐈𝐍𝐊 𝐎𝐅 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏._ ❮✨❯*\n*@revoke*'}
const smsConexion = () => { return `\n╔ೋ❀Bts❀ೋ═♔═❲ ${packname} ❳═♔═ೋ❀Bta❀ೋ╗\n╟❲▢❳➛ 🌹BTS - BOT - MD, COTECTADO🌹\n╚ೋ❀Bts❀ೋ═♔═❲🍰 *_BtsBot-MD_* 🍰❳═♔═ೋ❀Bta❀ೋ╝`} 
const smsCargando = () => { return `🌹 𝐂𝐡𝐚𝐫𝐠𝐢𝐧𝐠...\n`} 
const smsCodigoQR = () => { return `\n👑 Scan the QR code and Bts - Bot - MD expires in 45 seconds 👑`}
const smsConexionOFF = () => { return `\n❮❬🌹 ERROR 🌹❭❯, NO CONNECTION, DELETE THE FOLDER ${global.authFile} AND SCAN THE QR CODE 🌹`}
const smsClearTmp = () => { return `\n┏❲🍰❳━❲💜❳┉⟬ MULTIMEDIA ⟭┉❲💜❳━❲🍰❳┓\n┣❬▢❭➤ FILES FROM THE TMP FOLDER DELETED\n┗❲💜❳━❲🍰❳┉⟬ Bts Bot MD ⟭┉❲🍰❳━❲💜❳┛`} 
const smspurgeSession = () => { return `\n┏❲🌹❳━❲👑❳┉⟬ ${global.authFile} ⟭┉❲👑❳━❲🌹❳┓\n┣❬▢❭➤ NON-ESSENTIAL SESSIONS ELIMINATED\n┗❲👑❳━❲🌹❳┉⟬ Bts Bot MD ⟭┉❲🌹❳━❲👑❳┛`} 
const smspurgeOldFiles = () => { return `\n┏❲💚❳━❲🌸❳┉⟬ FILES ⟭┉❲🌸❳━❲💚❳┓\n┣❬▢❭➤ RESIDUAL FILES DELETED\n┗❲🌸❳━❲💚❳┉⟬ Bts Bot MD ⟭┉❲💚❳━❲🌸❳┛`} 
const smspurgeSessionSB1 = () => { return `\n╔💝═❲👑❳═⟬ BtsBot ⟭═❲👑❳═💝╗\n┣❬▢❭➤ NOTHING TO DELETE \n╚💝═❲👑❳═⟬ BtsBot ⟭═❲👑❳═💝╝`} 
const smspurgeSessionSB2 = () => { return `\n╔😊═❲🌹❳═⟬ BtsBot ⟭═❲🌹❳═😊╗\n┣❬▢❭➤ NON-ESSENTIAL FILES DELETED\n╚😊═❲🌹❳═⟬ BtsBot ⟭═❲🌹❳═😊╝`} 
const smspurgeSessionSB3 = () => { return `\n╔🌸═❲⛔❳═⟬ BtsBot ⟭═❲⛔❳═🌸╗\n┣❬▢❭➤ AN ERROR OCCURRED\n╚🌸═❲⛔❳═⟬ BtsBot ⟭═❲⛔❳═🌸╝\n`} 
const smspurgeOldFiles1 = () => { return `\n┏❲💝❳━❲🍀❳┉⟬ ARCHIVE ⟭┉❲🍀❳━❲💝❳┓\n┣❬▢❭➤`} 
const smspurgeOldFiles2 = () => { return `DELETE SUCCESSFULLY\n┗❲💝❳━❲🍀❳┉⟬ Bts Bot MD ⟭┉❲🍀❳━❲💝❳┛`} 
const smspurgeOldFiles3 = () => { return `\n┏❲✨❳━❲🛡️❳┉⟬ ARCHIVE ⟭┉❲🛡️❳━❲✨❳┓\n┣❬▢❭➤`} 
const smspurgeOldFiles4 = () => { return `FAILED TO DELETE\n┗❲✨❳━❲🛡️❳┉⟬ Bts Bot MD ⟭┉❲🛡️❳━❲✨❳┛\n`} 

//Boton
const smsConMenu = () => { return `📗 MENU 📗`}

//info-creadora.js
const smsCreA = () => { return '💝 Hello ✨'}
const smsCreB = () => { return '✨ My name is'}
const smsCreC = () => { return 'Always available to help you ✨'}

//info-cuentas-oficiales.js
const smsOfc1 = () => { return '☘️✨ *OFFICIAL ACCOUNTS* ✨🍀'}
const smsOfc2 = () => { return `*► _Follow us on the Official Accounts to stay up-to-date with_ ${packname}*`}

//info-donar.js
const smsMensajeDonar = () => { return `❪🍀❫ Voluntary support is accepted through PayPal, if you want to help in another way you can donate a Number on Instagram, WhatsApp so that the repository remains valid, Thank you.\n\n❪💝❫ You can always support by following the Official Accounts and Sharing the work achieved in ${packname}`}
const smsTituloDonar = () => { return '*🍀✨ _VOLUNTARY DONATION_ ✨🍀*'}
const smsPrivadoDonar = () => { return '⚉➣ *_You can also share the following as a Show of Support_*\n*_Rate the repository with a 🌟 Thank you._*'}

//info-gruposofc.js
const smsGrupoOfc1 = () => { return '*💜 OFFICIAL GROUPS 💜*'}
const smsGrupoOfc2 = () => { return '*💝 COLLABORATION 💝*'}

//info-grupos-lista.js
const smsLisA = () => { return '*_YOU ARE IN THESE GROUPS:_*'}
const smsLisB = () => { return '*🎀➣ 𝐓𝐨𝐭𝐚𝐥 𝐆𝐫𝐨𝐮𝐩𝐬:*'}
const smsLisC = () => { return '*🥏➣ 𝐆𝐫𝐨𝐮𝐩:*'}
const smsLisD = () => { return '*📄➣ 𝐈𝐃:*'}
const smsLisE = () => { return '*👥➣ 𝐏𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐧𝐭𝐬:*'}

//info-estado.js
const smsCreApoyo = () => { return '🍀𝑺𝑼𝑷𝑷𝑶𝑹𝑻🍀'}
const smsEstado1 = () => { return '🍓𝑆𝑡𝑎𝑡𝑒🍓'}
const smsEstado2 = () => { return '𝑽𝒆𝒓𝒔𝒊𝒐𝒏'}
const smsEstado3 = () => { return '𝑼𝒔𝒆𝒓𝒔'}
const smsEstado4 = () => { return '𝑹𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝒆𝒅'}
const smsEstado5 = () => { return '𝑭𝒐𝒓𝒃𝒊𝒅𝒅𝒆𝒏 𝑪𝒉𝒂𝒕'}
const smsEstado6 = () => { return '𝑩𝒂𝒏𝒏𝒆𝒅 𝑼𝒔𝒆𝒓𝒔'}
const smsEstado7 = () => { return '🏙️𝑨𝒄𝒕𝒊𝒗𝒆 𝑫𝒖𝒓𝒊𝒏𝒈:🏙️'}

//info-ping.js
const smsVl1 = () => { return '𝐒𝐏𝐄𝐄𝐃'}
const smsVl2 = () => { return '𝐒𝐄𝐑𝐕𝐄𝐑*'}
const smsVl3 = () => { return '*🔵 𝐅𝐑𝐄𝐄 𝐑𝐀𝐌:*'}
const smsVl4 = () => { return '*💻 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌:*'}
const smsVl5 = () => { return '*📡 𝐏𝐋𝐀𝐂𝐄:*'}
const smsVl6 = () => { return '*𝐍𝐨𝐝𝐞𝐉𝐬 𝐦𝐞𝐦𝐨𝐫𝐲 𝐮𝐬𝐚𝐠𝐞*'}

//info-infobot.js
const smsBT1 = () => { return '𝑪𝑹𝑬𝑨𝑻𝑶𝑹'}
const smsBT2 = () => { return '𝑽𝑬𝑹𝑺𝑰𝑶𝑵'}
const smsBT3 = () => { return '𝑷𝑹𝑬𝑭𝑰𝑿'}
const smsBT4 = () => { return '𝑷𝑹𝑰𝑽𝑨𝑻𝑬 𝑪𝑯𝑨𝑻'}
const smsBT5 = () => { return '𝑮𝑹𝑶𝑼𝑷 𝑪𝑯𝑨𝑻'}
const smsBT6 = () => { return '𝑻𝑶𝑻𝑨𝑳 𝑪𝑯𝑨𝑻𝑺'}
const smsBT7 = () => { return '𝑨𝑪𝑻𝑰𝑽𝑰𝑻𝒀'}
const smsBT8 = () => { return '𝑼𝑺𝑬𝑹𝑺'}
const smsBT9 = () => { return '𝑨𝑪𝑻𝑰𝑽𝑬 𝑺𝑼𝑩 𝑩𝑶𝑻𝑺'}
const smsCreInfo = () => { return '🍀✨𝑩𝑻𝑺 𝑩𝑶𝑻 𝑰𝑵𝑭𝑶✨🍀'}


//info-contacto.js
const smsContacto1 = () => { return ' 𝙸 𝙰𝙼 ' + packname + ' 𝙰 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙳𝙴𝙳𝙸𝙲𝙰𝚃𝙴𝙳 𝚃𝙾 𝙷𝙴𝙻𝙿𝙸𝙽𝙶 𝚆𝙸𝚃𝙷 𝚆𝙷𝙰𝚃𝙴𝚅𝙴𝚁 𝚈𝙾𝚄 𝙰𝚂𝙺. 🎀'}
const smsContacto2 = () => { return '𝙸 𝙰𝙼 𝙾𝚆𝙽𝙴𝚁 𝙾𝙵 ' + packname + ' 𝙸𝙵 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙰𝙽𝚈 𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽𝚂 𝚈𝙾𝚄 𝙲𝙰𝙽 𝚃𝙴𝙻𝙻 𝙼𝙴. 💖'}
const smsContacto3 = () => { return '🚀 Owner'}
const smsContacto4 = () => { return '👑 Ego_Official_Creator Official Contact'}
const smsContacto5 = () => { return '🌹 ¿How can I help you?'}
const smsContacto6 = () => { return 'I do not have mail 💬'}
const smsContacto7 = () => { return '🏙️ Global'}
const smsContacto8 = () => { return 'This Account is Bot 🛡️'}

//ejemplos
const smsMalused = () => { return '*𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐊𝐄 𝐓𝐇𝐈𝐒:*\n'}
const smsMalused2 = () => { return `${lenguajeEB['smsAvisoMG']()}💖 *𝐘𝐎𝐔 𝐌𝐔𝐒𝐓 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐀𝐒 𝐈𝐍 𝐓𝐇𝐈𝐒 𝐄𝐗𝐀𝐌𝐏𝐋𝐄:*\n`}
const smsMalused3 = () => { return `${lenguajeEB['smsAvisoMG']()}💝 *𝐘𝐎𝐔 𝐌𝐔𝐒𝐓 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐎𝐑 𝐑𝐄𝐒𝐏𝐎𝐍𝐃 𝐓𝐎 𝐒𝐎𝐌𝐄𝐎𝐍𝐄'𝐒 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐋𝐈𝐊𝐄 𝐈𝐍 𝐓𝐇𝐈𝐒 𝐄𝐗𝐀𝐌𝐏𝐋𝐄:*\n`}

//Error
const smsMalError = () => { return `${lenguajeEB['smsAvisoFG']()}\`\`\`𝐀𝐍 𝐔𝐍𝐄𝐗𝐏𝐄𝐂𝐓𝐄𝐃 𝐄𝐑𝐑𝐎𝐑 𝐎𝐂𝐂𝐔𝐑𝐑𝐄𝐃.\`\`\``}
const smsMalError2 = () => { return `${lenguajeEB['smsAvisoFG']()}\`\`\`𝐀𝐍 𝐈𝐍𝐂𝐎𝐍𝐕𝐄𝐍𝐈𝐄𝐍𝐂𝐄 𝐀𝐑𝐈𝐒𝐄𝐃.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeEB['smsAvisoFG']()}\`\`\`𝐒𝐎𝐌𝐄𝐓𝐇𝐈𝐍𝐆 𝐖𝐄𝐍𝐓 𝐖𝐑𝐎𝐍𝐆, 𝐑𝐄𝐏𝐎𝐑𝐓 𝐓𝐇𝐈𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐔𝐒𝐈𝐍𝐆:\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return '𝑻𝑰𝑻𝑳𝑬 ✰'}
const smsYT2 = () => { return '𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑻𝑰𝑶𝑵 ✰'}
const smsYT3 = () => { return '𝑫𝑼𝑹𝑨𝑻𝑰𝑶𝑵 ✰'}
const smsYT4 = () => { return '𝑽𝑰𝑬𝑾𝑺 ✰'}
const smsYT5 = () => { return '𝑺𝑬𝑬 𝑶𝑵 𝒀𝑶𝑼𝑻𝑼𝑩𝑬 ✰'}
const smsYT6 = () => { return '𝑻𝒓𝒚 𝒂𝒏𝒐𝒕𝒉𝒆𝒓 𝒏𝒂𝒎𝒆 ✰'}

//descargas.js
const smsYTA1 = () => { return '✰ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐀𝐔𝐃𝐈𝐎, 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 𝐀 𝐌𝐎𝐌𝐄𝐍𝐓...'}

//descargas.js
const smsYTV1 = () => { return '✰ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎, 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 𝐀 𝐌𝐎𝐌𝐄𝐍𝐓...'}

//descargas.js
const smsYTA2 = () => { return '✰ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓, 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 𝐀 𝐌𝐎𝐌𝐄𝐍𝐓...'}

//descargas.js
const smsYTV2 = () => { return '✰ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓, 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 𝐀 𝐌𝐎𝐌𝐄𝐍𝐓...'}

//_antiviewonce.js
const smsAntiView1 = () => { return `\n🍓 \`\`\`𝑭𝒐𝒓𝒃𝒊𝒅𝒅𝒆𝒏 𝒕𝒐 𝒉𝒊𝒅𝒆 𝒗𝒊𝒅𝒆𝒐\`\`\` 🍓`} 
const smsAntiView2 = () => { return `\n💖 \`\`\`𝑭𝒐𝒓𝒃𝒊𝒅𝒅𝒆𝒏 𝒕𝒐 𝒉𝒊𝒅𝒆 𝒊𝒎𝒂𝒈𝒆\`\`\` 💖`} 

//buscadores.js
const smsOpenai1 = () => { return '*𝙼𝙰𝙺𝙴 𝙰 𝚀𝚄𝙴𝚁𝚈, 𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*'} 
const smsOpenai2 = () => { return '𝚁𝙴𝙲𝙾𝙼𝙼𝙴𝙽𝙳 𝙰 𝚃𝙾𝙿 10 𝙰𝙲𝚃𝙸𝙾𝙽 𝙼𝙾𝚅𝙸𝙴'} 
const smsOpenai3 = () => { return '𝙴𝚇𝙿𝙻𝙰𝙸𝙽 𝚆𝙷𝙰𝚃 𝙰 𝚀𝚄𝙰𝙳𝚁𝙰𝚃𝙸𝙲 𝙴𝚀𝚄𝙰𝚃𝙸𝙾𝙽 𝙸𝚂 𝙰𝙽𝙳 𝙿𝙴𝚁𝙵𝙾𝚁𝙼 𝙰 𝚂𝙸𝙼𝙿𝙻𝙴 𝙰𝙽𝙳 𝙰 𝙲𝙾𝙼𝙿𝙾𝚄𝙽𝙳 𝙴𝚇𝙰𝙼𝙿𝙻𝙴.'} 

//convertidores.js
const smsToimg = () => { return lenguajeEB.smsAvisoMG() + '*❤️ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝙰 𝙸𝙼𝙰𝙶𝙴.*'} 

//convertidores.js
const smsConURL = () => { return lenguajeEB.smsAvisoMG() + '*💜 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰𝙽 𝙸𝙼𝙰𝙶𝙴 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝙰 𝙻𝙸𝙽𝙺.*'} 
const smsConURL1 = () => { return '*𝐋𝐈𝐍𝐊*'} 
const smsConURL2 = () => { return '*𝐒𝐈𝐙𝐄*'} 
const smsConURL3 = () => { return '*𝐄𝐗𝐏𝐈𝐑𝐀𝐓𝐈𝐎𝐍*'} 
const smsConURL4 = () => { return '*𝐒𝐇𝐎𝐑𝐓 𝐋𝐈𝐍𝐊*'}
const smsConURLERR1 = () => { return 'Infinite'} 
const smsConURLERR2 = () => { return 'Unknown'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeEB.smsAvisoMG() + '*❤️ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙼𝙾𝚃𝙸𝙾𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾.*'} 
const smsConVIDEO2 = () => { return lenguajeEB.smsAvisoMG() + '*📝𝙾𝙽𝙻𝚈 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙸𝙽 𝙼𝙾𝚃𝙸𝙾𝙽 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾.📝*'} 
const smsConVIDEO3 = () => { return lenguajeEB.smsAvisoEG() + '*❮💖❯ 𝐀𝐐𝐔𝐈 𝐓𝐈𝐄𝐍𝐄𝐒 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎 ❮💖❯*\n*❲¿Bot?❳➥❮✨💜𝐁𝐭𝐬𝐁𝐨𝐭-𝐌𝐃💜✨❯*\n\n*By: _Ego_Official_Creator_*\n*wa.me/5493873687620*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeEB.smsAvisoMG() + '*❤️ 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝙶𝙸𝙵 𝚆𝙸𝚃𝙷 𝙰𝚄𝙳𝙸𝙾.*'} 
const smsConGIF2 = () => { return lenguajeEB.smsAvisoMG() + '*💬 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾.*\n\n*❮ 𝚃𝙷𝙴 𝚃𝚈𝙿𝙴 𝙾𝙵 𝙵𝙸𝙻𝙴𝚂 𝚄𝚂𝙴𝙳 𝙸𝚂 𝙽𝙾𝚃 𝙲𝙾𝚁𝚁𝙴𝙲𝚃. ❯* '} 
const smsConGIF3 = () => { return lenguajeEB.smsAvisoEG() + '*❮🎀❯ 𝐀𝐐𝐔𝐈 𝐓𝐈𝐄𝐍𝐄 𝐓𝐔 𝐆𝐈𝐅 ❮🎀❯: Abre el gif para escuchar el audio.*\n❲¿Bot?❳➥❮✨💜𝐁𝐭𝐬𝐁𝐨𝐭-𝐌𝐃💜✨❯\n\n*By: _Ego_Official_Creator_*\n*wa.me/5493873687620*'} 

//convertidores.js
const smsConVN = () => { return lenguajeEB.smsAvisoMG() + '*🍀 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝙰 𝚅𝙸𝙳𝙴𝙾 𝙾𝚁 𝙰𝚄𝙳𝙸𝙾 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚃𝙾 𝙰 𝚅𝙾𝙸𝙲𝙴 𝙽𝙾𝚃𝙴.*'} 
const smsConVN1 = () => { return lenguajeEB.smsAvisoFG() + '*⛔ 𝐒𝐎𝐌𝐄𝐓𝐇𝐈𝐍𝐆 𝐖𝐑𝐎𝐍𝐆 𝐖𝐈𝐓𝐇 𝐓𝐇𝐄 𝐕𝐈𝐃𝐄𝐎, 𝐓𝐑𝐘 𝐀𝐆𝐀𝐈𝐍.*'} 
const smsConVN2 = () => { return lenguajeEB.smsAvisoFG() + '*⛔ 𝐒𝐎𝐌𝐄𝐓𝐇𝐈𝐍𝐆 𝐖𝐑𝐎𝐍𝐆 𝐖𝐈𝐓𝐇 𝐓𝐇𝐄 𝐀𝐔𝐃𝐈𝐎, 𝐓𝐑𝐘 𝐀𝐆𝐀𝐈𝐍.*'} 
const smsConVN3 = () => { return lenguajeEB.smsAvisoFG() + '*❤️ 𝚂𝙾𝙼𝙴𝚃𝙷𝙸𝙽𝙶 𝚆𝙴𝙽𝚃 𝚆𝚁𝙾𝙽𝙶 𝚆𝙷𝙴𝙽 𝚃𝚁𝚈𝙸𝙽𝙶 𝚃𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝚈𝙾𝚄𝚁 𝙰𝚄𝙳𝙸𝙾 𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 𝙼𝙴𝙼𝙾*'}
const smsConVN4 = () => { return lenguajeEB.smsAvisoFG() + '*❤️ SOMETHING WENT WRONG WHEN TRYING TO CONVERT YOUR VIDEO TO VOICE MEMO*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeEB.smsAvisoMG() + '*🏙️ 𝐑𝐄𝐏𝐋𝐘 𝐓𝐎 𝐀 𝐓𝐄𝐗𝐓 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐓𝐘𝐏𝐄 𝐓𝐇𝐄 𝐂𝐎𝐃𝐄 𝐀𝐍𝐃 𝐓𝐄𝐗𝐓 𝐓𝐎 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐓𝐎 𝐀𝐔𝐃𝐈𝐎, 𝐄𝐗𝐀𝐌𝐏𝐋𝐄:*\n'}
const smsTradc2 = () => { return ' (code) (text)\n'} 
const smsTradc3 = () => { return lenguajeEB.lenguaje() + '✨ฅ^•ﻌ•^ฅ✨ *𝚃𝚑𝚒𝚜 𝚝𝚎𝚡𝚝 𝚠𝚒𝚕𝚕 𝚋𝚎 𝚊𝚞𝚍𝚒𝚘*\n\n'}
const smsTradc4 = () => { return '*💎 𝚈𝙾𝚄 𝙲𝙰𝙽 𝙶𝙴𝚃 𝚃𝙷𝙴 𝙲𝙾𝙳𝙴 𝙾𝙵 𝚃𝙷𝙴 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴𝚂 𝚂𝚄𝙿𝙿𝙾𝚁𝚃𝙴𝙳 𝙰𝚃:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*💜 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐...*'}

//descargas.js
const smsMediaFr = () => { return '⚉➤ *_GREATER THAN 150 MG IT IS POSSIBLE NOT TO BE SENT_*'}

//grupos.js
const smsGI1 = () => { return '*✰𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍✰*'}
const smsGI2 = () => { return '*𝙶𝚁𝙾𝚄𝙿 𝙸𝙳 ✰*'}
const smsGI3 = () => { return '*𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴 ✰*'}
const smsGI4 = () => { return '*𝙶𝚁𝙾𝚄𝙿 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 ✰*'}
const smsGI5 = () => { return '*𝙽𝙾 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 ✰*'}
const smsGI6 = () => { return '*𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝚄𝚂𝙴𝚁𝚂 ✰*'}
const smsGI7 = () => { return '*𝑼𝒔𝒆𝒓𝒔*'}
const smsGI8 = () => { return '*𝙲𝚁𝙴𝙰𝚃𝙾𝚁 𝙾𝙵 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿 ✰*'}
const smsGI9 = () => { return '*𝙶𝚁𝙾𝚄𝙿 𝙰𝙳𝙼𝙸𝙽 ✰*'}

//grupos.js
const smsAddB3 = () => { return `*𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝚃𝙸𝙾𝙽 𝙵𝙾𝚁 𝙰𝙳𝙼𝙸𝙽𝚂*`}
const smsAddB4 = () => { return `*𝙰𝙳𝙼𝙸𝙽 𝙿𝚁𝙴𝚂𝙴𝙽𝙲𝙴*`}
const smsAddB5 = () => { return `*𝙼𝙴𝚂𝚂𝙰𝙶𝙴:*`}
const smsAddB6 = () => { return `𝐈 𝐑𝐄𝐐𝐔𝐄𝐒𝐓 𝐓𝐇𝐄 𝐀𝐃𝐌𝐈𝐍𝐒 𝐏𝐋𝐄𝐀𝐒𝐄.`}

//grupos-admins.js
const smsDemott = () => { return `*𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸𝚂 𝙸𝙽𝚅𝙰𝙻𝙸𝙳, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚂𝙾𝙼𝙴𝙾𝙽𝙴'𝚂 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙾𝚁 𝚄𝚂𝙴 𝙰𝚂 𝙸𝙽 𝚃𝙷𝙸𝚂 𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n`}
const smsDemott2 = () => { return '*𝐍𝐨𝐰 𝐡𝐚𝐬 𝐩𝐨𝐰𝐞𝐫 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 ❤️✨*'}
const smsDemott3 = () => { return '*𝐍𝐨 𝐥𝐨𝐧𝐠𝐞𝐫 𝐡𝐚𝐬 𝐩𝐨𝐰𝐞𝐫 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 🖤✨*'}

//grupos-admins.js
const smsSetW = () => { return `${lenguajeEB['smsAvisoEG']()}*💖✨ 𝐆𝐫𝐨𝐮𝐩 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐞𝐭 𝐮𝐩. ✨💖*`}
const smsSetW2 = () => { return `${lenguajeEB['smsAvisoIIG']()}❬💝❭➤ *_✨𝐖𝐑𝐈𝐓𝐄 𝐓𝐇𝐄 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐌𝐄𝐒𝐒𝐀𝐆𝐄✨_*\n❬👑❭➤ *_𝙾𝙿𝚃𝙸𝙾𝙽𝙰𝙻 𝚈𝙾𝚄 𝙲𝙰𝙽 𝚄𝚂𝙴 𝚆𝙷𝙰𝚃 𝙸𝚂 𝚆𝙸𝚃𝙷 "@" 𝚃𝙾 𝙰𝙳𝙳 𝙼𝙾𝚁𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽:_*\n\n*❬👤❭➤ @user (𝙼𝙴𝙽𝚃𝙸𝙾𝙽 𝚃𝙾 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁)*\n*❬🥏❭➤ @subject (𝙶𝚁𝙾𝚄𝙿 𝙽𝙰𝙼𝙴)*\n*❬🌹❭➤ @desc (𝙶𝚁𝙾𝚄𝙿 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽)*\n\n❬💘❭➤ *𝚁𝙴𝙼𝙴𝙼𝙱𝙴𝚁 𝚃𝙷𝙰𝚃 𝚃𝙷𝙴 "@" 𝙰𝚁𝙴 𝙾𝙿𝚃𝙸𝙾𝙽𝙰𝙻.*`}

//grupos-admins.js
const smsSetB = () => { return `${lenguajeEB['smsAvisoEG']()}*🏙️✨ 𝐓𝐡𝐞 𝐟𝐚𝐫𝐞𝐰𝐞𝐥𝐥 𝐨𝐟 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐞𝐝. ✨🏙️*`}
const smsSetB2 = () => { return `${lenguajeEB['smsAvisoIIG']()}❬🍓❭➤ *_✨𝐖𝐑𝐈𝐓𝐄 𝐓𝐇𝐄 𝐅𝐀𝐑𝐄𝐖𝐄𝐋𝐋 𝐌𝐄𝐒𝐒𝐀𝐆𝐄✨_*\n❬📗❭➤ *_𝙾𝙿𝚃𝙸𝙾𝙽𝙰𝙻 𝚈𝙾𝚄 𝙲𝙰𝙽 𝚄𝚂𝙴 𝚆𝙷𝙰𝚃 𝙸𝚂 𝚆𝙸𝚃𝙷 "@" 𝚃𝙾 𝙰𝙳𝙳 𝙼𝙾𝚁𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽:_*\n\n*❬🍰❭➤ @user (𝙼𝙴𝙽𝚃𝙸𝙾𝙽 𝚃𝙾 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁)*\n\n❬💘❭➤ *𝚁𝙴𝙼𝙴𝙼𝙱𝙴𝚁 𝚃𝙷𝙰𝚃 𝚃𝙷𝙴 "@" 𝙸𝚂 𝙾𝙿𝚃𝙸𝙾𝙽𝙰𝙻.*`}

//grupos-admins.js
const smsDest = () => { return `${lenguajeEB['smsAvisoEG']()}*❬☕❭➤ 𝐆𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐞𝐝. ✨*`}

//grupos-admins.js
const smsNam1 = () => { return `${lenguajeEB['smsAvisoEG']()}*❬🍰❭➤ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐧𝐚𝐦𝐞 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐞𝐭. ✨*`}
const smsNam2 = () => { return `${lenguajeEB['smsAvisoMG']()}*❬🛡️❭➤ 𝐖𝐑𝐈𝐓𝐄 𝐓𝐇𝐄 𝐍𝐄𝐖 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄*`}
const smsNam3 = () => { return `${lenguajeEB['smsAvisoFG']()}*❬📄 𝙸𝙽𝙵𝙾 📄❭➤ 𝐓𝐡𝐞 𝐧𝐚𝐦𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐦𝐮𝐬𝐭 𝐧𝐨𝐭 𝐡𝐚𝐯𝐞 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 100, 50, 20 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐬.*`}

//grupos-admins.js
const smsGrupoPP = () => { return `${lenguajeEB['smsAvisoMG']()}*🌹 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰𝙽 𝙿𝙸𝙲𝚃𝚄𝚁𝙴 𝚃𝙾 𝙲𝙷𝙰𝙽𝙶𝙴 𝚃𝙷𝙴 𝙶𝚁𝙾𝚄𝙿 𝙿𝙷𝙾𝚃𝙾. ✨*`}
const smsGrupoPP2 = () => { return `${lenguajeEB['smsAvisoEG']()}*❬🎀❭➤ 𝑻𝒉𝒆 𝒊𝒎𝒂𝒈𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒈𝒓𝒐𝒖𝒑 𝒘𝒂𝒔 𝒖𝒑𝒅𝒂𝒕𝒆𝒅. ✨*`}

//grupos-admins.js
const smsRestGp = () => { return `${lenguajeEB['smsAvisoEG']()}*❬👑❭➤ 𝑻𝑯𝑬 𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲 𝑯𝑨𝑺 𝑩𝑬𝑬𝑵 𝑹𝑬𝑺𝑬𝑻𝑻𝑬𝑫.*`}

//grupos-admins.js
const smskick1 = () => { return `${lenguajeEB['smsAvisoAG']()}*❬💘❭➤ 𝑻𝑨𝑮 𝑻𝑯𝑬 𝑷𝑬𝑹𝑺𝑶𝑵 𝑶𝑹 𝑹𝑬𝑷𝑳𝒀 𝑻𝑶 𝑻𝑯𝑬 𝑴𝑬𝑺𝑺𝑨𝑮𝑬 𝑶𝑭 𝑻𝑯𝑬 𝑷𝑬𝑹𝑺𝑶𝑵 𝒀𝑶𝑼 𝑾𝑨𝑵𝑻 𝑻𝑶 𝑹𝑬𝑴𝑶𝑽𝑬*\n\n*𝑬𝑿𝑨𝑴𝑷𝑳𝑬: `}
const smskick2 = () => { return `💅🏻 𝑫𝒆𝒍𝒆𝒕𝒆𝒅 ✨`}
const smskick3 = () => { return `👑 _I can't delete the group creator_ 👑`}
const smskick4 = () => { return `❬☕❭➤ not in this group`}

//grupos-admins.js
const smsGrupoOpen = () => { return `${lenguajeEB['smsAvisoEG']()}*🌹👑 EVERYONE CAN WRITE NOW 👑🌹*`}
const smsGrupoClose = () => { return `${lenguajeEB['smsAvisoEG']()}*❬🛡️❭➤ 𝙲𝙻𝙾𝚂𝙴𝙳 𝙶𝚁𝙾𝚄𝙿, 𝙾𝙽𝙻𝚈 𝙰𝙳𝙼𝙸𝙽𝚂 𝙲𝙰𝙽 𝚆𝚁𝙸𝚃𝙴. ✨*`}

//grupo-tagall.js
const smstagaa = () => { return `*┏⚊⚊⚊❲💎❳⚊⚊⚊✬❲🎀❳✬⚊⚊⚊❲💎❳⚊⚊⚊┓*\n*┠❲💝❳┉◊◊┉⟬ Summoning the group ⟭┉◊◊┉❲💝❳*\n*┗⚊⚊⚊❲💎❳⚊⚊⚊✬❲🎀❳✬⚊⚊⚊❲💎❳⚊⚊⚊┛*`}

//grupos.js
const smsInsGC1 = () => { return `*𝗜𝗗 💘*`}
const smsInsGC2 = () => { return `*𝗡𝗔𝗠𝗘 ✨*`}
const smsInsGC3 = () => { return `*𝗖𝗥𝗘𝗔𝗧𝗘𝗗 💘*`}
const smsInsGC4 = () => { return `*𝗠𝗔𝗜𝗡 𝗔𝗗𝗠𝗜𝗡 ✨*`}
const smsInsGC5 = () => { return `*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡 💘*`}

//propietario(a.js
const smsResP1 = () => { return `_*✨💜 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐑𝐞𝐬𝐩𝐚𝐥𝐝𝐨....💜✨*_`}
const smsResP2 = (date) => { return `*🚀 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄:* ${date}`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeEB['smsAvisoMG']()}*💝 𝚃𝙰𝙶 𝚂𝙾𝙼𝙴𝙾𝙽𝙴 𝙾𝚁 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁'𝚂 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙾𝚁 𝚆𝚁𝙸𝚃𝙴 𝚃𝙷𝙸 𝙽𝚄𝙼𝙱𝙴𝚁 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙱𝙰𝙽  𝙵𝚁𝙾𝙼 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂:*\n\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command} @${bot}*`}
const smsPropban2 = (bot) => { return `${lenguajeEB['smsAvisoFG']()}*😂 @${bot} 𝙲𝙰𝙽𝙽𝙾𝚃 𝙱𝙴 𝙱𝙰𝙽𝙽𝙴𝙳 𝚆𝙸𝚃𝙷 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳.*`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeEB.smsAvisoIIG()}*𝐈 𝐂𝐀𝐍'𝐓 𝐁𝐀𝐍 𝐓𝐇𝐄 𝐎𝐖𝐍𝐄𝐑 @${ownerNumber} 𝐎𝐅 ${packname} 0_0*`}
const smsPropban4 = (number) => { return `${lenguajeEB.smsAvisoIIG()}*🌹 𝐈𝐓 𝐈𝐒 𝐍𝐎𝐓 𝐍𝐄𝐂𝐄𝐒𝐒𝐀𝐑𝐘 𝐓𝐎 𝐁𝐀𝐍 𝐀𝐆𝐀𝐈𝐍 @${number} 𝐘𝐄𝐒 𝐈𝐓 𝐀𝐋𝐑𝐄𝐀𝐃𝐘 𝐈𝐒*`}
const smsPropban5 = () => { return `${lenguajeEB['smsAvisoEG']()}*✅ 𝐔𝐒𝐄𝐑 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐁𝐀𝐍𝐍𝐄𝐃.*`}
const smsPropban6 = (number, usr) => { return `${lenguajeEB.smsAvisoAG()}*@${number} 𝐘𝐎𝐘 𝐀𝐑𝐄 𝐁𝐀𝐍𝐍𝐄𝐃 𝐁𝐘 @${usr} 𝐘𝐎𝐔 𝐂𝐀𝐍𝐍𝐎𝐓 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐔𝐍𝐓𝐈𝐋 𝐒𝐎𝐌𝐄𝐎𝐍𝐄 𝐑𝐄𝐕𝐄𝐑𝐒𝐄𝐒 𝐓𝐇𝐄 𝐁𝐀𝐍* 😏🍷`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeEB['smsAvisoFG']()}*𝐀𝐍 𝐄𝐑𝐑𝐎𝐑 𝐂𝐀𝐌𝐄 𝐔𝐏, 𝐈𝐓 𝐌𝐀𝐘 𝐁𝐄 𝐓𝐇𝐀𝐓 𝐓𝐇𝐄 𝐔𝐒𝐄𝐑 𝐈𝐒 𝐍𝐎𝐓 𝐈𝐍 𝐌𝐘 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐓𝐑𝐘 𝐓𝐎 𝐖𝐑𝐈𝐓𝐄: ${usedPrefix + command} ${number}*\n\`\`\`✨ 𝐈𝐅 𝐓𝐇𝐄 𝐄𝐑𝐑𝐎𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒 𝐑𝐄𝐏𝐎𝐑𝐓 𝐓𝐇𝐈𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃. ✨\`\`\``}

//owner-unbanuser.js
const smsPropdesban1 = (usedPrefix, command, bot) => { return `${lenguajeEB['smsAvisoMG']()}*👑 𝚃𝙰𝙶 𝚂𝙾𝙼𝙴𝙾𝙽𝙴 𝙾𝚁 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝚄𝚂𝙴𝚁'𝚂 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙾𝚁 𝚆𝚁𝙸𝚃𝙴 𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝚄𝙽𝙱𝙰𝙽 𝙵𝚁𝙾𝙼 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*\n\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command} @${bot}*`}
const smsPropdesban2 = (number) => { return `${lenguajeEB.smsAvisoIIG()}*🍷 𝐍𝐎 𝐍𝐄𝐄𝐃 𝐓𝐎 𝐔𝐍𝐁𝐀𝐍 𝐀𝐆𝐀𝐈𝐍 @${number} 𝐘𝐄𝐒 𝐈𝐓 𝐀𝐋𝐑𝐄𝐀𝐃𝐘 𝐈𝐒*`}
const smsPropdesban3 = () => { return `${lenguajeEB['smsAvisoEG']()}*✅ 𝐔𝐒𝐄𝐑 𝐔𝐍𝐁𝐀𝐍𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘.*`}
const smsPropdesban4 = (number, usr) => { return `${lenguajeEB.smsAvisoAG()}*@${number} 𝐘𝐎𝐔 𝐀𝐑𝐄 𝐔𝐍𝐁𝐀𝐍𝐄𝐃 𝐁𝐘 @${usr} 𝐘𝐎𝐔 𝐂𝐀𝐍 𝐍𝐎𝐖 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒✨.*`}
const smsPropdesban5 = (usedPrefix, command, number) => { return `${lenguajeEB['smsAvisoFG']()}*𝐀𝐍 𝐄𝐑𝐑𝐎𝐑 𝐂𝐀𝐌𝐄 𝐔𝐏, 𝐈𝐓 𝐌𝐀𝐘 𝐁𝐄 𝐓𝐇𝐀𝐓 𝐓𝐇𝐄 𝐔𝐒𝐄𝐑 𝐈𝐒 𝐍𝐎𝐓 𝐈𝐍 𝐌𝐘 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐓𝐑𝐘 𝐓𝐎 𝐖𝐑𝐈𝐓𝐄: ${usedPrefix + command} ${number}*\n\`\`\`✨ 𝐈𝐅 𝐓𝐇𝐄 𝐄𝐑𝐑𝐎𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐄𝐒 𝐑𝐄𝐏𝐎𝐑𝐓 𝐓𝐇𝐈𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃. ✨\`\`\``}

//propietario(a).js
const smsAutoAdmin1 = () => { return '*👑 𝐘𝐎𝐔 𝐀𝐑𝐄 𝐀𝐋𝐑𝐄𝐀𝐃𝐘 𝐀𝐃𝐌𝐈𝐍 :0 🌹*'}
const smsAutoAdmin2 = () => { return `*⛔ 𝐈 𝐂𝐎𝐔𝐋𝐃𝐍'𝐓 𝐌𝐀𝐊𝐄 𝐈𝐓 𝐀𝐃𝐌𝐈𝐍 :c*`}

//owner-unbanchat.js
const smsUnbanCH1 = () => { return lenguajeEB['smsAvisoFG']() + '📄 *𝚃𝙷𝙸𝚂 𝙲𝙷𝙰𝚃 𝙸𝚂 𝙽𝙾𝚃 𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁𝙴𝙳 𝙸𝙽 𝚃𝙷𝙴 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴.*'}
const smsUnbanCH2 = () => { return lenguajeEB.smsAvisoAG() + '🛡️ *𝚃𝙷𝙸𝚂 𝙲𝙷𝙰𝚃 𝙸𝚂 𝙽𝙾𝚃 𝙱𝙰𝙽𝙽𝙴𝙳.*'}
const smsUnbanCH3 = () => { return lenguajeEB['smsAvisoEG']() + '🚀 *𝚃𝙷𝙸𝚂 𝙲𝙷𝙰𝚃 𝚆𝙰𝚂 𝚄𝙽𝙱𝙰𝙽𝙴𝙳, 𝚈𝙾𝚄 𝙲𝙰𝙽 𝙽𝙾𝚆 𝚄𝚂𝙴 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂.*'}

//propietario(a).js
const smsBioEd1 = () => { return `*🌹 𝑷𝑳𝑬𝑨𝑺𝑬 𝑾𝑹𝑰𝑻𝑬 𝑻𝑯𝑬 𝑻𝑬𝑿𝑻 𝒀𝑶𝑼 𝑾𝑨𝑵𝑻 𝑻𝑶 𝑩𝑬 𝑫𝑰𝑺𝑷𝑳𝑨𝒀𝑬𝑫 𝑰𝑵 𝑻𝑯𝑬 𝑩𝑰𝑶𝑮𝑹𝑨𝑷𝑯𝒀 𝑶𝑭:* ${packname}`}
const smsBioEd2 = () => { return `*✨ 𝑻𝑯𝑬 𝑩𝑰𝑶𝑮𝑹𝑨𝑷𝑯𝒀 𝑰𝑺 𝑽𝑬𝑹𝒀 𝑳𝑶𝑵𝑮, 𝑺𝑼𝑴𝑴𝑨𝑹𝑰𝒁𝑬 𝑻𝑯𝑬 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 𝑷𝑳𝑬𝑨𝑺𝑬.*`}
const smsBioEd3 = () => { return '```✅ 𝑩𝑶𝑻 𝑩𝑰𝑶 𝑰𝑵𝑭𝑶 𝑪𝑯𝑨𝑵𝑮𝑬𝑫 𝑺𝑼𝑪𝑪𝑬𝑺𝑺𝑭𝑼𝑳𝑳𝒀 ✅```'}

//propietario(a).js
const smsNameEd1 = () => { return `*🍰 𝑾𝑹𝑰𝑻𝑬 𝑻𝑯𝑬 𝑻𝑬𝑿𝑻 𝒀𝑶𝑼 𝑾𝑨𝑵𝑻 𝑻𝑶 𝑩𝑬 𝑫𝑰𝑺𝑷𝑳𝑨𝒀𝑬𝑫 𝑨𝑺 𝑼𝑺𝑬𝑹𝑵𝑨𝑴𝑬 𝑰𝑵:* ${packname}`}
const smsNameEd2 = () => { return `*💖 𝑻𝑯𝑬 𝑵𝑨𝑴𝑬 𝑰𝑺 𝑻𝑶𝑶 𝑳𝑶𝑵𝑮, 𝑺𝑼𝑴𝑴𝑨𝑹𝑰𝒁𝑬 𝑻𝑯𝑬 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑻𝑰𝑶𝑵 𝑷𝑳𝑬𝑨𝑺𝑬.*`}
const smsNameEd3 = () => { return '```✅ 𝑩𝑶𝑻 𝑼𝑺𝑬𝑹𝑵𝑨𝑴𝑬 𝑪𝑯𝑨𝑵𝑮𝑬𝑫 𝑺𝑼𝑪𝑪𝑬𝑺𝑺𝑭𝑼𝑳𝑳𝒀 ✅```'}

//propietario(a).js
const smsFotoEd1 = (usedPrefix, command) => { return `*𝑹𝑬𝑺𝑷𝑶𝑵𝑫 𝑻𝑶 𝑨𝑵 𝑰𝑴𝑨𝑮𝑬 𝑼𝑺𝑰𝑵𝑮 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫: ${usedPrefix + command} 𝑻𝑶 𝑼𝑷𝑫𝑨𝑻𝑬 𝑻𝑯𝑬 𝑩𝑶𝑻 𝑷𝑹𝑶𝑭𝑰𝑳𝑬 𝑷𝑯𝑶𝑻𝑶.*`}
const smsFotoEd2 = () => { return '```✅ 𝑺𝑼𝑪𝑪𝑬𝑺𝑺𝑭𝑼𝑳𝑳𝒀 𝑪𝑯𝑨𝑵𝑮𝑬𝑫 𝑩𝑶𝑻 𝑷𝑹𝑶𝑭𝑰𝑳𝑬 𝑷𝑯𝑶𝑻𝑶 ✅```'}
const smsFotoEd3 = (usedPrefix, command) => { return `*🍰 𝑹𝑬𝑴𝑬𝑴𝑩𝑬𝑹 𝑻𝑶 𝑹𝑬𝑺𝑷𝑶𝑵𝑫 𝑻𝑶 𝑨𝑵 𝑰𝑴𝑨𝑮𝑬 𝑼𝑺𝑰𝑵𝑮 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫: ${usedPrefix + command}*`}

//propietario(a).js
const smsBanChE = () => { return '💖 *𝑻𝑯𝑰𝑺 𝑪𝑯𝑨𝑻 𝑾𝑨𝑺 𝑩𝑨𝑵𝑵𝑬𝑫, 𝒀𝑶𝑼 𝑾𝑰𝑳𝑳 𝑵𝑶𝑻 𝑩𝑬 𝑨𝑩𝑳𝑬 𝑻𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫𝑺 𝑼𝑵𝑻𝑰𝑳 𝒀𝑶𝑼 𝑼𝑵𝑩𝑨𝑵 𝑻𝑯𝑬 𝑪𝑯𝑨𝑻.*'}

//propietario(a).js
const smsBlockUn1 = (usedPrefix, command, toUser) => { return lenguajeEB.smsMalused2() + `${usedPrefix + command} ${toUser}`}
const smsBlockUn2 = (comd, ownerNumber) => { return lenguajeEB.smsAvisoMG() + `*𝑪𝑨𝑵'𝑻 ${comd} 𝑻𝑶 𝑻𝑯𝑬 𝑶𝑾𝑵𝑬𝑹 @${ownerNumber}*`}
const smsBlockUn3 = (comd, useB) => { return `*𝑰𝑻 𝑯𝑨𝑺 𝑩𝑬𝑬𝑵 ${comd} 𝑻𝑶 ${useB} 𝑾𝑰𝑻𝑯 𝑺𝑼𝑪𝑪𝑬𝑺𝑺 ✨*`}

//propietario(a).js
const smsRestarU1 = () => { return lenguajeEB['smsAvisoMG']() + '*𝐋𝐀𝐁𝐄𝐋 𝐓𝐇𝐄 𝐔𝐒𝐄𝐑, 𝐖𝐑𝐈𝐓𝐄 𝐓𝐇𝐄𝐈𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 𝐎𝐑 𝐑𝐄𝐒𝐏𝐎𝐍𝐃 𝐓𝐎 𝐓𝐇𝐄 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐓𝐎 𝐑𝐄𝐒𝐓𝐀𝐑𝐓 𝐃𝐀𝐓𝐀.*'}
const smsRestarU2 = () => { return lenguajeEB['smsAvisoFG']() + '*𝚃𝙷𝙴 𝙽𝚄𝙼𝙱𝙴𝚁 𝚈𝙾𝚄 𝙴𝙽𝚃𝙴𝚁𝙴𝙳 𝙸𝚂 𝙸𝙽𝚅𝙰𝙻𝙸𝙳 𝚃𝙾 𝚁𝙴𝚂𝙴𝚃 𝚃𝙷𝙴 𝙳𝙰𝚃𝙰.*'}
const smsRestarU3 = (number) => { return lenguajeEB['smsAvisoEG']() + `*𝚁𝙴𝚂𝙴𝚃𝚂 𝚃𝙾 @${number} 𝙵𝚁𝙾𝙼 𝚃𝙷𝙴 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴.*`}

//propietario(a).js
const smsJoin1 = (usedPrefix, command) => { return lenguajeEB['smsAvisoMG']() + `*🍓 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙻𝙸𝙽𝙺 𝙾𝙵 𝙰 𝙶𝚁𝙾𝚄𝙿*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeEB['smsAvisoEG']() + `${packname}\n*HE HAS JOINED THE GROUP ✨👑*`}

//info.js
const smsReportEB1 = (usedPrefix, command) => { return lenguajeEB['smsAvisoMG']() + `*💖 𝚆𝚁𝙸𝚃𝙴 𝙰 𝚁𝙴𝙿𝙾𝚁𝚃*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n\n*${usedPrefix + command}* _The command ${usedPrefix}play it does not work._`}
const smsReportEB2 = () => { return lenguajeEB['smsAvisoFG']() + `🍰 *𝙼𝙸𝙽𝙸𝙼𝚄𝙼 100 𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝚂 𝚃𝙾 𝙼𝙰𝙺𝙴 𝚃𝙷𝙴 𝚁𝙴𝙿𝙾𝚁𝚃.*`}
const smsReportEB3 = () => { return lenguajeEB['smsAvisoFG']() + `🛡️ *𝙼𝙰𝚇𝙸𝙼𝚄𝙼 1000 𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝚂 𝚃𝙾 𝙼𝙰𝙺𝙴 𝚃𝙷𝙴 𝚁𝙴𝙿𝙾𝚁𝚃.*`}
const smsReportEB4 = (urs, text) => { return `
╔ೋ❀🎀❀ೋ═❲🏙️❳═ೋ❀🎀❀ೋ╗
║⪧✿⊰👑🌹\`\`𝐑𝐄𝐏𝐎𝐑𝐓\`\`🌹👑
╚ೋ❀🎀❀ೋ═❲🏙️❳═ೋ❀🎀❀ೋ╝

⚇❬💘❭꙳꙰➣ *Number:*
*♚➢ Wa.me/${urs}*

⚇═══◊═══◊═══◊═══⚇

⚇❬😏❭꙳꙰➣ *User:*
*♚➢ @${urs}*

⚇═══◊═══◊═══◊═══⚇

⚇❬💬❭꙳꙰➣ *Message:*
*♚➢ ${text}*
╔ೋ❀🎀❀ೋ═❲🏙️❳═ೋ❀🎀❀ೋ╗
║⪧✿⊰👑🌹\`\`𝐑𝐄𝐏𝐎𝐑𝐓\`\`🌹👑
╚ೋ❀🎀❀ೋ═❲🏙️❳═ೋ❀🎀❀ೋ╝`.trim()}
const smsReportEB5 = () => { return lenguajeEB['smsAvisoEG']() + `*𝚃𝙷𝙴 𝚁𝙴𝙿𝙾𝚁𝚃 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝚂𝙴𝙽𝚃 𝚃𝙾 𝚃𝙷𝙴 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁𝚂, 𝙸𝙵 𝙽𝙴𝙲𝙴𝚂𝚂𝙰𝚁𝚈 𝚈𝙾𝚄 𝚆𝙸𝙻𝙻 𝙷𝙰𝚅𝙴 𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙴.*`}

//buscadores.js
const smsGit1 = (usedPrefix, command) => { return `*𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝙾𝙵 𝙰 𝙶𝙸𝚃𝙷𝚄𝙱 𝚄𝚂𝙴𝚁*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴*\n\n*${usedPrefix + command}* egobot-supreme`}
const smsGit2 = () => { return '*_🎀 SEARCHING...🎀_*'}
const smsGit3 = () => { return '❨👤❩➭ *𝑼𝒔𝒆𝒓𝒏𝒂𝒎𝒆:*'}
const smsGit4 = () => { return '❨📝❩➭ *𝑩𝒊𝒐:*'}
const smsGit5 = () => { return '❨🚀❩➭ *𝑪𝒐𝒎𝒑𝒂𝒏𝒚:*'}
const smsGit6 = () => { return '❨🍰❩➭ *𝑴𝒂𝒊𝒍:*'}
const smsGit7 = () => { return '❨📄❩➭ *𝑩𝒍𝒐𝒈𝒈𝒊𝒏𝒈*'}
const smsGit8 = () => { return '❨🏙️❩➭ *𝑷𝒖𝒃𝒍𝒊𝒄 𝑹𝒆𝒑𝒐𝒔𝒊𝒕𝒐𝒓𝒊𝒆𝒔:*'}
const smsGit9 = () => { return '❨🌆❩➭ *𝑷𝒖𝒃𝒍𝒊𝒄 𝑬𝒔𝒔𝒆𝒏𝒕𝒊𝒂𝒍𝒔:*'}
const smsGit10 = () => { return '❨👥❩➭ *𝑭𝒐𝒍𝒍𝒐𝒘𝒆𝒓𝒔:*'}
const smsGit11 = () => { return '❨🎀❩➭ *𝑭𝒐𝒍𝒍𝒐𝒘𝒊𝒏𝒈:*'}
const smsGit12 = () => { return '❨💝❩➭ *𝑳𝒐𝒄𝒂𝒕𝒊𝒐𝒏:*'}
const smsGit13 = () => { return '❨👑❩➭ *𝑻𝒚𝒑𝒆:*'}
const smsGit14 = () => { return '⛔ 𝙽𝚘𝚝 𝚏𝚘𝚞𝚗𝚍 ⛔'}

//jadibot-serbot.js
const smsIniJadi = () => { return `*• ✾ •°•⟆💘⟅•°• ✾⦃ ${global.packname} ⦄✾ •°•💘•°• ✾ •*\n\n*➤ ${global.packname} ➤ _${global.vs}_*\n*➤ 𝙴𝙶𝙾𝙱𝙾𝚃 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 ➤ _${global.vsJB}_*\n\n✅ *_𝙵𝚄𝙽𝙲𝚃𝙸𝙾𝙽 𝙱𝙴 𝚂𝚄𝙱𝙱𝙾𝚃_* ✅\n\n*👑 𝚆𝙸𝚃𝙷 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝙲𝙴𝙻𝙻 𝙿𝙷𝙾𝙽𝙴 𝙾𝚁 𝙿𝙲, 𝚂𝙲𝙰𝙽 𝚃𝙷𝙸𝚂 𝚀𝙴 𝚃𝙾 𝙱𝙴𝙲𝙾𝙼𝙴 𝙰 𝚂𝚄𝙱 𝙱𝙾𝚃*\n\n🛡️ 𝙶𝙾 to 𝚃𝙷𝙴 𝚃𝙷𝚁𝙴𝙴 𝙳𝙾𝚃𝚂 𝙸𝙽 𝚃𝙷𝙴 𝚄𝙿𝙿𝙴𝚁 𝚁𝙸𝙶𝙷𝚃 𝙲𝙾𝚁𝙽𝙴𝚁*\n*🛡️ 𝙶𝙾 𝚃𝙾 𝙿𝙰𝙸𝚁𝙴𝙳 𝙳𝙴𝚅𝙸𝙲𝙴𝚂 𝙾𝙿𝚃𝙸𝙾𝙽*\n🛡️ 𝚂𝙲𝙰𝙽 𝚃𝙷𝙸𝚂 𝚀𝚁 𝙲𝙾𝙳𝙴 𝚃𝙾 𝙻𝙾𝙶𝙸𝙽*\n\n⚠️ *¡𝚃𝙷𝙸𝚂 𝚀𝚁 𝙲𝙾𝙳𝙴 𝙴𝚇𝙿𝙸𝚁𝙴𝚂 𝙸𝙽 45 𝚂𝙴𝙲𝙾𝙽𝙳𝚂!*`}
const smsSoloOwnerJB = () => { return `${lenguajeEB['smsAvisoAG']()}*🛡️ 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙸𝚂 𝙳𝙸𝚂𝙰𝙱𝙻𝙴𝙳 𝙱𝚈 𝙲𝙴𝙰𝚃𝙾𝚁 𝙾𝙵 𝙱𝙾𝚃*`}
const smsJBPrincipal = () => { return `${lenguajeEB['smsAvisoAG']()}💘 *𝚃𝙾 𝙱𝙴 𝙰 𝚂𝚄𝙱 𝙱𝙾𝚃 𝙶𝙾 𝚃𝙾 𝚃𝙷𝙴 𝙼𝙰𝙸𝙽 𝙽𝚄𝙼𝙱𝙴𝚁*\n*➤ 𝙴𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝙻𝙸𝙽𝙺:*\n`}
const smsJBConexion = () => { return `${lenguajeEB['smsAvisoFG']()}⛔ *𝚃𝙷𝙴 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙸𝙾𝙽 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝙲𝙻𝙾𝚂𝙴𝙳 𝚄𝙽𝙴𝚇𝙿𝙴𝙲𝚃𝙴𝙳𝙻𝚈, 𝚆𝙴 𝚆𝙸𝙻𝙻 𝚃𝚁𝚈 𝚃𝙾 𝚁𝙴𝙲𝙾𝙽𝙽𝙴𝙲𝚃...*`}
const smsJBConexionClose = () => { return `${lenguajeEB['smsAvisoFG']()}⚠️ *𝚃𝙷𝙴 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙸𝙾𝙽 𝙷𝙰𝚂 𝙱𝙴𝙴𝙽 𝙲𝙻𝙾𝚂𝙴𝙳, 𝚈𝙾𝚄 𝙼𝚄𝚂𝚃 𝙲𝙾𝙽𝙽𝙴𝙲𝚃 𝙼𝙰𝙽𝚄𝙰𝙻𝙻𝚈 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 #serbot 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙰𝙽𝙳 𝚁𝙴𝚂𝙲𝙰𝙽 𝚃𝙷𝙴 𝙽𝙴𝚆 𝚀𝚁 𝙲𝙾𝙳𝙴* ${lenguajeEB['smsJBConexionTrue3']()} *𝚆𝙷𝙸𝙲𝙷 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝚃𝙷𝙴 𝙵𝙸𝚁𝚂𝚃 𝚃𝙸𝙼𝙴 𝙰 𝚂𝚄𝙱 𝙱𝙾𝚃 𝚆𝙰𝚂 𝙼𝙰𝙳𝙴.*`}
const smsJBConexionTrue = () => { return `${lenguajeEB['smsAvisoEG']()}✅ *𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙸𝙾𝙽*`}
const smsJBConexionTrue2 = () => { return `${lenguajeEB['smsAvisoEG']()}✅ *𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙸𝙾𝙽 ✅ 𝚈𝙾𝚄 𝙲𝙰𝙽 𝙲𝙾𝙽𝙽𝙴𝙲𝚃 𝚄𝚂𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 (𝙸𝙳) 𝙾𝚁 𝚄𝚂𝙴:*`}
const smsJBConexionTrue3 = () => { return ` *𝙾𝚁 𝚈𝙾𝚄 𝙲𝙰𝙽 𝚄𝚂𝙴 𝚈𝙾𝚄𝚁 (𝙸𝙳)*`}
const smsJBCargando = (usedPrefix) => { return `${lenguajeEB['smsAvisoIIG']()}🌹 *𝙸𝚂 𝙲𝙾𝙽𝙽𝙴𝙲𝚃𝙴𝙳, 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂 𝙰𝚁𝙴 𝙻𝙾𝙰𝙳𝙸𝙽𝙶...*\n\n🚀 *𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴 𝙾𝙿𝚃𝙸𝙾𝙽𝚂:*\n*➤ ${usedPrefix}pausesb _(𝐒𝐭𝐨𝐩 𝐒𝐮𝐛 𝐁𝐨𝐭 𝐁𝐭𝐬𝐁𝐨𝐭-𝐌𝐃 𝐟𝐞𝐚𝐭𝐮𝐫𝐞)_*\n*➤ ${usedPrefix}delsession _(𝐃𝐞𝐥𝐞𝐭𝐞 𝐚𝐥𝐥 𝐭𝐫𝐚𝐜𝐞𝐬 𝐨𝐟 𝐒𝐮𝐛 𝐁𝐨𝐭 𝐁𝐭𝐬𝐁𝐨𝐭-𝐌𝐃)_*\n*➤ ${usedPrefix}serbot _(𝐆𝐞𝐭 𝐧𝐞𝐰 𝐐𝐑 𝐜𝐨𝐝𝐞 𝐭𝐨 𝐛𝐞 𝐒𝐮𝐛 𝐁𝐨𝐭 𝐁𝐭𝐬𝐁𝐨𝐭-𝐌𝐃)_*`}

//jadibot
const smsJBDel = () => { return `${lenguajeEB['smsAvisoAG']()}*𝐔𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐭𝐨 𝐭𝐡𝐞 𝐦𝐚𝐢𝐧 𝐛𝐨𝐭.*`}
const smsJBAdios = () => { return `${lenguajeEB['smsAvisoEG']()}*𝐈 𝐰𝐢𝐥𝐥 𝐦𝐢𝐬𝐬 𝐲𝐨𝐮 ${global.packname} 𝐛𝐲𝐞...*`}
const smsJBCerrarS = () => { return `${lenguajeEB['smsAvisoEG']()}*𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐥𝐨𝐠𝐠𝐞𝐝 𝐨𝐮𝐭 𝐚𝐧𝐝 𝐝𝐞𝐥𝐞𝐭𝐞𝐝 𝐚𝐥𝐥 𝐭𝐫𝐚𝐜𝐞𝐬 𝐁𝐭𝐬𝐁𝐨𝐭-𝐌𝐃.*`}
const smsFoldErr = (usedPrefix, comd) => { return `*𝚈𝙾𝚄 𝙳𝙾 𝙽𝙾𝚃 𝙷𝙰𝚅𝙴 𝙰 𝚂𝙴𝚂𝚂𝙸𝙾𝙽, 𝚈𝙾𝚄 𝙲𝙰𝙽 𝙲𝚁𝙴𝙰𝚃𝙴 𝙾𝙽𝙴 𝚄𝚂𝙸𝙽𝙶:*\n*${usedPrefix}${comd}*\n\n*𝙸𝙵 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙰𝙽 (𝙸𝙳) 𝚈𝙾𝚄 𝙲𝙰𝙽 𝚂𝙺𝙸𝙿 𝚃𝙷𝙴 𝙿𝚁𝙴𝚅𝙸𝙾𝚄𝚂 𝚂𝚃𝙴𝙿 𝚄𝚂𝙸𝙽𝙶:*\n*${usedPrefix}${comd}* \`\`\`(ID)\`\`\``}

//jadibot
const smsJBCom1 = () => { return lenguajeEB['smsAvisoAG']() + `*𝙸𝚂 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙽𝙾𝚃 𝙰 𝚂𝚄𝙱 𝙱𝙾𝚃, 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝚃𝙷𝙴 𝙼𝙰𝙸𝙽 𝙽𝚄𝙼𝙱𝙴𝚁 𝚃𝙾 𝙱𝙴𝙲𝙾𝙼𝙴 𝙰 𝚂𝚄𝙱 𝙱𝙾𝚃.*`}
const smsJBCom2 = () => { return lenguajeEB['smsAvisoRG']() + `*𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙲𝙻𝙾𝚂𝙴𝙳/𝙿𝙰𝚄𝚂𝙴𝙳 𝚃𝙷𝙴 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙱𝚃𝚂𝙱𝙾𝚃-𝙼𝙳.*`}

//jadibot
const smsJBCom3 = () => { return `📝 *𝑳𝑰𝑺𝑻 𝑶𝑭 𝑺𝑼𝑩𝑩𝑶𝑻𝑺*\n\n🌹 _𝒀𝑶𝑼 𝑪𝑨𝑵 𝑨𝑺𝑲 𝑭𝑶𝑹 𝑷𝑬𝑹𝑴𝑰𝑺𝑺𝑰𝑶𝑵 𝑻𝑶 𝑳𝑬𝑻 𝒀𝑶𝑼𝑹 𝑮𝑹𝑶𝑼𝑷 𝑼𝑺𝑬 𝑻𝑯𝑬 𝑩𝑶𝑻._\n\n\`\`\`💬 𝑰𝑭𝑵𝑶 💬 𝑬𝑨𝑪𝑯 𝑺𝑼𝑩 𝑩𝑶𝑻 𝑼𝑺𝑬𝑹 𝑼𝑺𝑬𝑺 𝑻𝑯𝑬 𝑭𝑼𝑵𝑪𝑻𝑰𝑶𝑵 𝑨𝑺 𝑻𝑯𝑬𝒀 𝑾𝑨𝑵𝑻𝑺, 𝑻𝑯𝑬 𝑴𝑨𝑰𝑵 𝑵𝑼𝑴𝑩𝑬𝑹 𝑰𝑺 𝑵𝑶𝑻 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑺𝑰𝑩𝑳𝑬 𝑭𝑶𝑹 𝑻𝑯𝑬 𝑼𝑺𝑬 𝑶𝑭 𝑻𝑯𝑬 𝑭𝑼𝑵𝑪𝑻𝑰𝑶𝑵.\`\`\``}
const smsJBCom4 = () => { return "*𝑵𝑶 𝑺𝑼𝑩 𝑩𝑶𝑻𝑺 𝑨𝑽𝑨𝑰𝑳𝑨𝑩𝑳𝑬. 𝑪𝑯𝑬𝑪𝑲 𝑳𝑨𝑻𝑬𝑹.*"}

//propietario(a).js
const smsJBDifu1 = () => { return "*👑 𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻𝑰𝑵𝑮 𝑭𝑶𝑹 𝑺𝑼𝑩 𝑩𝑶𝑻𝑺 👑*\n\n"}
const smsJBDifu2 = (numUser, difuUser, tolUser) => { return `*𝑺𝑼𝑪𝑪𝑬𝑺𝑺𝑭𝑼𝑳 𝑫𝑰𝑺𝑺𝑬𝑴𝑰𝑵𝑨𝑻𝑰𝑶𝑵 𝑭𝑶𝑹 ${numUser} 𝑺𝑼𝑩 𝑩𝑶𝑻𝑺*\n\n${difuUser}\n\n*𝑺𝑯𝑰𝑷𝑷𝑰𝑵𝑮 𝑭𝑰𝑵𝑰𝑺𝑯𝑬𝑫 𝑰𝑵: ${tolUser} 𝑺𝑬𝑪𝑶𝑵𝑫𝑺.*`}

//propietario(a).js
const smsChatGP1 = () => { return "*𝑺𝑬𝑵𝑫𝑰𝑵𝑮 𝑴𝑬𝑺𝑺𝑨𝑮𝑬, 𝑾𝑨𝑰𝑻 𝑨 𝑴𝑶𝑴𝑬𝑵𝑻...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `🌹 *𝑶𝑭𝑭𝑰𝑪𝑰𝑨𝑳 𝑹𝑬𝑳𝑬𝑨𝑺𝑬* 🌹\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `💬 *𝑻𝑯𝑬 𝑴𝑬𝑺𝑺𝑨𝑮𝑬 𝑾𝑨𝑺 𝑺𝑬𝑵𝑻 𝑻𝑶 ${totalGP} 𝑮𝑹𝑶𝑼𝑷*`}

//propietario(a)-getplugin.js
const smsPlugin1 = (usedPrefix, command) => { return `*👑 𝑷𝑳𝑬𝑨𝑺𝑬 𝑾𝑹𝑰𝑻𝑬 𝑻𝑯𝑬 𝑵𝑨𝑴𝑬 𝑶𝑭 𝑻𝑯𝑬 𝑭𝑰𝑳𝑬 𝑶𝑹 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑻𝑶 𝑺𝑬𝑵𝑫 𝑻𝑯𝑬 𝑪𝑶𝑫𝑬*\n*𝑬𝑿𝑨𝑴𝑷𝑳𝑬:*\n\n*${usedPrefix + command} menu-menu.js*\n*${usedPrefix + command} menu*`}
const smsPlugin2 = (contenidoArchivo, contenido) => { return `\`\`\`𝑭𝑰𝑳𝑬 𝑪𝑶𝑫𝑬 ${contenidoArchivo}\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${contenido.toString()}`}
const smsPlugin3 = (text) => { return `*𝑻𝑯𝑬 𝑪𝑶𝑫𝑬 𝑭𝑶𝑹 '${text}' 𝑰𝑻 𝑾𝑨𝑺 𝑵𝑶𝑻 𝑭𝑶𝑼𝑵𝑫.*`}
const smsPlugin4 = (filename, fileContent) => { return `\`\`\`𝑭𝑰𝑳𝑬 𝑪𝑶𝑫𝑬 ${filename}.js\`\`\`\n${String.fromCharCode(8206).repeat(850)}\n${fileContent.toString()}`}
const smsPlugin5 = (matchingFile, err) => { return `𝑬𝑹𝑹𝑶𝑹 𝑾𝑯𝑰𝑳𝑬 𝑺𝑬𝑵𝑫𝑰𝑵𝑮 𝑻𝑯𝑬 𝑭𝑰𝑳𝑬 '${matchingFile}': ${err.message}`}
const smsPlugin6 = (matchingFile) => { return `𝑨𝑵 𝑬𝑹𝑹𝑶𝑹 𝑶𝑪𝑪𝑼𝑹𝑹𝑬𝑫 𝑾𝑯𝑬𝑵 𝑺𝑬𝑵𝑫𝑰𝑵𝑮 𝑻𝑯𝑬 𝑭𝑰𝑳𝑬: '${matchingFile}'`}

//propietario(a).js
const smsJoin = (user) => { return `${packname}\n_🌹👑 𝑯𝑬 𝑯𝑨𝑺 𝑱𝑶𝑰𝑵𝑬𝑫 𝑻𝑯𝑬 𝑮𝑹𝑶𝑼𝑷_\n\n🍓 *𝑰𝑻 𝑾𝑨𝑺 𝑨𝑫𝑫𝑬𝑫 𝑩𝒀: @${user}*`}

//propietario(a)-leavegc.js
const smsLeave = () => { return `${packname} *👑 𝑳𝑬𝑨𝑽𝑬 𝑻𝑯𝑬 𝑮𝑹𝑶𝑼𝑷, 𝑰𝑻 𝑾𝑨𝑺 𝑮𝑹𝑬𝑨𝑻 𝑩𝑬𝑰𝑵𝑮 𝑯𝑬𝑹𝑬.*`}

//rpg-perfil.js
const smsPerfil0 = () => { return `💝 𝐏 𝐑 𝐎 𝐅 𝐈 𝐋 𝐄 💝`}
const smsPerfil1 = () => { return `𝐔𝐬𝐞𝐫 ✯`}
const smsPerfil2 = () => { return `𝐍𝐚𝐦𝐞 ✯`}
const smsPerfil3 = () => { return `𝐀𝐠𝐞 ✯`}
const smsPerfil4 = () => { return `𝐍𝐮𝐦𝐛𝐞𝐫 ✯`}
const smsPerfil5 = () => { return `𝐈𝐃 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧 ✯`}

//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeEB['smsAvisoIIG']()}*✨ 𝚈𝙾𝚄 𝙰𝚁𝙴 𝙰𝙻𝚁𝙴𝙰𝙳𝚈 𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁𝙴𝙳 ✨*\n*👑 𝙸𝙵 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝚄𝙽𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁 𝚈𝙾𝚄𝚁 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽 𝚄𝚂𝙴 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳:*\n*${usedPrefix}unreg 𝙰𝙽𝙳 𝚂𝙴𝚁𝙸𝙰𝙻 𝙽𝚄𝙼𝙱𝙴𝚁*\n\n*𝙸𝙵 𝚈𝙾𝚄 𝙳𝙾𝙽'𝚃 𝚁𝙴𝙼𝙴𝙼𝙱𝙴𝚁 𝚈𝙾𝚄𝚁 𝚂𝙴𝚁𝙸𝙰𝙻 𝙽𝚄𝙼𝙱𝙴𝚁 𝚄𝚂𝙴 𝚃𝙷𝙸𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳:*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeEB['smsAvisoIIG']()}*💝 𝙴𝙽𝚃𝙴𝚁 𝚈𝙾𝚄𝚁 𝙽𝙰𝙼𝙴 𝙰𝙽𝙳 𝙰𝙶𝙴 𝚃𝙾 𝙱𝙴 𝚁𝙴𝙶𝙸𝚂𝚃𝙴𝚁𝙴𝙳*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n\n${usedPrefix + command} Nombre.18`}
const smsVerify2 = () => { return `${lenguajeEB['smsAvisoAG']()}*👑 𝙴𝙽𝚃𝙴𝚁 𝚈𝙾𝚄𝚁 𝙽𝙰𝙼𝙴.*`}
const smsVerify3 = () => { return `${lenguajeEB['smsAvisoAG']()}*🌹 𝙴𝙽𝚃𝙴𝚁 𝚈𝙾𝚄𝚁 𝙰𝙶𝙴.*`}
const smsVerify4 = () => { return `${lenguajeEB['smsAvisoAG']()}*💝 𝚈𝙾𝚄 𝙰𝚁𝙴 𝚅𝙴𝚁𝚈 𝙾𝙻𝙳 :0 ✨*`}
const smsVerify5 = () => { return `${lenguajeEB['smsAvisoAG']()}*💘 𝚈𝙾𝚄 𝙰𝚁𝙴 𝚅𝙴𝚁𝚈 𝙼𝙸𝙽𝙾𝚁 ^_^ ✨*`}
const smsVerify6 = () => { return `${lenguajeEB['smsAvisoAG']()}*💖 𝚆𝚁𝙸𝚃𝙴 𝙰 𝚂𝙷𝙾𝚁𝚃𝙴𝚁 𝙽𝙰𝙼𝙴*`}
const smsVerify7 = () => { return `📗 *𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍* 📗`}
const smsVerify8 = (usedPrefix) => { return `*𝚈𝙾𝚄𝚁 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽 𝙸𝙳 𝚆𝙸𝙻𝙻 𝙱𝙴 𝚄𝚂𝙴𝙳 𝙸𝙽 𝙲𝙰𝚂𝙴 𝚈𝙾𝚄 𝚆𝙸𝚂𝙷 𝚃𝙾 𝙼𝙾𝙳𝙸𝙵𝚈 𝙾𝚁 𝙳𝙴𝙻𝙴𝚃𝙴 𝚈𝙾𝚄𝚁 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽 𝚄𝚂𝙸𝙽𝙶: ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `👑 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝚃𝙸𝙾𝙽 𝙱𝙰𝙳𝙶𝙴 👑`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*🏙️ 𝐑𝐄𝐒𝐏𝐎𝐍𝐃 𝐓𝐎 𝐀 𝐕𝐈𝐃𝐄𝐎, 𝐏𝐈𝐂𝐓𝐔𝐑𝐄, 𝐎𝐑 𝐖𝐑𝐈𝐓𝐄: ${usedPrefix + command} 𝐍𝐄𝐗𝐓 𝐓𝐎 𝐀 𝐋𝐈𝐍𝐊 𝐓𝐇𝐀𝐓 𝐄𝐍𝐃𝐄𝐒 𝐈𝐍: .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*💖 𝚃𝙷𝙴 𝚅𝙸𝙳𝙴𝙾 𝚂𝙷𝙾𝚄𝙻𝙳 𝙽𝙾𝚃 𝙻𝙰𝚂𝚃 𝙼𝙾𝚁𝙴 𝚃𝙷𝙰𝙽 10 𝚂𝙴𝙲𝙾𝙽𝙳𝚂.*`}
const smsSticker3 = (usedPrefix, command) => { return `*⛔ 𝐓𝐇𝐄 𝐋𝐈𝐍𝐊 𝐈𝐒 𝐍𝐎𝐓 𝐕𝐀𝐋𝐈𝐃, 𝐈𝐓 𝐌𝐔𝐒𝐓 𝐄𝐍𝐃 𝐈𝐍: .jpg .jpeg .gif .png, 𝐄𝐗𝐀𝐌𝐏𝐋𝐄:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*💝 𝙴𝙽𝚃𝙴𝚁 𝚈𝙾𝚄𝚁 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽 𝙸𝙳. 𝙸𝙵 𝚈𝙾𝚄 𝙳𝙾𝙽'𝚃 𝙺𝙽𝙾𝚆 𝚆𝙷𝙸𝙲𝙷 𝙸𝚃 𝙸𝚂, 𝚄𝚂𝙴 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳: ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*⛔ 𝚈𝙾𝚄𝚁 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽 𝙸𝙳 𝙸𝚂 𝙽𝙾𝚃 𝙲𝙾𝚁𝚁𝙴𝙲𝚃. 𝚄𝚂𝙴 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳: ${usedPrefix}${idreg} 𝚃𝙾 𝙶𝙴𝚃 𝚈𝙾𝚄𝚁 𝙸𝙳.*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*💬 𝚈𝙾𝚄𝚁 𝙲𝙰𝙽𝙲𝙴𝙻𝙴𝙳 𝚈𝙾𝚄𝚁 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽 𝙵𝚁𝙾𝙼:* ${packname}\n\n*𝚈𝙾𝚄 𝙲𝙰𝙽 𝚄𝚂𝙴: ${usedPrefix}${regbot} 𝚃𝙾 𝙼𝙰𝙺𝙴 𝙰 𝙽𝙴𝚆 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽.*`}

//rpg-myns.js
const smsIDserie = () => { return `🚀 *𝙸𝙳 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙸𝙾𝙽* 🚀`}

//propietario(a).js
const smsBCbot1 = () => { return `🍰 *𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚂𝙴𝙽𝚃:*`}
const smsBCbot2 = () => { return `𝙿𝚁𝙸𝚅𝙰𝚃𝙴`} 
const smsBCbot3 = () => { return `𝙶𝚁𝙾𝚄𝙿`} 
const smsBCbot4 = () => { return `𝚃𝙾𝚃𝙰𝙻`} 
const smsBCbot5 = () => { return `𝚃𝙾𝚃𝙰𝙻 𝚂𝙷𝙸𝙿𝙿𝙸𝙽𝙶 𝚃𝙸𝙼𝙴:`}
const smsBCbot6 = () => { return `💝𝙸𝙽𝙵𝙾💝 𝚃𝙷𝙴𝚈 𝚆𝙴𝚁𝙴 𝙽𝙾𝚃 𝚂𝙴𝙽𝚃 𝚃𝙾 𝙰𝙻𝙻 𝚃𝙷𝙴 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃𝚂 𝚃𝙾 𝙰𝚅𝙾𝙸𝙳 𝚂𝙰𝚃𝚄𝚁𝙰𝚃𝙸𝙾𝙽.`} 
const smsBCbot7 = () => { return `*💬 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝚁𝙴𝙻𝙴𝙰𝚂𝙴 💬*`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙾𝚁 𝚆𝚁𝙸𝚃𝙴 𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚄𝚂𝙸𝙽𝙶: ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*🍰 𝚂𝙴𝙽𝙳𝙸𝙽𝙶 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝙼𝙴𝚂𝚂𝙰𝙶𝙴, 𝚆𝙰𝙸𝚃 𝙰 𝙼𝙾𝙼𝙴𝙽𝚃...*`}
const smsBCMensaje3 = (totalPri, time) => { return `👑 *𝚃𝙷𝙴 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝚃𝙾 ${totalPri} 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃*\n\n*𝚃𝙾𝚃𝙰𝙻 𝚂𝙷𝙸𝙿𝙿𝙸𝙽𝙶 𝚃𝙸𝙼𝙴: ${time}*\n${totalPri >= 3000 ? '\n*💖𝙸𝙽𝙵𝙾💖 𝚃𝙷𝙴𝚈 𝚆𝙴𝚁𝙴 𝙽𝙾𝚃 𝚂𝙴𝙽𝚃 𝚃𝙾 𝙰𝙻𝙻 𝚃𝙷𝙴 𝙲𝙷𝙰𝚃𝚂 𝚃𝙾 𝙰𝚅𝙾𝙸𝙳 𝚂𝙰𝚃𝚄𝚁𝙰𝚃𝙸𝙾𝙽.*' : ''}`}

//reiniciar 
const smsreiniciar = () => { return `*⛧⟆❲💝 𝑹𝑬𝑺𝑬𝑻 💝❳⟅⛧*\n*𝑷𝑳𝑬𝑨𝑺𝑬 𝑾𝑨𝑰𝑻 𝑨 𝑴𝑶𝑴𝑬𝑵𝑻...*`}

//config-on y off.js
const smsConfi1bot = () => { return `👑 *𝑺𝑬𝑻𝑻𝑰𝑵𝑮* 👑`}
const smsConfi2bot = () => { return `𝑪𝑶𝑴𝑴𝑨𝑵𝑫`}
const smsConfi3bot = () => { return `𝑺𝑻𝑨𝑻𝑬`}
const smsConfi4bot = () => { return `𝑭𝑶𝑹`}
const smsConfi5bot = () => { return `𝑨𝑪𝑻𝑰𝑽𝑨𝑻𝑬𝑫`}
const smsConfi6bot = () => { return `𝑫𝑰𝑺𝑨𝑩𝑳𝑬𝑫`}
const smsConfi7bot = () => { return `𝑻𝑯𝑰𝑺 𝑪𝑯𝑨𝑻`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeEB['smsAvisoEG']()}*❮👑❯➢ 𝑨𝒔 𝒊𝒕 𝒊𝒔 𝒂𝒅𝒎𝒊𝒏 𝒊𝒕 𝒘𝒊𝒍𝒍 𝒏𝒐𝒕 𝒃𝒆 𝒅𝒆𝒍𝒆𝒕𝒆𝒅.*`}
const smsEnlaceWat = () => { return `${lenguajeEB['smsAvisoAG']()}*❮🛡️❯➢ 𝑨 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝒍𝒊𝒏𝒌 𝒘𝒂𝒔 𝒅𝒆𝒕𝒆𝒄𝒕𝒆𝒅*\n\n*❮🛡️❯➢ 𝒀𝒐𝒖 𝒘𝒊𝒍𝒍 𝒃𝒆 𝒅𝒆𝒍𝒆𝒕𝒆𝒅.*`}
const smsWaMismoEnlace = () => { return '*❮⛧❯➢ 𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒌 𝒊𝒔 𝒇𝒓𝒐𝒎 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑, 𝒔𝒐𝒍𝒆𝒍𝒚 𝒇𝒐𝒓 𝒕𝒉𝒂𝒕, 𝒊𝒕 𝒘𝒊𝒍𝒍 𝒏𝒐𝒕 𝒃𝒆 𝒅𝒆𝒍𝒆𝒕𝒆𝒅. ✨*'}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeEB['smsAvisoAG']()}*❮🛡️❯➢ 𝑨 𝒍𝒊𝒏𝒌 𝒄𝒐𝒏𝒕𝒂𝒊𝒏𝒊𝒏𝒈 (HTTPS) 𝒘𝒂𝒔 𝒅𝒆𝒍𝒆𝒕𝒆𝒅*\n\n*❮🛡️❯➢ 𝒀𝒐𝒖 𝒘𝒊𝒍𝒍 𝒃𝒆 𝒅𝒆𝒍𝒆𝒕𝒆𝒅.*`}

//_allantilink.js 
const smsTextoYT = () => { return '💝✨ 𝑺𝑼𝑷𝑬𝑹 𝑩𝑶𝑻 - 𝑩𝑻𝑺 ✨💝 '} 
const smsApagar = () => { return '⛔ 𝑫𝑰𝑺𝑨𝑩𝑳𝑬 ⛔'} 
const smsEncender = () => { return '🟢 𝑬𝑵𝑨𝑩𝑳𝑬 🟢'} 
const smsEnlaceTik = () => { return `*❴⚠️❵➯ 𝑨 𝑻𝑰𝑲𝑻𝑶𝑲 𝑳𝑰𝑵𝑲 𝑾𝑨𝑺 𝑫𝑬𝑻𝑬𝑪𝑻𝑬𝑫*\n\n❲🛡️𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻-𝗕𝗼𝘁-𝗠𝗗🛡️❳ ❮𝗺𝗲𝗻𝘀𝗮𝗷𝗲❯:\n𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐃𝐄𝐋𝐄𝐓𝐄𝐃.`}
const smsEnlaceYt = () => { return `*❴⚠️❵➯ 𝑨 𝒀𝑶𝑼𝑻𝑼𝑩𝑬 𝑳𝑰𝑵𝑲 𝑾𝑨𝑺 𝑫𝑬𝑻𝑬𝑪𝑻𝑬𝑫*\n\n❲🛡️𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻-𝗕𝗼𝘁-𝗠𝗗🛡️❳ ❮𝗺𝗲𝗻𝘀𝗮𝗷𝗲❯:\n𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐃𝐄𝐋𝐄𝐓𝐄𝐃.`}
const smsEnlaceTel = () => { return `*❴⚠️❵➯ 𝑨 𝑻𝑬𝑳𝑬𝑮𝑹𝑨𝑴 𝑳𝑰𝑵𝑲 𝑾𝑨𝑺 𝑫𝑬𝑻𝑬𝑪𝑻𝑬𝑫*\n\n❲🛡️𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻-𝗕𝗼𝘁-𝗠𝗗🛡️❳ ❮𝗺𝗲𝗻𝘀𝗮𝗷𝗲❯:\n𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐃𝐄𝐋𝐄𝐓𝐄𝐃.`}
const smsEnlaceFb = () => { return `*❴⚠️❵➯ 𝑨 𝑭𝑨𝑪𝑬𝑩𝑶𝑶𝑲 𝑳𝑰𝑵𝑲 𝑾𝑨𝑺 𝑫𝑬𝑻𝑬𝑪𝑻𝑬𝑫*\n\n❲🛡️𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻-𝗕𝗼𝘁-𝗠𝗗🛡️❳ ❮𝗺𝗲𝗻𝘀𝗮𝗷𝗲❯:\n𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐃𝐄𝐋𝐄𝐓𝐄𝐃.`}
const smsEnlaceIg = () => { return `*❴⚠️❵➯ 𝑨 𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑴 𝑳𝑰𝑵𝑲 𝑾𝑨𝑺 𝑫𝑬𝑻𝑬𝑪𝑻𝑬𝑫*\n\n❲🛡️𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻-𝗕𝗼𝘁-𝗠𝗗🛡️❳ ❮𝗺𝗲𝗻𝘀𝗮𝗷𝗲❯:\n𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐃𝐄𝐋𝐄𝐓𝐄𝐃.`}
const smsEnlaceTw = () => { return `*❴⚠️❵➯ A 𝑻𝑾𝑰𝑻𝑻𝑬𝑹 𝑳𝑰𝑵𝑲 𝑾𝑨𝑺 𝑫𝑬𝑻𝑬𝑪𝑻𝑬𝑫*\n\n❲🛡️𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻-𝗕𝗼𝘁-𝗠𝗗🛡️❳ ❮𝗺𝗲𝗻𝘀𝗮𝗷𝗲❯:\n𝐘𝐎𝐔 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐃𝐄𝐋𝐄𝐓𝐄𝐃.`}
const smsAllAdmin = () => { return `*❴💎❵➯ 𝑰 𝑴𝑼𝑺𝑻 𝑩𝑬 𝑨𝑵 𝑨𝑫𝑴𝑰𝑵 𝑻𝑶 𝑫𝑬𝑳𝑬𝑻𝑬 𝑼𝑺𝑬𝑹𝑺.*`}
const smsSoloOwner = () => { return `*❴👑❵➯ 𝑴𝒀 𝑶𝑾𝑵𝑬𝑹 𝑴𝑼𝑺𝑻 𝑨𝑪𝑻𝑰𝑽𝑨𝑻𝑬 𝑻𝑯𝑬 𝑹𝑬𝑺𝑻𝑹𝑰𝑪𝑻 𝑭𝑼𝑵𝑪𝑻𝑰𝑶𝑵.*`}

//config-on y off.js
const smsParaAdmins = () => { return `❲💖❳➛ 𝐅𝐨𝐫 𝐚𝐝𝐦𝐢𝐧𝐬 𝐚𝐧𝐝 𝐜𝐫𝐞𝐚𝐭𝐨𝐫 ➤ 𝐠𝐫𝐨𝐮𝐩𝐬`}
const smsParaAdYOw = () => { return `❲💝❳➛ 𝐅𝐨𝐫 𝐚𝐝𝐦𝐢𝐧𝐬 𝐚𝐧𝐝 𝐜𝐫𝐞𝐚𝐭𝐨𝐫 ➤ 𝐜𝐡𝐚𝐭𝐬`}
const smsParaOw = () => { return `❲👑❳➛ 𝐅𝐨𝐫 𝐜𝐫𝐞𝐚𝐭𝐨𝐫 ➤ 𝐜𝐡𝐚𝐭`}
const smsNoGg = () => { return ` | ⛔`}

//_anti-internacional.js
const smsInt1 = () => { return `❲🛡️❳➤ 𝑻𝒉𝒊𝒔 𝒏𝒖𝒎𝒃𝒆𝒓:`}
const smsInt2 = () => { return `𝒀𝒐𝒖 𝒂𝒓𝒆 𝒏𝒐𝒕 𝒂𝒍𝒍𝒐𝒘𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑. ✨`}

//handler.js
const smsCont1 = () => { return `*❮⛔ COMMAND FAILING ⛔❯*`}
const smsCont2 = () => { return `*❮🌸❯➢ 𝑷𝑳𝑼𝑮𝑰𝑵:*`}
const smsCont3 = () => { return `*❮👤❯➢ 𝑼𝑺𝑬𝑹:*`}
const smsCont4 = () => { return `*❮💝❯➢ 𝑪𝑶𝑴𝑴𝑨𝑵𝑫:*`}
const smsCont5 = () => { return `*❮⛔❯➢ 𝑬𝑹𝑹𝑶𝑹:*`}
const smsCont6 = () => { return `*❮📂❯➢ 𝑹𝑬𝑷𝑶𝑹𝑻 𝑻𝑯𝑰𝑺 𝑴𝑬𝑺𝑺𝑨𝑮𝑬 𝑼𝑺𝑰𝑵𝑮 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫: #report 𝑻𝑶 𝑺𝑶𝑳𝑽𝑬.*`}
const smsCont7 = () => { return `${global.lenguajeEB['smsAvisoAG']()}*𝑯𝑨𝑽𝑬 𝑵𝑶 𝑫𝑰𝑨𝑴𝑶𝑵𝑫𝑺 𝒀𝑶𝑼 𝑪𝑨𝑵 𝑮𝑶 𝑻𝑶 𝑻𝑯𝑬 𝑺𝑻𝑶𝑹𝑬 𝑾𝑰𝑻𝑯 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫:*`}
const smsCont8 = () => { return ` *𝑫𝑰𝑨𝑴𝑶𝑵𝑫(𝑺) 👤 𝑼𝑺𝑬𝑫*`}
const smsCont9 = () => { return `${global.lenguajeEB['smsAvisoAG']()}*𝑵𝒆𝒆𝒅 𝒕𝒉𝒆 𝒍𝒆𝒗𝒆𝒍:*`}
const smsCont10 = () => { return `*𝑻𝒐 𝒖𝒔𝒆 𝒕𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒂𝒏𝒅. 𝒚𝒐𝒖𝒓 𝒄𝒖𝒓𝒓𝒆𝒏𝒕 𝒍𝒆𝒗𝒆𝒍 𝒊𝒔:*`}
const smsCont11 = () => { return `*𝑼𝑷𝑫𝑨𝑻𝑬 𝑾𝑰𝑻𝑯 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫:*`}
const smsAntiEliminar = (userDelete) => { return `🍀 *ANTI DELETE* 🍀\n*@${userDelete} 𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝒂 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 :0*\n\n\`\`\`💝 𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒅𝒆𝒍𝒆𝒕𝒆𝒅...\`\`\``}
const smsHandler = () => { return "𝑼𝒑𝒅𝒂𝒕𝒆 𝒕𝒉𝒆 'handler.js' 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 💝"} 
const smsHandlerLlamar = (tagUserL, llamadaVideo) => { return `*𝑯𝑬𝑳𝑳𝑶 @${tagUserL} ${llamadaVideo ? '𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒄𝒂𝒍𝒍𝒔 📱' : '𝒕𝒉𝒆 𝒄𝒂𝒍𝒍𝒔 ☎️'} 𝑰𝑻 𝑰𝑺 𝑷𝑹𝑶𝑯𝑰𝑩𝑰𝑻𝑬𝑫 𝑰𝑵 𝑻𝑯𝑰𝑺 𝑪𝑯𝑨𝑻. 𝒀𝑶𝑼 𝑾𝑰𝑳𝑳 𝑩𝑬 𝑩𝑳𝑶𝑪𝑲𝑬𝑫.*`} 

//audio-efectos-edit.js
const smsControlAudio1 = () => { return '*𝑹𝑬𝑺𝑷𝑶𝑵𝑫 𝑻𝑶 𝑨𝑵 𝑨𝑼𝑫𝑰𝑶 𝑶𝑹 𝑽𝑶𝑰𝑪𝑬 𝑵𝑶𝑻𝑬.*'}
const smsControlAudio2 = (usedPrefix, command) => { return `*𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺 𝑶𝑵𝑳𝒀 𝑨𝑫𝑴𝑰𝑻 𝑵𝑼𝑴𝑩𝑬𝑹𝑺 𝑾𝑹𝑰𝑻𝑬: ${usedPrefix + command} 𝑻𝑶 𝑲𝑵𝑶𝑾 𝑻𝑯𝑰 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺.*`}
const smsControlAudio3 = () => { return `*𝑨𝑵 𝑬𝑹𝑹𝑶𝑹 𝑪𝑨𝑴𝑬 𝑼𝑷 𝑰 𝑻𝑹𝑰𝑬𝑫 𝑻𝑶 𝑪𝑯𝑨𝑵𝑮𝑬 𝑻𝑯𝑬 𝑽𝑨𝑳𝑼𝑬𝑺 𝑶𝑭 𝑻𝑯𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺 𝑨𝑵𝑫 𝑹𝑬𝑴𝑬𝑴𝑩𝑬𝑹 𝑻𝑶 𝑨𝑷𝑷𝑳𝒀 𝑻𝑯𝑬 𝑭𝑰𝑳𝑻𝑬𝑹 𝑰𝑻 𝑴𝑼𝑺𝑻 𝑹𝑬𝑺𝑷𝑶𝑵𝑫 𝑻𝑶 𝑻𝑯𝑬 𝑨𝑼𝑫𝑰𝑶 𝑶𝑹 𝑽𝑶𝑰𝑪𝑬 𝑵𝑶𝑻𝑬.*`}
const smsControlAudio4 = () => { return `*𝑹𝑬𝑺𝑷𝑶𝑵𝑫 𝑻𝑶 𝑨𝑵 𝑨𝑼𝑫𝑰𝑶 𝑶𝑹 𝑽𝑶𝑰𝑪𝑬 𝑵𝑶𝑻𝑬 𝑻𝑶 𝑨𝑷𝑷𝑳𝒀 𝑻𝑯𝑬 𝑭𝑰𝑳𝑻𝑬𝑹.*`}
const smsAudioEdit1 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺:_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *20* | MAX: *20000*
⟆⎘⟅➽ Default: *94*
❮1️⃣❯➢ _Center frequency of the filter in Hz_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *-30* | MAX: *30*
⟆⎘⟅➽ Default: *25*
❮2️⃣❯➢ _Filter gains in dB_

⟆⎘⟅➽ *(Optional parameter)*
⟆⎘⟅➽ OPTIONS: *"q", "h", "o"*
⟆⎘⟅➽ Default: *o*
❮3️⃣❯➢ _Filter Bandwidth Type_
*q:* Quality ratio, more specific frequency.
*h:* Constant bandwidth, equality at all frequencies.
*o:* Bandwidth in octaves, will double or halve every octave (every time the frequency is doubled or halved).

⟆⎘⟅➽ *(Optional parameter)*
⟆⎘⟅➽ MIN: *2* | MAX: *500*
⟆⎘⟅➽ Default: *5*
❮4️⃣❯➢ _Set the filter bandwidth to X value if you use [q, h, o]_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 200 20 o 6
${usedPrefix + command} 20 10 h
${usedPrefix + command} 1500 15

*🛡️ IF YOU OMIT TO ADD THE OPTIONAL PARAMETERS OR GO OVER THEIR LIMITS THEY WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit2 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *20* | MAX: *20000*
⟆⎘⟅➽ Default: *15*
❮1️⃣❯➢ _Vibrato frequency in Hz_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *0* | MAX: *100*
⟆⎘⟅➽ Default: *0.5*
❮2️⃣❯➢ _Depth of the vibrato, its final value will be in decimal if the value is greater than 95 it will be an integer_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 550 20 
${usedPrefix + command} 2843 43

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit3 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *8* | MAX: *32*
⟆⎘⟅➽ Default: *16*
❮1️⃣❯➢ _Quantization level of audio samples in bits_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *500* | MAX: *48000*
⟆⎘⟅➽ Default: *44100*
❮2️⃣❯➢ _Number of times per second the audio is sampled_

⟆⎘⟅➽ *(Optional parameter)*
⟆⎘⟅➽ MIN: *0* | MAX: *100*
⟆⎘⟅➽ Default: *0.5*
❮3️⃣❯➢ _Mix level between the original audio and the audio with the acrusher effect (Its final value will be a decimal if it is less than 95)_

⟆⎘⟅➽ *(Optional parameter)*
⟆⎘⟅➽ MIN: *0* | MAX: *100*
⟆⎘⟅➽ Default: *0.5*
❮4️⃣❯➢ _Amount of mixing between the original audio and the acrushered audio (Its final value will be an integer if it is greater than 95)_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 10 800 20 25
${usedPrefix + command} 17 2500 67 
${usedPrefix + command} 30 8000

*🛡️ IF YOU OMIT TO ADD THE OPTIONAL PARAMETERS OR GO OVER THEIR LIMITS THEY WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit4 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *15*
⟆⎘⟅➽ Default: *4*
❮1️⃣❯➢ _Input audio, must be adjusted to desired playback speed, involves change in audio duration_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *2000* | MAX: *2550000*
⟆⎘⟅➽ Default: *48000*
❮2️⃣❯➢ _Output audio sampling in Hz, set the desired sample rate_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 8 100000

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit5 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *-1024* | MAX: *1024*
⟆⎘⟅➽ Default: *6*
❮1️⃣❯➢ _Audio Amplifier in dB, a negative value decreases the sound of the audio and a positive value increases the sound of the audio_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 10
${usedPrefix + command} -12

*🛡️ THE PARAMETER IS MANDATORY, IF IT EXCEEDS ITS LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit6 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *100*
⟆⎘⟅➽ Default: *1.63*
❮1️⃣❯➢ _Change the playback speed of an audio file_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *8000* | MAX: *48000*
⟆⎘⟅➽ Default: *44100*
❮2️⃣❯➢ _Change the sample rate of an audio file_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit7 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *300*
⟆⎘⟅➽ Default: *1.3*
❮1️⃣❯➢ _Change the playback speed of an audio file_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *4000* | MAX: *4800000*
⟆⎘⟅➽ Default: *22100*
❮2️⃣❯➢ _Change the sample rate of an audio file_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 2 3489
${usedPrefix + command} 88 1000

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit8 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *150*
⟆⎘⟅➽ Default: *1.06*
❮1️⃣❯➢ _Change the playback speed of an audio file_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1000* | MAX: *550000*
⟆⎘⟅➽ Default: *44100*
❮2️⃣❯➢ _Change the sample rate of an audio file_

⟆⎘⟅➽ *(Optional parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *7*
⟆⎘⟅➽ Default: *1.25*
❮3️⃣❯➢ _Sets the multiplied frequency to the desired value_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 30 4885 4
${usedPrefix + command} 5 100

*🛡️ IF YOU OMIT TO ADD THE OPTIONAL PARAMETER OR GO OVER ITS LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit9 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *32* | MAX: *16384*
⟆⎘⟅➽ Default: *512*
❮1️⃣❯➢ _Size of the audio signal fragments that are processed at each moment_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *100*
⟆⎘⟅➽ Default: *0.75*
❮2️⃣❯➢ _Amount of overlap used between consecutive windows Divides an audio signal into segments or windows to apply certain processing to it_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit10 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *0.5* | MAX: *12*
⟆⎘⟅➽ Default: *0.7*
❮1️⃣❯➢ _Audio playback speed. A value of 1.0 is normal speed, while a value greater than 1.0 speeds up playback, and a value less than 1.0 slows it down._

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *8000* | MAX: *48000*
⟆⎘⟅➽ Default: *44100*
❮2️⃣❯➢ _Audio sample rate, indicates how often the sound is sampled. The higher the sample rate, the higher the audio quality_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 100 40
${usedPrefix + command} 739 24

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit11 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣ 3️⃣ 4️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *5*
⟆⎘⟅➽ Default: *2*
❮1️⃣❯➢ _Motion tween mode used by the filter._

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *4*
⟆⎘⟅➽ Default: *2*
❮2️⃣❯➢ _Motion compensation mode used by the filter._

⟆⎘⟅➽ *(Optional parameter)*
⟆⎘⟅➽ MIN: *0* | MAX: *10*
⟆⎘⟅➽ Default: *1*
❮3️⃣❯➢ _Use of subpixel vertical interpolation_

⟆⎘⟅➽ *(Optional parameter)*
⟆⎘⟅➽ MIN: *1* | MAX: *240*
⟆⎘⟅➽ Default: *120*
❮4️⃣❯➢ _Controls the output frame rate of the audio_

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 2 3 7 30
${usedPrefix + command} 1 1 9
${usedPrefix + command} 4 3

*🛡️ IF YOU OMIT TO ADD THE OPTIONAL PARAMETERS OR GO OVER THEIR LIMITS THEY WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit12 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *0.5* | MAX: *10*
⟆⎘⟅➽ Default: *0.5*
❮1️⃣❯➢ _Adjusts the playback speed of the audio without affecting the pitch._

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *2000* | MAX: *260000*
⟆⎘⟅➽ Default: *65100*
❮2️⃣❯➢ _Adjust the audio sample rate, i.e. the number of audio samples per second._

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 3 9483
${usedPrefix + command} 0.8 3849

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsAudioEdit13 = (usedPrefix, command) => { return `*_𝑻𝑶 𝑴𝑨𝑲𝑬 𝑨 𝑪𝑶𝑹𝑹𝑬𝑪𝑻 𝑴𝑶𝑫𝑰𝑭𝑰𝑪𝑨𝑻𝑰𝑶𝑵 𝑶𝑭 𝒀𝑶𝑼𝑹 𝑨𝑼𝑫𝑰𝑶 𝑼𝑺𝑬 𝑻𝑯𝑬𝑺𝑬 𝑷𝑨𝑹𝑨𝑴𝑬𝑻𝑬𝑹𝑺_*\n${usedPrefix + command} 1️⃣ 2️⃣\n
⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *0.001* | MAX: *5*
⟆⎘⟅➽ Default: *0.125*
❮1️⃣❯➢ _The frequency of the pulsed wave in hertz (Hz)_

⟆⎘⟅➽ *(Mandatory parameter)*
⟆⎘⟅➽ MIN: *0.01* | MAX: *1*
⟆⎘⟅➽ Default: *1*
❮2️⃣❯➢ _Adjusts the amount of modulation applied to the audio._

*➢ EXAMPLES OF USE:*
${usedPrefix + command} 0.555 0.50
${usedPrefix + command} 1 0.07

*🛡️ ALL THE PARAMETERS ARE MANDATORY, IF YOU EXCEED THEIR LIMITS, THESE WILL BE ADDED TO THE DEFAULT VALUE, REMEMBER TO RESPOND TO THE AUDIO OR VOICE NOTE*`}
const smsControlAudio5 = () => { return `𝑨𝑺𝑺𝑰𝑮𝑵𝑬𝑫 𝑽𝑨𝑳𝑼𝑬𝑺:`}

//config.js
const smsConfigBot = () => { return "𝑼𝒑𝒅𝒂𝒕𝒆 'config.js' 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 💝"}

//menu-menu.js
const smsMenuTotal1 = () => { return "*_MENU INFORMATION_*"}
const smsMenuTotal2 = () => { return "*_SER EGOBOT_*"}
const smsMenuTotal3 = () => { return "*_SEARCHER / IA_*"}
const smsMenuTotal4 = () => { return "*_DOWNLOADS_*"}
const smsMenuTotal5 = () => { return "*_CONVERTER_*"}
const smsMenuTotal6 = () => { return "*_GROUP ➢ ALL_*"}
const smsMenuTotal7 = () => { return "*_GROUP ➢ ADMINS_*"}
const smsMenuTotal8 = () => { return "*_EDIT AUDIO EFFECTS_*"}
const smsMenuTotal9 = () => { return "*_AUDIO EFFECTS_*"}
const smsMenuTotal10 = () => { return "*_SETTING_*"}
const smsMenuTotal11 = () => { return "*_TO BE VERIFIED_*"}
const smsMenuTotal12 = () => { return "*_OWNER_*"}

//Error2
const smsMensError1 = () => { return `✰ 𝐑𝐄𝐏𝐎𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 ✰`} 
const smsMensError2 = () => { return `𝚃𝙷𝙴 𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙸𝚂 𝙵𝙰𝙸𝙻𝙸𝙽𝙶`} 

//config.js
const smsMeWait = () => { return '*💜 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐...*'} 

export default { lenguaje, smsAvisoRG, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
smsCreB, smsCreC, smsOfc1, smsOfc2, smsMensajeDonar, smsTituloDonar, smsPrivadoDonar, smsGrupoOfc1, smsGrupoOfc2, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsEstado1, smsEstado2, smsEstado3, smsEstado4, smsEstado5, smsEstado6, smsEstado7, smsVl1, smsVl2, smsVl3, smsVl4, smsVl5, smsVl6, smsBT1, smsBT2, smsBT3, smsBT4, smsBT5, smsBT6, smsBT7, smsBT8, smsBT9, smsYT1, smsYT2, smsYT3, smsYT4, smsYT5, smsYT6, smsYTA1, smsContacto1, smsContacto2, smsContacto3, smsContacto4, smsContacto5, smsContacto6, smsContacto7,
smsContacto8, smsYTV1, smsYTA2, smsYTV2, smsAntiView1, smsAntiView2, smsOpenai1, smsOpenai2, smsOpenai3, smsToimg, smsConURL, smsConURL1, smsConURL2, smsConURL3, smsConURL4, smsConURLERR1, smsConURLERR2,
smsConVIDEO, smsConVIDEO2, smsConVIDEO3, smsConGIF, smsConGIF2, smsConGIF3, smsConVN, smsConVN1, smsConVN2, smsConVN3, smsConVN4, smsTradc1, smsTradc2, smsTradc3, smsTradc4, smsWait, smsMediaFr, smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsDemott, smsDemott2, smsDemott3,
smsSetW, smsSetW2, smsSetB, smsSetB2, smsDest, smsNam1, smsNam2, smsNam3, smsGrupoPP, smsGrupoPP2, smsRestGp, smskick1, smskick2, smskick3, smskick4, smsGrupoOpen, smsGrupoClose, smstagaa, smsInsGC1, smsInsGC2, smsInsGC3, smsInsGC4, smsInsGC5, smsCreApoyo, smsCreInfo, smsResP1, smsResP2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5,
smsPropban6, smsPropban7, smsPropdesban1, smsPropdesban2, smsPropdesban3, smsPropdesban4, smsPropdesban5, smsAutoAdmin1, smsAutoAdmin2, smsUnbanCH1, smsUnbanCH2, smsUnbanCH3,
smsBioEd1, smsBioEd2, smsBioEd3, smsNameEd1, smsNameEd2, smsNameEd3, smsFotoEd1, smsFotoEd2, smsFotoEd3, smsBanChE, smsBlockUn1, smsBlockUn2, smsBlockUn3, smsRestarU1, smsRestarU2, smsRestarU3, smsJoin1, smsJoin2, smsReportEB1, smsReportEB2, smsReportEB3, smsReportEB3, smsReportEB4, smsReportEB5, smsGit1, smsGit2,
smsGit3, smsGit4, smsGit5, smsGit6, smsGit7, smsGit8, smsGit9, smsGit10, smsGit11, smsGit12, smsGit13, smsGit14, smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBConexionTrue3, smsJBCargando, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsFoldErr, smsJBCom1, smsJBCom2, smsJBCom3, smsJBCom4, smsJBDifu1, smsJBDifu2, smsChatGP1, smsChatGP2, smsChatGP3, smsPlugin1, smsPlugin2,
smsPlugin3, smsPlugin4, smsPlugin5, smsPlugin6, smsJoin, smsLeave, smsPerfil0, smsPerfil1, smsPerfil2, smsPerfil3, smsPerfil4, smsPerfil5, smsVerify0, smsVerify1, smsVerify2,
smsVerify3, smsVerify4, smsVerify5, smsVerify6, smsVerify7, smsVerify8, smsVerify9, smsSticker1, smsSticker2, smsSticker3, smsUnreg1, smsUnreg2, smsUnreg3, smsIDserie,
smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsConfi1bot, smsConfi2bot, smsConfi3bot, smsConfi4bot,
smsConfi5bot, smsConfi6bot, smsConfi7bot, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsHandler, smsHandlerLlamar, smsWaMismoEnlace, smsParaAdmins, smsParaAdYOw, smsParaOw, smsNoGg, smsInt1, smsInt2, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7,
smsCont8, smsCont9, smsCont10, smsCont11, smsAntiEliminar, smsControlAudio1, smsControlAudio2, smsControlAudio3, smsControlAudio4, smsControlAudio5, smsAudioEdit1,
smsAudioEdit2, smsAudioEdit3, smsAudioEdit4, smsAudioEdit5, smsAudioEdit6, smsAudioEdit7, smsAudioEdit8, smsAudioEdit9, smsAudioEdit10, smsAudioEdit11, smsAudioEdit12, smsAudioEdit13,
smsConfigBot, smsMenuTotal1, smsMenuTotal2, smsMenuTotal3, smsMenuTotal4, smsMenuTotal5, smsMenuTotal6, smsMenuTotal7, smsMenuTotal8, smsMenuTotal9,
smsMenuTotal10, smsMenuTotal11, smsMenuTotal12, smsMalused, smsMalused2, smsMalused3, smsMalError, smsMalError2, smsMalError3, smsMensError1, smsMensError2, smsMeWait }
