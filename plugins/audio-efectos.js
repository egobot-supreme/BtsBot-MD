import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
if (/bass/.test(command)) set = '-af "equalizer=f=40:width_type=h:width=50:g=14"' 
if (/blown/.test(command)) set = '-af "acrusher=.1:1:64:0:log, lowpass=f=3000, highpass=f=200, equalizer=f=1000:width_type=h:width=50:g=6, areverse, acrusher=.1:1:64:0:log, lowpass=f=3000, highpass=f=200, equalizer=f=1000:width_type=h:width=50:g=6, areverse"' 
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af "compand=attacks=0:points=-90/-90|-20.0/-5.0|0/-3.0|20.0/-1.0:soft-knee=6:gain=3,volume=9dB"'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100,volume=3dB"'
if (/fat/.test(command)) set = '-af "atempo=1.6,asetrate=22100,equalizer=f=1000:width_type=h:width=50:g=3,volume=4dB"' 
if (/nightcore/.test(command)) set = `-filter:a "atempo=1.06,asetrate=44100*1.25,firequalizer=gain_entry='entry(0,6);entry(250,0);entry(500,-3);entry(1000,-3);entry(2000,-2);entry(4000,0);entry(8000,2);entry(16000,3)',equalizer=f=800:t=h:width_type=h:width=50:g=20"`
if (/reverse/.test(command)) set = '-filter_complex "areverse, highpass=f=200, lowpass=f=8000, afftdn"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75,volume=5dB"'
if (/slow/.test(command)) set =  '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100, equalizer=f=1000:width_type=h:width=50:g=3, volume=4dB"'
if (/audio8d/.test(command)) set = '-af apulsator=hz=0.125:amount=1'   
if (/echo/.test(command)) set = '-af aecho=0.8:0.9:1000:0.3'
if (/distortion/.test(command)) set = '-af "acompressor=threshold=0.1:ratio=20:attack=1:release=10,acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"'
if (/pitch/.test(command)) set = '-af "reverb=80:100:100:100:0:0"'
if (/reverb/.test(command)) set = '-af "aecho=0.8:0.9:1000:0.3, aecho=0.8:0.9:500:0.5, aecho=0.8:0.9:250:0.7"'//
if (/flanger/.test(command)) set = '-af "asetrate=48000*1.5,atempo=1.5,asetrate=48000,equalizer=f=8000:width_type=h:width=50:g=6,apulsator=hz=0.125:amount=1"'
if (/apulsator/.test(command)) set = '-af apulsator=hz=0.125'
if (/tremolo/.test(command)) set = '-af tremolo=f=6.0:d=0.8'
if (/chorus/.test(command)) set = '-af chorus=0.7:0.9:55:0.4:0.25:2'
if (/audio/.test(mime)) {
let ran = getRandom('.mp3')
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
await unlinkSync(media)
if (err) return m.reply(`*❮❤️ ERROR ❤️❯➣ 𝑯𝑼𝑩𝑶 𝑼𝑵 𝑷𝑹𝑶𝑩𝑳𝑬𝑴𝑨, 𝑰𝑵𝑻𝑬𝑵𝑻𝑬 𝑪𝑶𝑵 𝑶𝑻𝑹𝑶 𝑨𝑼𝑫𝑰𝑶, 𝒀 𝑺𝑰 𝑬𝑳 𝑷𝑹𝑶𝑩𝑳𝑬𝑴𝑨 𝑺𝑰𝑮𝑼𝑬, 𝑹𝑬𝑷𝑶𝑹𝑻𝑨 𝑬𝑺𝑻𝑬 𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑨𝑳 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 ${usedPrefix + command} 𝑷𝑨𝑹𝑨 𝑴𝑨𝑺 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑶 𝑪𝑶𝑵𝑺𝑬𝑮𝑼𝑰𝑹 𝑻𝑼 𝑳𝑼𝑮𝑨𝑹 𝑫𝑬 𝑶𝑾𝑵𝑬𝑹, 𝑷𝑼𝑬𝑫𝑬𝑺 𝑰𝑹 𝑨𝑸𝑼𝑰 𝑨 𝑷𝑬𝑫𝑰𝑹𝑳𝑬 𝑨 𝑮𝑼𝑨𝑹𝑫𝑰𝑨𝑵 𝑩𝑶𝑻: ${global.asistencia2}*`)
let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})})
} else throw `*❮💜❯➣ 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑨 𝑨 𝑼𝑵 𝑨𝑼𝑫𝑰𝑶 𝑶 𝑵𝑶𝑻𝑨 𝑫𝑬 𝑽𝑶𝒁, 𝑷𝑨𝑹𝑨 𝑨𝑷𝑳𝑰𝑪𝑨𝑹 𝑬𝑳 𝑬𝑭𝑬𝑪𝑻𝑶 𝑼𝑺𝑨𝑵𝑫𝑶 𝑬𝑺𝑻𝑬 𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑨 𝑪𝑶𝑵𝑻𝑰𝑵𝑼𝑨𝑪𝑰𝑶𝑵: ${usedPrefix + command}*`
} catch (e) {
throw e
}}
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk|audio8d|echo|distortion|reverb|pitch|flanger|apulsator|tremolo|chorus)$/i
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
