const { Telegraf , Markup} = require('telegraf');
require('dotenv').config();
const text = require('./const.js');


const bot = new Telegraf(process.env.BOT_TOKEN);
console.log ('Bot has started');
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => {
    ctx.reply( 'j', Markup.inlineKeyboard (
        [
            [Markup.button.callback('first', 'second')]
        ]
    ))
})
bot.hears('hii', (ctx) => ctx.reply(text.commands));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
