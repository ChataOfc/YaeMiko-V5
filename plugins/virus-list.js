let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
                      
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "🌙 Virtex 1", rowId: '.virtex1', description: 'Jangan di salah gunakan yaa' },
	    {title: "🌙 Virtex 2", rowId: '.virtex2', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 3", rowId: '.virtex3', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 4", rowId: '.virtex4', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 5", rowId: '.virtex5', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 6", rowId: '.virtex6', description: 'Jangan di salah gunakan yaa' },
    {title: "🌙 Virtex 7", rowId: '.virtex7', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 8", rowId: '.virtex8', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 9", rowId: '.virtex9', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 10", rowId: '.virtex10', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 11", rowId: '.virtex11', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 12", rowId: '.virtex12', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 13", rowId: '.virtex13', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 14", rowId: '.virtex14', description: 'Jangan di salah gunakan yaa' },
    {title: "🌙 Virtex 15", rowId: '.virtex15', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 16", rowId: '.virtex16', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 17", rowId: '.virtex17', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 18", rowId: '.virtex18', description: 'Jangan di salah gunakan yaa' },
	{title: "🌙 Virtex 19", rowId: '.virtex19', description: 'Jangan di salah gunakan yaa' },
    {title: "🌙 Virtex 20", rowId: '.virtex20', description: 'Jangan di salah gunakan yaa' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'Jangan di salah gunakan yaa' },
	    {title: "🔥Virus Power", rowId: '.powerlist', description: 'Jangan di salah gunakan yaa' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Click Here",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = true

export default handler
