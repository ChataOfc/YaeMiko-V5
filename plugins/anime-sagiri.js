import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-7c28.up.railway.app/api/wallpaper/sagiri?apikey=APIKEY'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(sagiri)$/i
handler.tags = ['anime']
handler.help = ['sagiri']
handler.premium = false
handler.limit = true

export default handler