let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : PINO
║│➸ ```UMUR``` : 17thn
║│➸ ```ASAL``` : SEMARANG
║│➸ ```ISTAGRAM``` : http://instagram.com/xnoob_ganz
║│➸ ```WHATSAPP``` : http://wa.me/628895377665
╰────────❉
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
