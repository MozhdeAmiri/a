const Telegraf = require('telegraf');
const link = require('./links');
const request = require('axios');
const bot = new Telegraf('780594902:AAGjWI_AvhRsY5aVQGdaz1CPqUErM7cttME');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', function() {
  console.log('Listening on Port 3000');
});

app.get('/', (req, res) => {
  res.json('Hichokooch Bot is running!');
  invokeIteself();
});

bot.start(ctx => ctx.reply(link.start));

bot.help(ctx => ctx.reply(link.help));
bot.on('sticker', ctx => ctx.reply('👍'));

bot.hears(`کمک`, ctx => ctx.reply(link.help));
bot.hears(`شروع`, ctx => ctx.reply(link.help));

bot.hears('سفارش', ctx => ctx.reply(link.order));
bot.hears('مارک', ctx => ctx.reply(link.brand));
bot.hears('کفش', ctx => ctx.reply(link.shoe));
bot.hears('کیف', ctx => ctx.reply(link.bag));
bot.hears('شلوار', ctx => ctx.reply(link.trouser));
bot.hears('لباس زنانه', ctx => ctx.reply(link.womenDress));
bot.hears('لباس مردانه', ctx => ctx.reply(link.menDress));
bot.hears('لباس بچگانه', ctx => ctx.reply(link.babyDress));
bot.hears('تیشرت', ctx => ctx.reply(link.tshirt));
bot.hears('تی شرت', ctx => ctx.reply(link.tshirt));
bot.hears('ورزشی', ctx => ctx.reply(link.sport));
bot.hears('کمپ', ctx => ctx.reply(link.camp));
bot.hears('آرایشی', ctx => ctx.reply(link.cosmetic));
bot.hears('ارایشی', ctx => ctx.reply(link.cosmetic));
bot.hears('عطر', ctx => ctx.reply(link.perfume));
bot.hears('روتختی', ctx => ctx.reply(link.sheet));
bot.hears('رو تختی', ctx => ctx.reply(link.sheet));

console.log('Hichokooch Bot is now available.');

bot.launch();

const interval = 60 * 15;
const invokeIteself = () => {
  console.log(`Hichokooch Bot Interval Success...`);
  setInterval(() => {
    request({
      url: `https://hichokooch.herokuapp.com/`,
      method: 'GET',
    })
      .then(res => {
        console.log(`Hichokooch Bot Interval Success...`);
      })
      .catch(err => {
        console.log(`Hichokooch Bot Interval Error...`);
      });
  }, interval * 1000);
};
