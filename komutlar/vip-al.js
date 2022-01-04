module.exports = {
  name: "vip-al",
  code: `
  $takeRoles[$mentioned[1];$getServerVar[vip]]
  $color[$getServerVar[hex]]
  $addTimestamp
  $description[
  🎋 | <@$mentioned[1]> Kişisinden Başarıyla Vip Alındı]
  $onlyPerms[admin;**Üzgünüm Admin Yetkin Yok**]
  
  $onlyIf[$mentioned[1]!=;$reply[$messageID;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Lütfen Birini Etiketle}]
  `
};
