module.exports =  {
  name:"erkek",
  aliases:["e","man"],
  code:`
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$mentioned[1]]]
$title[Kayıt İşlemi Başarılı....]
$description[
<@$mentioned[1]> Kişisine Başarıyla <@&$getServerVar[erkek]> Rolü Verildi  ve İsmi \`\$getServerVar[tag] $noMentionMessage[1] $getServerVar[sembol] $noMentionMessage[2]\`\ Olarak Değiştirildi
]
$channelSendMessage[$getServerVar[kayıtlog];
{color:$getServerVar[hex]}{thumbnail:$userAvatar[$mentioned[1]]}{title:Bir Kayıt Gerçekleştirildi}{description:
Kaydı Gerçekleştiren Yetkili : <@$authorID>

Kaydı Gerçekleştiren Yetkilinin Yetkili Puanı: \`\$math[$getUserVar[kpuan;$authorID]]\`\


Kaydı Gerçekleştiren Yetkilinin Erkek Kayıt Puanı: \`\$math[$getUserVar[epuan;$authorID]+1]\`\


Kaydın Türü : ♂️ Erkek

Kayıt Edilen Kullanıcı : <@$mentioned[1]>


Kayıt Edilen Kullanıcını Yaşı : \`\$noMentionMessage[2]\`\


Kayıt Edilen Kullanıcının İsmı : \`\$noMentionMessage[1]\`\
}
]
$channelSendMessage[$getServerVar[sohbet];
> Sunucumuza Hoşgeldin <@$mentioned[1]> İyi Vakit Geçirmen Dileğiyle
]
$setUserVar[kpuan;$math[$getUserVar[kpuan;$authorID]+1];$authorID]
$setUserVar[epuan;$math[$getUserVar[epuan;$authorID]+1];$authorID]
$takeRole[$mentioned[1];$getServerVar[kayıtsız]]
$giveRole[$mentioned[1];$getServerVar[erkek]]
$changeNickname[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] $getServerVar[sembol] $noMentionMessage[2]]
$onlyIf[$hasRole[$authorID;$getServerVar[erkek]]==true;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:<@$mentioned[1] Kişisi Tarandı Ve Erkek Rolü İle Kayıt Olduğu Ortaya Çıktk ***__Kayıt İşlemi Başarısız__***}]
$onlyIf[$noMentionMessage[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:Lütfen <@$mentioned[1]> Kişisinin İsmini Gir}]
$onlyIf[$noMentionMessage[2]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:Lütfen <@$mentioned[1]> Kişisinin Yaşını Gir}]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:<@$authorID> Birini Etiketleyemi Unutma!}]
$onlyForChannels[$getServerVar[kkanal];**Lütfen Bu İşlemi Kayıt Kanalında Uygulayın**]
$onlyForRoles[$getServerVar[kyetkili];**Üzgünüm Kanka Ama \`\$roleName[$getServerVar[kyetkili]]\`\ Rolün Yok**]
`
} 
