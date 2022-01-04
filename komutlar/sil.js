module.exports = {
  name:"sil",
  code:`
  $apiMessage[$channelID;;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | \`\$message[1]\`\ Mesaj Silmek İstediğine Emin Misin?};{actionRow: Eminim,2,1,sile: Hayır,2,2,silh}]
  $setServerVar[sil;$message[1]]
  $onlyIf[$message[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 |Lütfen Silinecek Mesaj Sayını Gir}]
  $onlyPerms[managemessages;**\`\Mesajları Yönet\`\ Yetkin Olmali!**]
  `} 
