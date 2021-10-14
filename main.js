const axios = require("axios");
let WebSocketClient = require('websocket').client;
const {Intents} = require("discord.js");
require('dotenv').config()

let client = new WebSocketClient();

const PREFIX = process.env.PREFIX || "!";
const TOKEN = process.env.TOKEN;
const STATUS = process.env.STATUS || "online"

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', async  function(connection) {
    connection.sendUTF(JSON.stringify({
        op: 2,
        d: {
            heartbeat_interval: 5000,
            token: TOKEN,
            properties: {
                $os: "linux",
                $browser: "my_library",
                $device: "my_library"
            }
        }}))

    await axios.patch(`https://discord.com/api/v9/users/@me/settings`, {
        status: STATUS
    }, {headers: {
            authorization: TOKEN
        }})

    setInterval(() => {
        connection.sendUTF(JSON.stringify({op: 1, d: 2}))
    }, 5000)

    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });


    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });

    connection.on('message', async function(message) {
        console.log(message)
        let data = JSON.parse(message?.utf8Data);
        if (!data.t) return
        //MESSAGE_CREATE
        if (data.t === "MESSAGE_CREATE"){
            if (!data.d.content.startsWith(PREFIX)) return;

            let mes = data.d;

            const args = data.d.content.slice(PREFIX.length).trim().split(/ +/);

            const commandName = args.shift().toLowerCase();
            const message_id = data.d.message_id;
            const channel_id = data.d.channel_id;

            if (commandName === "say" && args[0]){
                await axios.post(`https://discord.com/api/v9/channels/${channel_id}/messages`, {
                    content: args.join(" ")
                }, {headers: {
                        authorization: TOKEN
                    }})
            }

            //Add your commands
        }
    });
});

client.connect('wss://gateway.discord.gg/?v=9&encoding=json', {
    op: 10,
    d: {
        heartbeat_interval: 5000
    }
});
// client.connect('wss://gateway.discord.gg/?v=9&encoding=json', {
//     op: 10,
//     d: {heartbeat_interval: 45000}
// })