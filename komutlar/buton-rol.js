module.exports = {
  name:"buton-rol",
  code:`
  $if[$hasPerms[$authorID;manageroles]==false]
  Bu komut için \`Rolleri Yönet\` yetkisine sahip olmalısın.
  $else
  $if[$message[1]==ayarla]
  $if[$mentionedRoles[1]==]
  Bir rol belirtmelisin.
  $else
  $if[$mentionedChannels[1]==]
  Log kanalını ayarlamalısın.
  $else
  $setServerVar[btnRolMsgID;$apiMessage[$mentionedChannels[1];;{description:Rol almak için butona tıklayın.}{color:FFFFFF};{actionRow:Rol Al,2,1,btnRol};;yes]]
  $setServerVar[btnRolLog;$mentionedChannels[1]]
  $setServerVar[btnRol;$mentionedRoles[1]]
  $useChannel[$mentionedChannels[1]]
  $endif
  $endif
  $else
  $if[$message[1]==sıfırla]
  $if[$getServerVar[btnRol]==]
  Komutu ayarlamadan sıfırlayamazsın.
  $else
  $setServerVar[btnRolMsgID;]
  $setServerVar[btnRolLog;]
  $setServerVar[btnRol;]
  $title[Sistem sıfırlandı.]
  $color[FFFFFF]
  $deleteMessage[$getServerVar[btnRolLog];$getServerVar[btnRolMsgID]]
  $endif
  $else
  \`sıfırla\` veya \`ayarla\` yazmalısın.
  $endif
  $endif
  $endif
  `
} 

