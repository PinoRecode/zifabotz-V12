let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ════
├⬡  2 hari
├⬡ 7 hari
├⬡  PERMANEN
└═══════()════════
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *PULSA* : 085828764046
║│➸ *GOPAY*: 085828764046
║╰─────────
║╭─────────
*Sertakan bukti pembayaran*
▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║║▌║▌║█│
╰═══════════════════════
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '2 hari', description: "Rp3.000\nSewa bot selama 2hari.", rowId:".payment"},
        {title: '7hari', description: "Rp10.000\nSewa bot selama 7hari.", rowId:".payment"},
        {title: '8 bulan', description: "Rp20.000\nSewa bot PERMANEN", rowId:".payment"},
        {title: 'Owner', description: "Chat owner nya jika ingin sewa bot.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
