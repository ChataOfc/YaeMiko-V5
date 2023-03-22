let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
	var budy = (typeof m.text == 'string' ? m.text : '')
	let key = {}
     try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
    console.error(e)
}
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
	
if (m.isGroup && budy.length > 3000) {
	await conn.reply(m.chat, ` *「 ANTI SOFTEX 」* \n\nKang Softex Terdeteksi, ${m.sender}\n\n_*Pesan Akan Di Hapus!*_`.trim(), m)
	await delay(500)
	await this.sendMessage(m.chat, { delete: key })
	await delay(500)
	await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
	
	}
  return !0
}
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};



export default handler