import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
  let delirius = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`)
  let paisdata = delirius.data.result
  let mundo = paisdata ? `${paisdata.name} ${paisdata.emoji}` : 'Desconocido'
  let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🍭 Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg*`)
  if (!Reg.test(text)) return m.reply(`🌹 Formato incorrecto.\n\nUso del comamdo: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.666*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🚩 El nombre no puede estar vacío.')
  if (!age) return m.reply('🚩 La edad no puede estar vacía.')
  if (name.length >= 100) return m.reply('🚩 El nombre es demasiado largo.' )
  age = parseInt(age)
  if (age > 100) return m.reply('👴🏻 Wow el abuelo quiere jugar al bot.')
  if (age < 5) return m.reply('🚼  hay un abuelo bebé jsjsj. ')
  user.name = name + '✓'.trim()
  user.age = age
  user.regTime = + new Date      
  user.registered = true
  global.db.data.users[m.sender].money += 100
  global.db.data.users[m.sender].cookies += 40
  global.db.data.users[m.sender].exp += 300
  global.db.data.users[m.sender].joincount += 20
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)
let regbot = `👤 *التسجيل* 👤\n`
regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
regbot += `「💭」المستخدم: ${name}\n`
regbot += `「✨️」العمر: ${age} años\n`
regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
regbot += `「🎁」الجوائز:\n`
regbot += `• 40 كوكيز 🍪\n`
regbot += `• 20 عملة 🪙\n`
regbot += `• 300 اكسبي ✨️\n`
regbot += `• 100 النقود 💸\n`
regbot += `•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`
regbot += `${packname}`
await m.react('📩')
await conn.sendMini(m.chat, '⊱『✅𝆺𝅥 تم التسجيل(𝗔) 𝆹𝅥✅』⊰', textbot, regbot, imagen1, imagen1, channel, m)
let chtxt = `
👤 *Usuario* » ${m.pushName || 'Anónimo'}
🌎 *Pais* » ${mundo}
🗃 *Verificación* » ${user.name}
🌺 *Edad* » ${user.age} años
📆 *Fecha* » ${moment.tz('America/Bogota').format('DD/MM/YY')}
☁️ *Número de registro* »
⤷ ${sn}
`.trim()
await conn.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Un usuario nuevo en mi base de datos!',
thumbnailUrl: perfil,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}
handler.help = ['تسجيل']
handler.tags = ['rg']
handler.command = ['تسجيل', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
