let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *B A R C O D E* 」
│ ☝️🤓 *Scan Di Atas Coeg*
▧「 *P U L S A* 」
│ 🍀 *Im3:* [${global.ppulsa}]
│ 🌸 *Indosat:* [${global.ppulsa2}]
▧「 *E - M O N E Y* 」
│ 💮 *Dana:* [${global.pdana}]
│ ☘️ *Gopay:* [${global.pgopay}]
└──···
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/ea907c2c06bac1ac43d62.jpg', [`Menu`, '.menu'],m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

export default handler



	
	





	














