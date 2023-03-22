let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = fla.getRandom()
let text = `*Nyari SC ya kack?, Chat Ownernya YaeMiko ya🤗*
    
📮 Tekan Button di bawah

🪀 Group Official :
https://chat.whatsapp.com/IRRkLJqImnuB6lCjGzyME0
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://wa.me/6285731947500'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler