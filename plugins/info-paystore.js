let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '20'
let sp = '35'
let sv = '50'
//premium
let ph = '5'
let pn = '10'
let pp = '20'
let pv = '35'
let ppm = '50'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *HEMAT:* _${sh}k/grup (1 minggu)_
┊⫹⫺ *NORMAL:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *STANDAR:* _${ss}k/grup (2 bulan)_
┊⫹⫺ *PRO:* _${sp}k/grup (4 bulan)_                                                      
┊⫹⫺ *VIP:* = _${sv}k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *HEMAT:* _${ph}k (1 minggu)_
┊⫹⫺ *NORMAL:* _${pn}k (1 bulan)_
┊⫹⫺ *STANDAR:* _${pp}k (2 bulan)_
┊⫹⫺ *PRO:* _${pv}k (4 bulan)_                                               
┊⫹⫺ *VIP:* = _${ppm}k (12 bulan)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa Axis:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Gopay:* [${pgopay}]
• *Ovo:* [${povo}]
• *Link Aja:* [${plinkaja}]
• *Qris:* https://telegra.ph/file/bca3997662f73de79c0ea.jpg
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 STANDAR", rowId: '.order *Paket:* STANDAR • Premium', description: 'PRICE: ' + pp + 'k (2 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pv + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + ppm + 'k (12 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
