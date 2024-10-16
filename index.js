require('dotenv').config();
const Discord = require("discord.js-selfbot-v13");
require('./keep_alive.js');

async function alts(ACCOUNT_TOKEN, CHANNEL_ID) {
    const client = new Discord.Client();

    // Centralized values for intel, energy, and endur
    let intel = 236;
    let energy = 264;
    let endur = 16;
    let agil = 16;
    let potency = 33;
    let efficiency = 297;

    const autostart = true;

    // Random delay generator for general actions (6 to 9 seconds)
    function getRandomDelay(min = 7000, max = 8000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Random delay generator specifically for hunt actions (21 to 23 seconds)
    function getHuntDelay(min = 21000, max = 23000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getLSDDelay(min = 16000, max = 17000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to send a message and show status in the console
    async function sendMessage(message) {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID); // Fetch the channel by ID
            await channel.send(message); // Send the message
            // console.log(`Sent: ${message}`); // Log the sent message
        } catch (error) {
            console.error(`Error sending message: ${error}`); // Log any errors
        }
    }

    // Function to handle the intro sequence
    function intro() {
        let x = 0;
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback efficiency ${efficiency}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~feed p"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~grabid"), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`17 min wait -> intro`), x);
        setTimeout(loop, x + 1023000); // Start the loop after intro is done
    }

    // Function to handle the loop sequence
    function loop() {
        let x = 0;
        setTimeout(() => sendMessage("~feed opi"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~pet"), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback efficiency ${efficiency}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`11 min wait -> loop`), x);
        x += getRandomDelay() + 666000;
        setTimeout(() => sendMessage("~feed c"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~train intel"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~hunt"), x);
        x += getRandomDelay();
        setTimeout(hunt1, x);
    }

    function hunt1() {
        let x = 0;
        setTimeout(() => sendMessage("~hunt"), x);

        for (let i = 0; i < 34; i++) {
            x += getHuntDelay();
            setTimeout(() => sendMessage("~hunt"), x);
        }

        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`5 min wait -> hunt1`), x);
        x += getRandomDelay() + 300000;
        setTimeout(() => sendMessage("~feed p"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~grabid"), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~train intel"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~hunt"), x);
        x += getRandomDelay();
        setTimeout(hunt2, x);
    }

    function hunt2() {
        let x = 0;
        for (let i = 0; i < 34; i++) {
            x += getHuntDelay();
            setTimeout(() => sendMessage("~hunt"), x);
        }

        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve potency ${potency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`5 min wait -> hunt2`), x);
        x += getRandomDelay() + 300000;
        setTimeout(() => sendMessage("~feed p"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~grabid"), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve intel ${intel}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage(`17 min wait -> final`), x);
        x += 1023000;
        setTimeout(loop, x); // Continue loop after hunting
    }

    function pills() {
        let x = 0;
        setTimeout(() => sendMessage(`~rollback intel ${intel}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback endur ${endur}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback agil ${agil}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback energy ${energy}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~rollback potency ${potency}`), x);
        x += getRandomDelay() + 3000;
        setTimeout(() => sendMessage(`~improve efficiency ${efficiency}`), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~smoke"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dose opi"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~smoke"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~drink"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dose lsd"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);

        for (let i = 0; i < 63; i++) {
            x += getLSDDelay();
            setTimeout(() => sendMessage("~dispense"), x);
        }
    }

    function lsd() {
        let x = 0;
        setTimeout(() => sendMessage("~dose lsd"), x);
        x += getRandomDelay();
        setTimeout(() => sendMessage("~dispense"), x);

        for (let i = 0; i < 63; i++) {
            x += getLSDDelay();
            setTimeout(() => sendMessage("~dispense"), x);
        }
    }

    function test() {
        let x = 0;
        setTimeout(() => sendMessage("Working"), x);
    }

    // Display a fancy startup banner and bot status
    function displayBanner() {
        console.clear();
        console.log("\nStarting bot operations...");
    }

    // Listen for commands
    client.on("messageCreate", async (message) => {
        try {
            if (message.author.id !== '745874898525880427') return;
            const content = message.content.trim();
            if (content === ".loop") await loop();
            if (content === ".intro") await intro();
            if (content === ".hunt2") await hunt2();
            if (content === ".hunt1") await hunt1();
            if (content === ".pills") await pills();
            if (content === ".lsd") await lsd();
            if (content === ".test") await test();
            if (message.content.startsWith('.say ')) {
                const textToSay = message.content.slice(5); // Extract the text after '.say all '
                await sendMessage(textToSay); // Send the text back to the channel
            }

        } catch (err) {
            console.error(chalk.red(`Error processing message: ${err.message}`));
        }
    });
    
    // Set up the Discord client
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`);
        if (autostart) {
            intro();
        }
    });

    // Log in to the Discord client
    await client.login(ACCOUNT_TOKEN);
}

// Array of account tokens and channel IDs
const accounts = [
    { token: process.env.TEEN, channelId: '942657912231309362' },
    { token: process.env.CRYING, channelId: '942657944087068722' }, 
    { token: process.env.MARK, channelId: '942658029852188692' },
    { token: process.env.DARK_MATTER, channelId: '942658050425258004' },
    { token: process.env.HPN, channelId: '942658070134292501' },
    { token: process.env.HAPPEN, channelId: '942658792343085056' },
    { token: process.env.MEGADON, channelId: '942658020624695327' },
    { token: process.env.SANDICTION, channelId: '942658765063344148' },
    { token: process.env.PARROT, channelId: '942658042879705138' },
    // Add more accounts as needed
];

// Start the bot for each account
accounts.forEach(account => {
    alts(account.token, account.channelId);
});
