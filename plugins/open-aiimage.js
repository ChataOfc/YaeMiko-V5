import fetch from 'node-fetch'

let handler = async (m, { conn, command, text }) => {
    if (!text) return m.reply(`Format Salah!\n\ncontoh: *.cariimg titid*`)
    let img = await fetch(API('lol', '/api/dall-e', { apikey: lolkey, text: text }))
   if (img.status !== 200) return m.reply(`Permintaan Sedang Padat !\nCobalah Beberapa Saat Lagi`)
    await m.reply(`_Sedang Mencari Img..._`)
   await conn.sendButtonImg(m.chat, await(img).buffer(), `Yang Kamu Cari: *${text}*`, wm, 'Cari Lagi', `.cariimg ${text}`, 0)
}
handler.help = ['cariimg <text>']
handler.tags = ['fun']
handler.command = /^(cariimg)$/i

export default handler