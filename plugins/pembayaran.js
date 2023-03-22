let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
𝙋𝙖𝙮𝙢𝙚𝙣𝙩
└──··➪ 𝗗𝗮𝗻𝗮 : 085731947500
└──··➪ 𝗚𝗼𝗽𝗮𝘆 : 085731947500
└──··➪ 𝗜𝗻𝗱𝗼𝘀𝗮𝘁 : 085749543572
└──··➪ 𝗜𝗠3 : 085731947500
└──··➪ 𝗤𝗥𝗜𝗦 : 𝗦𝗰𝗮𝗻 𝗗𝗶 𝗔𝘁𝗮𝘀

✍︎𝙉𝙤𝙩𝙚 : 𝙅𝙞𝙠𝙖 𝙎𝙪𝙙𝙖𝙝 𝙏𝙧𝙖𝙣𝙨𝙛𝙚𝙧 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙎𝙘𝙧𝙚𝙚𝙣𝙎𝙝𝙤𝙩 𝘿𝙖𝙣 𝙆𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙆𝙚 𝙊𝙬𝙣𝙚𝙧
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/13fc3ac3bfb1fdb28f4be.jpg', [`𝙼𝚎𝚗𝚞`, '.menu'],m)
}
handler.help = ['pembayaran']
handler.tags = ['info']
handler.command = /^(pembayaran)$/i

handler.register = false
export default handler