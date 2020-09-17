let client_id = "Botトークン";
let anonymous_channnels = "匿名用のテキストチャンネルID";
var base = Math.floor( Math.random() * (1000000007) ) ;


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('ログインしました。');
});

client.on('message', message => {
    if(message.author.bot){
        return;
    }else{
        let msg = message.content;
        let channel = message.channel;
        let author = message.author;
        if(channel.type == 'dm'){
            client.channels.cache.get(anonymous_channnels).send("" + (( author.id + base) % 1000000007) + "　:　" + msg);
        }
   }
});
function messageAction(message){
    var code = messageCheck(message);
}
function messageCheck(){
    let msg = message.content;
    let channel = message.channel;
    let author = message.author;
}

client.login(client_id);
