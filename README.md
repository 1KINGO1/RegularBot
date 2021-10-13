# RegularBot
Discord bot on a regular discord account 🥴

<h2>Installation</h2>
```
$ npm install
```
<h2>Starting</h2>
```
$ node main
```
<h2>Settings</h2>
<p style="font-weight: bold">For everything to work correctly, you need to get your <span style="color: yellow">client's token</span>, it's not as easy as it sounds.</p>
<p style="font-weight: bold">Follow the instructions:</p>

<p>1. Go to the web version of the discord, and log in with the required account.</p>
<img src="https://cdn.discordapp.com/attachments/688663384727748668/897941714881355807/Screenshot_6.png" alt="image"/>

<p>2. Press f12 and go to the Network section</p>
<img src="https://media.discordapp.net/attachments/688663384727748668/897942189840146482/Screenshot_9.png?width=1440&height=681" alt="image"/>

<p>3.Then click on any of your servers. You should have such a field, click on it.</p>
<img src="https://cdn.discordapp.com/attachments/688663384727748668/897942851894276116/Screenshot_10.png" alt="image"/>

<p>4. In the menu that opens, find the "authorization" field and copy the symbols to the right of it. Never share this code with third parties</p>
<img src="https://media.discordapp.net/attachments/688663384727748668/897943305671827506/Screenshot_11.png?width=1427&height=700" alt="image"/>

<p>5. Go to the project folder and paste your token to <span style="color: cornflowerblue">.env</span> file</p>
<img src="https://media.discordapp.net/attachments/688663384727748668/897944815898067004/Screenshot_12.png" alt="image"/>
<span style="display: block;color: #deeacc">You can also change the bot's prefix or status in this file.</span>

<h2>Adding commands</h2>
<p>There is only one command from the beginning, but you can add them yourself.</p>
<img src="https://cdn.discordapp.com/attachments/688663384727748668/897940056055095346/Screenshot_5.png" alt="image"/>

<p style="font-weight: bold; color: lightpink">To add commands you must know nodeJS and have basic knowledge about discord api and websockets!</p>
<p>You can write your commands here</p>
<img src="https://cdn.discordapp.com/attachments/688663384727748668/897946795559223296/Screenshot_13.png" alt="image"/>
<p><span style="font-weight: bold">args</span> - Array of command arguments</p>
<p><span style="font-weight: bold">mes</span> - Message object</p>
<p><span style="font-weight: bold">commandName</span> - Command name</p>
<p><span style="font-weight: bold">message_id</span> - ID the message that was sent by the user</p>
<p><span style="font-weight: bold">channel_id</span> -Channel ID the message sent by the user</p>