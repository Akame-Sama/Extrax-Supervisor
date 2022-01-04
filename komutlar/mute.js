module.exports = {
  name:"mute",
  code:`
  $channelSendMessage[$getServerVar[mutelog];<@$mentioned[1]> Kişisinin Mute Suresi Bitti Onu Kayıtsıza Attım]
  $sendDm[$mentioned[1];{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description: **$serverName** Sunucusundaki Cezan Bitti Seni Kayıtsıza Attım Lutfen Tekrar Kayıt Ol}]
  $setRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $wait[$message[1]]
  $setRoles[$mentioned[1];$getServerVar[muterol]]
  $channelSendMessage[$getServerVar[mutelog];{color:$getServerVar[hex]}{description:
   **Bir Kişi Mutelendi**
  
  Muteleyen Kişi : <@$authorID>
  
  Mutelenen Kişi : <@$mentioned[1]>
  
  Mutelenme Zamanı : \`\$day/$hour:$minute:$second\`\
  
  
  Mutelenen Kişinin Ceza Puanı : \`\$sum[$getUserVar[cezap;$mentioned[1]];1]\`\
  
 
  Mute Süresi : \`\$message[1]\`\}{thumbnail:$userAvatar[$mentioned[1]]}{footer:$image[https://tenor.com/view/squid-game-can-i-mute-you-mute-press-button-shh-gif-23373593]}
  $setUserVar[cezap;$sum[$getUserVar[cezap;$mentioned[1]];1];$mentioned[1]]
  $setUserVar[mutep;$sum[$getUserVar[mutep;$mentioned[1]];1];$mentioned[1]]
  $setUserVar[mutezmn;$day:$sum[$hour;3]:$minute:second]
  $onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Lütfen Birini Etiketle}]
  $onlyIf[$message[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Lütfen Bir Süre Belirt
  1 Hafta : 1w
  1 Gün : 1d
  1 Saat : 1h
  1 Dakika : 1m
  1 Saniye : 1s
  }]
  $onlyIf[$hasRole[$authorID;$getServerVar[cezay]]==true;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Üzgünüm Ama \`\$roleName[$getServerVar[cezay]]\`\ Rolün Yok}]]
  
  `
  }