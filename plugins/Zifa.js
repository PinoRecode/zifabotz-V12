let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_sc yg bot gunakan_* 
*📮: SC NO ENC! Harap tidak dijual belikan*
https://github.com/nurutomo
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'SCRIPT')).buffer(), ext, '©botwhatsapp', 'SC LAIN', '.sclain', 'OWNER', '.owner2', m)

}
handler.customPrefix = /^(sc|.sc|script|.script)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
