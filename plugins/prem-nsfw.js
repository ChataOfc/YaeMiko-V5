//   •-- MADE BY --•
//   | FANGZ
//   •-------------•
// CREDITS ! JANGAN DIUBAH, JANGAN DIHAPUS !!


//------ FUNCTION & MODULE
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
     }
   
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
import neko from 'nekos.life'
//---------------------------------
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	
	// ------- OTHER ------
  if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '📣 Fitur NSFW Belum dinyalakan di group',botdate, null, [['📛ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------

//---------------------SOURCE

//> Default
let res = 'https://saipulanuar.ga/api/nsfwloli'
let api = '?apikey=danzz'

//> Lolhuman
let resl = 'https://saipulanuar.ga/api/nsfwloli'
let apil = '?apikey=danzz'

//> Xteam
let xres = 'https://saipulanuar.ga/api/nsfwloli'
let xapi = '?apikey=danzz'
//--------------------------------

// ••••••••••••••••• OPTIONS •••••••••••

// > Example :
// OPTIONS
// ❗ false = Free
// ❗ true = premium

//+- Contoh: -+
// let nsfww = (ch == true ? false : <Options, pilih true atau false>)

//### *FREE* ###
// let nsfww = (ch == true ? false : false)

//### *PREM* ###
// let nsfww = (ch == true ? false : true)

let ahegao = (ch == true ? false : true)
let anal = (ch == true ? false : true)
let ass = (ch == true ? false : true)
let blowjob = (ch == true ? false : true)
let cums = (ch == true ? false : true)
let ecchi = (ch == true ? false : true)
let ero = (ch == true ? false : true)
let erofeet = (ch == true ? false : true)
let erogirl = (ch == true ? false : true)
let holoero = (ch == true ? false : true)
let erokitsune = (ch == true ? false : true)
let eroneko = (ch == true ? false : true)
let eroyuri = (ch == true ? false : true)
let feet = (ch == true ? false : true)
let femdom = (ch == true ? false : true)
let futanari = (ch == true ? false : true)
let girlsolo = (ch == true ? false : true)
let hentai = (ch == true ? false : true)
let holo = (ch == true ? false : true)
let kitsune = (ch == true ? false : true)
let kuni = (ch == true ? false : true)
let loli = (ch == true ? false : true)
let manga = (ch == true ? false : true)
let milf = (ch == true ? false : true)
let mstrb = (ch == true ? false : true)
let neko = (ch == true ? false : true)
let panties = (ch == true ? false : true)
let pussy = (ch == true ? false : true)
let oppai = (ch == true ? false : true)
let spank = (ch == true ? false : true)
let tentacles = (ch == true ? false : true)
let thighs = (ch == true ? false : true)
let tits = (ch == true ? false : true)
let trap = (ch == true ? false : true)
let uniform = (ch == true ? false : true)
let waifu = (ch == true ? false : true)
let yaoi = (ch == true ? false : true)
let yuri = (ch == true ? false : true)
//-------------------------------------

//---------- TEXT -----------
let next = 'ɴ ᴇ x ᴛ'
let fot = botdate
let txtprem = 'Fitur ini khusus User Premium\nUntuk menggunakan fitur ini upgrade premium, hubungi owner untuk membeli premium'
let p = '🅟 | '
let f = 'Ⓕ | '

let tekk = `\`\`\`⟩ Random Image Nsfw ${args[0] ? args[0].capitalize() : false}\`\`\` `
  let teks = `┊ Silahkan Pilih Dibawah!
┊› Atau ketik ${usedPrefix}nsfw blowjob 
❏──···––`
//---------------------------

//--------- BUTTON SELECTIONS ----------
const sections = [
   {
	title: '🎴 N S F W',
	rows: [
	{title: `${ ahegao == true ? p : f}` + "A ❗ Ahegao", rowId: ".nsfw ahegao"},
	{title: `${ anal == true ? p:f}` + "A ❗ Anal", rowId: ".nsfw anal"},
	{title: `${ ass == true ? p:f}` + "A ❗ Ass", rowId: ".nsfw ass"},
	{title: `${ blowjob == true ? p:f}` + "B ❗ BlowJob", rowId: ".nsfw blowjob"},
	{title: `${ cums == true ? p:f}` + "C ❗ Cumsluts", rowId: ".nsfw cums"},
	{title: `${ ecchi == true ? p:f}` + "E ❗ Ecchi", rowId: ".nsfw ecchi"},
	{title: `${ ero == true ? p:f}` + "E ❗ Ero", rowId: ".nsfw ero"},
	//{title: `${ erofeet == true ? p:f}` + "E ❗ Ero Feet", rowId: ".nsfw erofeet"},
	{title: `${ erogirl == true ? p:f}` + "E ❗ Ero Girl", rowId: ".nsfw erogirl"},
	{title: `${ holoero == true ? p:f}` + "E ❗ Ero Holo", rowId: ".nsfw holoero"},
	//{title: `${ erokitsune == true ? p:f}` + "E ❗ Ero Kitsune", rowId: ".nsfw erokitsune"},
	//{title: `${ eroneko == true ? p:f}` + "E ❗ Ero Neko", rowId: ".nsfw eroneko"},
	//{title: `${ eroyuri== true ? p:f}` + "E ❗ Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: `${ feet == true ? p:f}` + "F ❗ Feet", rowId: ".nsfw feet"},
	{title: `${ femdom == true ? p:f}` + "F ❗ Femdom", rowId: ".nsfw femdom"},
	//{title: `${ futanari == true ? p:f}` + "F ❗ Futanari", rowId: ".nsfw futanari"},
	//{title: `${ girlsolo == true ? p:f}` + "G ❗ Girl Solo", rowId: ".nsfw girlsolo"},
	{title: `${ hentai == true ? p:f}` + "H ❗ Hentai", rowId: ".nsfw hentai"},
	{title: `${ holo == true ? p:f}` + "H ❗ Holo", rowId: ".nsfw holo"},
	//{title: `${ kitsune == true ? p:f}` + "K ❗ Kitsune", rowId: ".nsfw kitsune"},
	//{title: `${ kuni == true ? p:f}` + "K ❗ Kuni", rowId: ".nsfw kuni"},
	{title: `${ loli == true ? p:f}` + "L ❗ Loli", rowId: ".nsfw loli"},
	{title: `${ manga== true ? p:f}` + "M ❗ Manga", rowId: ".nsfw manga"},
	{title: `${ milf == true ? p:f}` + "M ❗ Milf", rowId: ".nsfw milf"},
	{title: `${ mstrb == true ? p:f}` + "M ❗ Mstrb", rowId: ".nsfw mstrb"},
	{title: `${ neko == true ? p:f}` + "N ❗ Neko", rowId: ".nsfw neko"},
	{title: `${ oppai == true ? p:f}` + "O ❗ Oppai", rowId: ".nsfw oppai"},
	{title: `${ panties == true ? p:f}` + "P ❗ Panties", rowId: ".nsfw panties"},
	{title: `${ pussy == true ? p:f}` + "P ❗ Pussy", rowId: ".nsfw pussy"},
	//{title: `${ spank == true ? p:f}` + "S ❗ Spank", rowId: ".nsfw spank"},
	{title: `${ tentacles == true ? p:f}` + "T ❗ Tentacles", rowId: ".nsfw tentacles"},
	{title: `${ thighs == true ? p:f}` + "T ❗ Thighs", rowId: ".nsfw thighs"},
	//{title: `${ tits == true ? p:f}` + "T ❗ Tits", rowId: ".nsfw tits"},
	{title: `${ trap == true ? p:f}` + "T ❗ Trap", rowId: ".nsfw trap"},
	{title: `${ uniform == true ? p:f}` + "U ❗ Uniform", rowId: ".nsfw uniform"},
	{title: `${ waifu == true ? p:f}` + "W ❗ Waifu", rowId: ".nsfw waifu"},
	{title: `${ yaoi == true ? p:f}` + "Y ❗ Yaoi", rowId: ".nsfw yaoi"},
	{title: `${ yuri == true ? p:f}` + "Y ❗ Yuri", rowId: ".nsfw yuri"},
	]
    },
]

const listMessage = {
  text: teks,
  footer: '┏- - - - -  Info - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Gratis\n┗•',
  title: `❏––––[ *NSFW* ]–––`,
  buttonText: "- -NSFW- -",
  sections
}
//--------------------------------


//------------ CASE NSFW ! ------------
  try {
    if (/(nsfw|hentai)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
case 'ahegao':
        if (ahegao == true) { 
	    if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		}
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
          break
          
case 'anal':
         if (anal == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
         }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
           break
            
case 'ass':
         if (ass == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
             
case 'blowjob':
         if (blowjob == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let bj = await(await fetch(`https://api.waifu.pics/nsfw/blowjob`)).json()
          conn.sendButton(m.chat, tekk, fot, bj.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'cums':
         if (cums == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ecchi':
         if (ecchi == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ero':
         if (ero == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erofeet':
         if (erofeet == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erogirl':
         if (erogirl == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holoero':
         if (holoero == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erokitsune':
         if (erokitsune == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroneko':
         if (eroneko == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroyuri':
         if (eroyuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'feet':
         if (feet == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'femdom':
         if (femdom == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'futanari':
         if (futanari == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'girlsolo':
         if (girlsolo == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'hentai':
         if (hentai == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holo':
         if (holo == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kitsune':
         if (kitsune == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kuni':
         if (kuni == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'loli':
         if (loli == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'manga':
         if (manga == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'milf':
         if (milf == true) { 
         if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'mstrb':
         if (mstrb == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'neko':
         if (neko == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'oppai':
         if (oppai == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'panties':
         if (panties == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'pussy':
         if (pussy == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'spank':
         if (spank == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tentacles':
         if (tentacles == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tits':
         if (tits == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'thighs':
         if (thighs == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'trap':
         if (trap == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let tr = await(await fetch(`https://api.waifu.pics/nsfw/trap`)).json()
          conn.sendButton(m.chat, tekk, fot, tr.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'uniform':
         if (uniform == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'waifu':
         if (waifu == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let wf = await(await fetch(`https://api.waifu.pics/nsfw/waifu`)).json()
          conn.sendButton(m.chat, tekk, fot, wf.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yaoi':
         if (yuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yuri':
         if (yuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
default:
         return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
        } else if (/hentong/i.test(command)) {
               const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
               switch (_type) {
           case 'A':
               break
           case '':
               break
default:
          return conn.sendButton( m.chat, caption, fot, null, [`⋮☰ Menu`, `.menu`], m)
         }
        }
       } catch (err) {
                      m.reply("Error\n\n\n" + err.stack)
      }
//-----------------------------

}

handler.help = ['nsfw (tipe)', 'hentai (tipe)']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw|hentai)/i

export default handler
