import { createHash } from 'crypto'
   import PhoneNumber from 'awesome-phonenumber'
   import { canLevelUp, xpRange } from '../lib/levelling.js'
   import fetch from 'node-fetch'
   import fs from 'fs'
   const { levelling } = '../lib/levelling.js'
   import moment from 'moment-timezone'
   import { promises } from 'fs'
   import { join } from 'path'
   const time = moment.tz('Egypt').format('HH')
   let wib = moment.tz('Egypt').format('HH:mm:ss')
   //import db from '../lib/database.js'

   let handler = async (m, { conn, usedPrefix, command}) => {
       let d = new Date(new Date + 3600000)
       let locale = 'ar'
       let week = d.toLocaleDateString(locale, { weekday: 'long' })
       let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
       let _uptime = process.uptime() * 1000
       let uptime = clockString(_uptime)
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي`
   let videoUrl = 'https://telegra.ph/file/e27416d79b6803287c628.mp4'
   let user = global.db.data.users[who]
   let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
   let { min, xp, max } = xpRange(user.level, global.multiplier)
   let username = conn.getName(who)
   let math = max - xp
   let prem = global.prems.includes(who.split`@`[0])
   let sn = createHash('md5').update(who).digest('hex')
   let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
   let more = String.fromCharCode(8206)
   let readMore = more.repeat(850) 
  m.react('📁')
   let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
   let str = `*❅ ━━━━ » ✥ «﷽» ✥ « ━━━━ ❅
_│❑↫  الـوقـت : ${wib}_
_│❑↫  الـتاريـخ : ${date}_
*❅ ━━━━ » ✥ «﷽» ✥ « ━━━━ ❅

 ❐─━──━〘•⊰❉⊱•〙•━──━─❐
_│❑↫┋مرحبا بك يا : ${taguser}_
_│❑↫┋ اسـم الـبوت : kabani bot_
_│❑↫┋ حط قبل كل امر : ._
_│❑↫┋ الـمطور : ahmed aligue_
_│❑↫┋ البوت شغـال مـنذ : ${uptime}_
_│❑↫┋ الـمنـصه : heroku_
 ❐─━──━〘•⊰❉⊱•〙•━──━─❐
❐─━──━〘•⊰❉⊱•〙•━──━─❐
_┋↫❍┋التنزيل_
> لطلب قائمة التزيل
_┋↫❍┋الصوتيات_
> لطب قائمة الصوتيات (تحويل الصوت)
_┋↫❍┋الجروبات_
> لطلب قائمة الغروبات
_┋↫❍┋التحويل_
> لطلب قائمة التحويل
_┋↫❍┋قائمتي_
> لطلب قائمة المطور
_┋↫❍┋الترفيه_

> لطلب قائمة الترفيه
_│_                 
❐─━──━〘•⊰❉⊱•〙•━──━─❐
ملاحظة: _اكتب . بعدها اسم القائمة_\n\n_مثال_ : .التحويل
 ❐─━──━〘•⊰❉⊱•〙•━──━─❐

_【❖❘ حـقـوق الـمـطـور ❘❖】_
 ❐─━──━〘•⊰❉⊱•〙•━──━─❐
_│_
_│⇆ رقـم الـمطـور : ↯_ 
_│ده :https://wa.me/+212625457341_
_│_
 ❐─━──━〘•⊰❉⊱•〙•━──━─❐
   `.trim()
       conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };
   handler.help = ['main']
   handler.command = /^(الاوامر|menu|أوامر|اوامر)$/i

   export default handler
   function clockString(ms) {
       let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
       let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
       let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
       return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
