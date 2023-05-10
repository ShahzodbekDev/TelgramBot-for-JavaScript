const TelegramBot = require('node-telegram-bot-api');
const MainKeyboard = require('./keyboard.js');
const bot = new TelegramBot('1873460495:AAE_Cu7V1wrTtg0Zbm3_bDLHoz91gg1ygPI', { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    bot.sendMessage(chatId, 'Assalomu alaykum', { reply_markup: MainKeyboard });
  }

  if (text === 'a') {
    bot.sendMessage(chatId, 'Menyuni chiqarish uchun ruxsat berishingiz uchun rahmat!', { reply_markup: MainKeyboard });
  }
});




