const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

let str = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : PINO
*🎨 Umur* : 18
*📈 Status* : Busy
*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @xnoob_ganz
*🇫  Facebook* : -
*🏮 Chanel Youtube* : PINO MODZ
  ⬣━〔Powered By Pino〕━⬣
©️ zifabotz`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = await (await fetch(fla + 'OWNER')).buffer()
  image = (await conn.prepareMessage('6285826114932@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "OWNER BOT WA",
        "description": '\n' + watermark + '\n' + str,
        "retailerId": "Thanks For botwhatsapp !",
        "url": "▌│█║▌║▌║║▌║▌║█│▌",
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6285828764046@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)
}
handler.help = ['owner2']
handler.tags = ['utama']
handler.command = /^(owner2)$/

module.exports = handler

let wm = global.botwm
