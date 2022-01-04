module.exports = {
  name:"jail",
  code:`
  $giveRoles[$mentioned[1];$getUserVar[jailroller]]
  $channelSendMessage[$getServerVar[jaillog];<@$mentioned[1]> Kişisinin Jail Suresi Bitti Onu Kayıtsıza Attım]
  $sendDm[$mentioned[1];{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description: **$serverName** Sunucusundaki Cezan Bitti Seni Kayıtsıza Attım Lutfen Tekrar Kayıt Ol}]
  $setRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $wait[$message[1]]
  $setRoles[$mentioned[1];$getServerVar[jailrol]]
  $channelSendMessage[$getServerVar[jaillog];{color:$getServerVar[hex]}{description:
   **Bir Kişi Jaile Atıldı**
  
  Jaile Atan Kişi : <@$authorID>
  
  Jaile Atılan Kişi : <@$mentioned[1]>
  
  Jaile Atılma Zamanı : \`\$day/$hour:$minute:$second\`\
  
  
  Jaile Atılan Kişinin Ceza Puanı : \`\$sum[$getUserVar[cezap;$mentioned[1]];1]\`\
  
 
  Jail Süresi : \`\$message[1]\`\}{thumbnail:$userAvatar[$mentioned[1]]}{footer:$image[https://tenor.com/view/cat-jailbreak-squeeze-let-me-in-escaping-gif-15379656]}]
  $setUserVar[cezap;$sum[$getUserVar[cezap;$mentioned[1]];1];$mentioned[1]]
  $setUserVar[jailp;$sum[$getUserVar[mutep;$mentioned[1]];1];$mentioned[1]]
  $setUserVar[jailzmn;$day:$sum[$hour;3]:$minute:second]
  $setUserVar[jailroller;$joinSplitText[;];$mentioned[1]]$textSplit[$userRoles[$mentioned[1];ids];, ]
  $onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Lütfen Birini Etiketle}]
  $onlyIf[$message[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Lütfen Bir Süre Belirt
  1 Hafta : 1w
  1 Gün : 1d
  1 Saat : 1h
  1 Dakika : 1m
  1 Saniye : 1s
  }]
  $onlyIf[$hasRole[$authorID;$getServerVar[cezay]]==true;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Üzgünüm Ama \`\$roleName[$getServerVar[cezay]]\`\ Rolün Yok}]
  
  `
  }