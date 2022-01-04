module.exports = {
 name:"isim-değiştir",
 code:`
$changeNickname[$mentioned[1];$noMentionMessage]
$addCmdReactions[🎉]
$onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:**Lütfen Birini Etiketle**}]
$onlyIf[$noMentionMessage!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:**Lütfen Kullanıcının Yeni Ismini Gir**}]
$onlyForRoles[$getServerVar[kyetkili];**Üzgünüm Ama \`\$roleName[$getServerVar[kyetkili]]\`\ Rolün Yoktu**]
`}