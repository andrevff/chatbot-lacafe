"use strict";
exports.__esModule = true;
// Supports ES6
//chatbot lacafe
var venom_bot_1 = require("venom-bot");
venom_bot_1.create('BOT')
    .then(function (client) {
    client.onMessage(function (message) {
        switch (message.body.toLowerCase()) {
            case 'bom dia':
            case 'boa tarde':
            case 'boa noite':
            case 'olá':
            case 'ola':
            case 'oi':
            case 'oii':
            case 'oiii':
            case 'olaa':
            case 'olaaa':
            case 'oi, bom dia':
            case 'oi, boa tarde':
            case 'oi, boa noite':
            case 'oi bom dia':
            case 'oi boa tarde':
            case 'oi boa noite':
            case 'ola, bom dia':
            case 'ola, boa tarde':
            case 'ola, boa noite':
            case 'ola bom dia':
            case 'ola boa tarde':
            case 'ola boa noite':
            case 'olá, bom dia':
            case 'olá, boa tarde':
            case 'olá, boa noite':
            case 'olá bom dia':
            case 'olá boa tarde':
            case 'olá boa noite':
                client.sendText(message.from, 'Olá! Sou o atendente virtual do La Café, e estou aqui para agilizar o seu atendimento. Como posso ajudar? 🤖\n\n*1*: Cardápio 🍽\n*2*: Fazer um pedido 🗒\n*3*: Localização do estabelecimento 🗺\n*4*: Horário de funcionamento 🕒\n*5*: Falar com um atendente real 🙋🏻‍♂️\n');
                break;
            case '0':
                client.sendText(message.from, '*1*: Cardápio 🍽\n*2*: Fazer um pedido 🗒\n*3*: Localização do estabelecimento 🗺\n*4*: Horário de funcionamento 🕒\n*5*: Falar com um atendente real 🙋🏻‍♂️\n');
                break;
            case '1':
                client.sendText(message.from, 'Acesse o cardápio pelo nosso site: https://lacafe.com.br 🛵📲\nVocê pode fazer o pedido através dele.\n\nCaso deseje falar com um atendente real, digite *5*\n\nPara voltar ao menu, digite *0*');
                break;
            case '2':
                client.sendText(message.from, 'Você pode fazer o seu pedido através do nosso site: https://lacafe.com.br 🛵📲\n\nCaso deseje falar com um atendente real, digite *5*\n\nPara voltar ao menu, digite *0*');
                break;
            case '3':
                client.sendText(message.from, 'Ficamos localizados na Av. Sebastião Rodrigues da Costa, 359, São Pedro.\nPróximo ao IFPE.📍\n\nPara voltar ao menu, digite *0*');
                client.sendLocation(message.from, '-8.324627448505517', '-36.4180180998651', 'La Café - Bolos e Petiscaria\nAv. Sebastião Rodrigues da Costa, 359, São Pedro (Próximo ao IFPE)');
                break;
            case '4':
                client.sendText(message.from, '*Nosso horário de funcionamento* 🕒\n\nDomingo: 11h às 15h e 18h às 23h\nSegunda: 11h às 15h e 17h às 22h30min\nTerça: Fechado\nQuarta: 11h às 15h e 17h às 22h30min\nQuinta: 11h às 15h e 17h às 22h30min\nSexta: 11h às 15h e 17h às 23h\nSábado: 11h às 15h e 17h às 23h\n\nPara voltar ao menu, digite *0*');
                break;
            case '5':
                client.sendText(message.from, 'Ok! Estou te transferindo para um atendente real. Aguarde um momento... 🙋🏻‍♂️');
                break;
            default:
                client.sendText(message.from, '');
                break;
        }
    });
})["catch"](function (erro) {
    console.log(erro);
});
