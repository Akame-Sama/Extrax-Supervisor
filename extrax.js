const aoi = require('aoi.js');
const bot = new aoi.Bot({
token: process.env.token,
  prefix:["x!","y!","z!"]
});

bot.loadCommands("./komutlar");


bot.onUserUpdate()
bot.onBanAdd()
bot.onBanRemove()
bot.onInviteCreate()
bot.onInviteDelete() 
bot.onEmojiCreate()
bot.onEmojiDelete()
bot.onChannelDelete()
bot.onChannelCreate()
bot.onChannelUpdate()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onRoleUpdate()
bot.onLeave()
bot.onJoined()
bot.onGuildLeave()
bot.onGuildJoin()
bot.onMessageUpdate()
bot.onMessageDelete()
bot.onPresenceUpdate()
bot.onVoiceStateUpdate()
bot.onMessage({
  respondToBots: true
})
bot.interactionCommand()

bot.readyCommand({
  channel:"",
  code:`
$log[$userTag[$clientID] İsmiyle Giriş Yaptım
Istatistik
Sunucu: $serverCount
Kullanıcı Sayım : $allMembersCount

]
`
})


bot.variables({
  hex:"c6ebff",
  ///Embedlar Için Renk Kodunuz
  kkanal:"921982386437259304", 
  ////Kayıt Kanal İD
  kyetkili:"911081324226416660",
  ////Kayıt Yetkili Rol ID
  sohbet:"916268736158265344",
  ///Sohbet Kanal ID
  kayıtlog:"926388596863270912",
  ///Kayit Log ID
  otorollog:"921982386437259304",
  ////Otorollog Kanal ID
  kpuan:"0",
  ///Dokunma(Kayit Puan)
  epuan:"0",
  ///Dokunma(Erkek Kayit Puan)
  kızpuan:"0",
  ////Dokunma(Kadın kayit Puan)
  sembol:"|",
  //// Isim Ile Yasin Ortasina Konulan Sey!
  ///Orhan sembol( | ) 14 Gibi
  tag:"&",
  ////Taginiz
  tagrol:"921959306197344278",
  ///Tag Alinca Verilecek Rol ID
  taglog:"911607426019627058",
  ///Tag Alinca Logun Tutulacagi Kanal Id
  kız:"922675590883074058",
  ////Kız Rol Id
  erkek:"921618651789033472",
  ////Erkek Rol Id
  kayıtsız:"923150745111523358",
  ///Kayitsiz Rol ID
  seslog:"915570170615959552",
  ////Ses Log Kanal ID 
  snipe1:"",
  ///Dokunma(Snipe)
  snipe2:"",
  ///Dokunma(Snipe)
  snipe3: "",
  ///Dokunma(Snipe)
  snipe4: "",
  ///Dokunma(Snipe)
  endstamp:"0",
  ///Dokunma(Çekiliş)
  hoster:"",
  ///Dokunma(Çekiliş)
  prize:"",
  ////Dokunma(Çekiliş)
  joined:"0",
  ////Dokunma(Çekiliş)
  joinedusers:"",
  ////Dokunma(Cekiliş)
  ended:"false",
  ////Dokunma(Çekiliş)
  sil:"0",
  ////Dokunma(Sil Komutu)
  btnRol:"",
  ////Dokunma(ButonRol Komutu)
  btnRolLog:"",
  /////Dokunma(ButonRol Komutu)
  btnRolMsgID:"",
  ////Dokunma(ButonRol Komutu)
  banhummer:"",
  ///Ban Hummer Rol İD 
  vip:"",
  ///Vip Rol ID
  mutelog:"926388596863270912",
  ////Mute Log Kanal ID
  muterol:"921618651789033472",
  ////Mute Rol ID
  cezay:"911081324226416660",
  ////Mute Ve Jail Komutlarını Kullanacak Yetkili ID
  cezap:"0",
  mutep:"0",
  mutezmn:"",
  jailzmn:"",
  jailroller:"",
  //////Dokunma(Jail)
  jailp:"",
  jaillog:"926388596863270912",
  ////Jail Log Kanal ID
  jailrol:"921618651789033472",
  ////Jail Rol ID

 
})

 ////----Ses Log----////

bot.voiceStateUpdateCommand({
channel:"$getServerVar[seslog]",
code:`
<#$newState[channelID]>
$author[$userTag[$newState[id]] Bir Ses Kanalına Girdi!;$serverIcon]
$description[> **Üye:** <@$newState[id]>
> **Kanal Adı:** \`$newState[channelName]\`
> **Girdiği Saat:** \`$sum[3;$hour]:$minute:$second\`
]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$newState[id]]]
$onlyIf[$newState[channelID]!=;]
$onlyIf[$oldState[channelID]==;]
`
})
bot.voiceStateUpdateCommand({
channel:"$getServerVar[seslog]",
code:`
<#$oldState[channelID]>
$author[$userTag[$oldState[id]] Bir Ses Kanalından Çıktı!;$serverIcon]
$description[
> **Üye:** <@$oldState[id]>
> **Kanal Adı:** \`$oldState[channelName]\`
> **Çıktığı Saat:** \`$sum[3;$hour]:$minute:$second\`
]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$oldState[id]]]
$onlyIf[$newState[channelID]==;]
$onlyIf[$oldState[channelID]!=;]
`
}) 
 ////----Ses Log----////


////----Tag Rol----////

bot.command({
name:"$alwaysExecute",
code:`
$forEachMember[tagrol]
$serverCooldown[2m]
`})
bot.awaitedCommand({
name:"tagrol",
code:`
$if[$checkContains[$toLowercase[$userTag];$getServerVar[tag]]==true]
$channelSendMessage[$getServerVar[taglog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye tagımızı aldı, <@&$getServerVar[tagrol]> rolü verildi!}{color:GREEN}{thumbnail:$authorAvatar}]

$giveRoles[$authorID;$getServerVar[tagrol]]
$onlyIf[$hasRole[$authorID;$getServerVar[tagrol]]==false;]
$onlyIf[$hasRole[$authorID;$getServerVar[jailrol]]==false;]
$suppressErrors[<@$ownerID>, Üyelere rolü veremiyorum rolümü tag rolünün üstüne alın yada tüm sistemi tekrar kurun!]
$endif

$if[$checkContains[$toLowercase[$userTag];$getServerVar[tag]]==false]
$channelSendMessage[$getServerVar[taglog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye tagımızı bıraktı, <@&$getServerVar[tagrol]> rolü ve yetkili rolleri alındı!}{color:RED}{thumbnail:$authorAvatar}]

$takeRoles[$authorID;$getServerVar[tagrol]]
$onlyIf[$hasRole[$authorID;$getServerVar[tagrol]]==true;]
$suppressErrors[<@$ownerID>, Üyelerden rolü alamıyorum rolümü tag rolünün üstüne alın yada tüm sistemi tekrar kurun!]
$endif
`
})  

/////---Tag Rol---/////
/////----Snipe----/////

bot.deletedCommand({
  channel:"$channelID",
  code:`
  $setServerVar[snipe1;$authorID]
  $setServerVar[snipe2;$message]
  $setServerVar[snipe3;$channelID]
$setServerVar[snipe4;$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak];February;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık] $year - $sum[3;$hour]:$minute]
  $onlyIf[$isBot[$authorID]==false;]
  `
  }) 

/////----Snipe----/////
/////----Güzel Söz---////

bot.loopCommand({
code: `
$randomMention **$randomText[Ay Işığı Gibi Parlıyorsun;Bügun Boşmusun?;Hayat Senle Beni Sonunda Buluşturdu;Bir Yerlerden Başlamaya Ne Dersin?;Elinin Sıcaklığında Kendimi Kaybettim; <31 ;Bazen Bu Hayataın Ne Kadar Acımasız Olduğu Gözümüzden Kaçar...;Gökkuşağı Gibi Elbet Sende Gideceksin;Yukarıdaki Yıldızlara Baksan 🎋;Neden Ki?]**
  
`,
channel: "$getServerVar[sohet]",
executeOnStartup: true,
every: 3000000
})  

/////Bunu Engellemek Icin Bu Kodu Silin Chate Random Kisileri Etiketleyerek Gizel Sozler Atiyo?.
/////---Güzel-Söz---////
/////----Butonlu Çekiliş---////
bot.command({
name:"çekiliş",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (Bitti) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Kullnaıcı çekilişe katıldı.}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]> Sen Kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$getmessagevar[ended]==false;]
$onlyif[$get[winner]!=;Kimse kazanmadı!]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$wait[$get[time]]
$setmessagevar[endstamp;$get[endstamp];$get[e]]
$setmessagevar[hoster;$authorid;$get[e]]
$setmessagevar[prize;$get[prize];$get[e]]
$let[e;$apimessage[$channelid;;{author:🎉 Çekiliş 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Nº Kazanan:** 1\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**Kimse** bu çekilişe katılmadı.}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE};{actionRow:🎊 Katıl 🎊,2,3,join:🔁 Tekrar Çek 🔁,2,1,reroll:🔚 Bitir 🔚,2,4,end};;yes]]
$let[endstamp;$sum[$datestamp;$ms[$get[time]]]]
$let[prize;$messageslice[1]]
$onlyif[$ms[$get[time]]!=undefined;Geçersiz süre sağlandı.]
$let[time;$message[1]]
$onlyif[$message[2]!=;
Bir zaman ve bir ödül girin.]`}) 
bot.onInteractionCreate()
bot.interactionCommand({
name:"join",
prototype:"button",
code:`$editmessage[$get[msg];{author:🎉 Çekiliş 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$get[host]>\n**Nº Kazanan:** 1\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Kullanıcı bu çekilişe katıldı.}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
$setmessagevar[joined;$get[participated];$get[msg]]
$onlyif[$get[condition]==false;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;<@$authorid> Çekilişe katıldın];true;Çekilişe zaten katıldınız];ended;Çekiliş sona erdi];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
$let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
$let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`}) 
bot.interactionCommand({
name:"reroll",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (YENİDEN ÇEKİLDİ) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Tekrar Çekildi Yeni Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** 
Kullanıcı bu çekilişe katıldı}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]> Tekrar çekildi ve sen kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$get[winner]!=;Katılım eksikliği nedeniyle kazanan belirlenmedi]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Çekilişi yeniden düzenlendi];true;Bu çekiliş henüz bitmedi];false;Yeterli izniniz yok];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`}) 
bot.interactionCommand({
name:"end",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (SONA ERDİRİLDİ) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Çekiliş Sona Erdirildi Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** 
Kullanıcı bu çekilişe katıldı}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]> Sen kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$get[winner]!=;Katılım eksikliği nedeniyle kazanan belirlenmedi]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Çekiliş Bitirildi];true;Bu çekiliş zaten bitmiş];false;Yeterli iznin yok.];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`}) 

//////-----Cekiliş-----/////
////----Sil----////

bot.interactionCommand({
  name:"sile",
  code:`
  $clear[$math[$getServerVar[sil]+2]]
 
  `
  })
bot.interactionCommand({
  name:"silh",
  code:`
  $interactionReply[Silme İşlemi Başarıyla İptal Edildi;;;64;4]
  $clear[2]
  `
  }) 


////----Sil----////
/////-----Bu Kod Space Code Share Aittir----/////(Daha Fazla Bekletmememk Icin Ladim Kodu Ama Benimkide Gelecek Merak Etmeyin ^^

bot.interactionCommand({
name: "btnRol",
prototype: "button",
code:`
$if[$hasRole[$authorID;$getServerVar[btnRol]]==true]
$takeRole[$authorID;$getServerVar[btnRol]]
$interactionReply[Rolünüz başarıyla alındı.;;;64;4]
$else
$giveRole[$authorID;$getServerVar[btnRol]]
$interactionReply[Rolünüz başarıyla verildi.;;;64;4]
$else
$endif
`
}) 

///////-----Sunucuya Girince Bazı İşlemleri Yapmak İçin------//////

bot.joinCommand({
  channel:"rick",
  code:`
  $giveRoles[$authorID;$getServerVar[kayıtsız]]
  $changeNickname[$authorID;$getServerVar[tag] İsim $getServerVar[sembol] Yaş]
  $channelSendMessage[$getServerVar[otorollog];🎋 | <@$authorID> Kullanıcı Sunucuya Katıldı Ve \`\$roleName[$getServerVar[kayıtsız]]\`\ Rolünü Verdim]
  $channelSendMessage[$getServerVar[kkanal];
       🎋 <@$authorID> Sunucuya Hoşgeldin! 🎋
  🎋 Sunucumuz Senle Birlikte \`\$membersCount\`\ Kişi Oldu
  🎋 Sunucumuzda Şu Anda \`\$voiceMembersCount\`\ Kişi Seste
  🎋 Sunucumuzda Şu Anda \`\$roleMembersCount[$getServerVar[tagrol]]\`\ Kişi Taglı
  🎋 Tagımızı(\`\$getServerVar[tag]\`\) Alarak Ailemize Katılabilirsin!
  🎋 Ses Kanallarına Birine Geçip Bekleyebilirsin Seninle <@&$getServerVar[kyetkili]> Rolündekiler  İlgilenecek
  ]
  
  `})

