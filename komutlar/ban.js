module.exports = {
name:"ban",
aliases: ["yasakla"],
code:`
$sendDm[$mentioned[1];{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:**$serverName[$guildID]** Adlı Sunucudan Banlandın}]
$author[$userTag[$mentioned[1]] Adlı Kullanıcı Yasaklandı]

$footer[$image[https://images-ext-1.discordapp.net/external/wjhkz7qn2urFmLTeG7TxXu-Kv-DzJjmNjT5HEFT_j7Y/https/media.tenor.com/images/5036777eaafc71e79b45b7783c4e3bd8/tenor.gif]]
$description[
Yasakla Komutunu Kullanan Yetkili: <@$authorID>,

Yasakla Komutu Uygulanan Kullanıcı: **$userTag[$mentioned[1]]**

Kullanıcının Yasaklanma Sebebi: $noMentionMessage]

$ban[$mentioned[1];$noMentionMessage;1]
$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];Yasaklamak İstediğin Kullanıcının Rol Pozisyonu Benden Yüksek!]

$onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];Yasaklamak İstediğin Kullanıcı Rol Pozisyonu Olarak Senden Yüksek!]

$onlyBotPerms[ban;Bu Komutu Uygulamam İçin \`\Üyeleri Yasakla\`\ İzinim Bulunmalı!]

$onlyIf[$noMentionMessage!=;**Bir Sebep Gir!**]

$onlyIf[$mentioned[1]!=;Yasaklamamı İstediğin Kullanıcıyı Etiketle!]

$onlyForRoles[$getServerVar[banhummer];$reply[$messageID;Üzgünüm Ama \`\$roleName[$getServerVar[banhummer]]\`\ Rolüne Sahip Olmalısın]]

$color[$getServerVar[hex]]
`
}   
