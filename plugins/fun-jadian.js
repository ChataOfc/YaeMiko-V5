let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`\n\n\n${toM(a)} 💖 ${toM(b)}\n\n\n`, null, {
        mentions: [a, b]
    })
}
handler.help = ['jadian']
handler.tags = ['jadian']
handler.command = ['jadian']
handler.group = true
handler.limit = true

export default handler
