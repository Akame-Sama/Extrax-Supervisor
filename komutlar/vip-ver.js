module.exports = {
  name: "vip-ver",
  code: `
  $giveRoles[$mentioned[1];$getServerVar[vip]]
  $color[$getServerVar[hex]]
  $addTimestamp
  $description[
  🎋 | <@$mentioned[1]> Kişisine Başarıyla Vip Verildi]
  $onlyPerms[admin;**Üzgünüm Admin Yetkin Yok**]
  $onlyIf[$mentioned[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:🎋 | Lütfen Birini Etiketle}]
  `
};
