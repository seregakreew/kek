const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7
	},
	{
		name: 'Квадроцикл',
		cost: 80000,
		id: 8
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11
	},
	{
		name: 'Audi Q7',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Yamaha YZF R6',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Bugatti Chiron',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Thrust SSC',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Tesla Semi',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Venom GT',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Rolls-Royce',
		cost: 200000000,
		id: 26
	},	
	{
		name: 'Семёрка',
		cost: 195900,
		id: 27
	},
	{
		name: 'Трактор ТДТ-55А',
		cost: 1100000,
		id: 28
	},
	{
		name: 'Трактор ВТЗ-Дт-75',
		cost: 2150000,
		id: 29
	}

];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 10000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 50000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Мегафон С1',
		cost: 250000,
		id: 10
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	}
];

const businesses = [
	{
		name: 'Шаурмичная',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '🥖'
	},
	{
		name: 'Ларёк',
		cost: 10000,
		earn: 700,
		id: 2,
		icon: '🏪'
	},
	{
		name: 'Ресторан',
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '🍷'
	},
	{
		name: 'Магазин',
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '🏫'
	},
	{
		name: 'Завод',
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '🏭'
	},
	{
		name: 'Шахта',
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '⛏'
	},
	{
		name: 'Офис',
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Разработка игр',
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '🕹'
	},
	{
		name: 'Нефтевышка',
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '🏜'
	},
	{
		name: 'Атомная электростанция',
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Космическое агентство',
		cost: 50000000000,
		earn: 50000000,
		id: 11,
		icon: '🗺'
	}
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Программист',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];

const { createCanvas, loadImage, registerFont } = require('canvas')
const { VK, Keyboard }        = require("vk-io");
const vk            = new VK();
const { updates }   = vk;
const fetch = require('node-fetch');
const fs            = require("fs");
// Массив с админами
const admins        = [697816];
// Наша крутая база юзеров
const moment        = require("moment");
const utils = require("./utils");
const generator = require('generate-password');

const users = require("./db/users.json");
const chats = require("./db/chats.json");
const promo = require("./db/promo.json");
const clan = require("./db/clan.json");

const http = require("http");
const request = require("request");
const os = require("os");
vk.setOptions({
    token: "724ac9a4abfa4b51e37949688d4fd96bbcf80f6ac5f27675fe2fbcde0008d662ce3a0866c0b88f4ab5da5",
    apiMode: "parallel",
    pollingGroupId: 180740685
});

updates.use(async (context, next) => {
    if (context.is("message") && context.isOutbox)
        return;
    
  context.user = users[context.senderId];    
// Проверка на наличие текста
      if (context.text) {
        // Элементарный лог, @id -- айди пользователя, #id -- айди чата (если сообщение из чата)
        console.log(`@id${context.senderId} ${ context.isChat ? "#" + context.chatId : "" }, text: ${ context.text.slice(0, 36) }`);
} 
      if(context.isGroup) {
      return
      } 
       if (context.senderId < 0) {
        return;
      }

    if (!users[context.senderId]) {
        let data = await vk.api.users.get({
        user_ids: context.senderId
        })
        const date = new Date();
        users[context.senderId] = {
          balance: 5000,
          sms: 0,
          warnings: 0,
          ban: 0,
          bonus: null,
          limit: null,
          sms_l: 0,
          regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
          rating: 0,
          cases: 0,
          keys: 0,
          marriage: {
            partner: 0,
            requests: []
          },
          nick: data[0].first_name,
          clan: "",
          transport: {
            car: 0,
            yacht: 0,
            airplane: 0,
            helicopter: 0
        },
        realty: {
            home: 0,
            apartment: 0
        },
        misc: {
            phone: 0,
            farm: 0
        }
        };
    }

      	if (!chats[context.chatId] && context.isChat) {
        
        chats[context.chatId] = {
            id: context.chatId,
            title: null,
            messages: null,
            mailing: 0
        };
            let data = await vk.api.messages.getConversationMembers({
        peer_id: 2000000000 + chats[context.chatId].id,
	})
	}
	if(context.isChat) {
		chats[context.chatId].messages += 1
	}
  
    if (context.user.ban) return;

    if (!context.text) {
    if (getUnix() - context.user.spam < 60) {
    context.user.sms = context.user.sms + 1
    console.log(context.user.sms)
    } else {
    context.user.spam = getUnix();
    context.user.sms = 1
    console.log(context.user.sms)
    }

    if(context.isChat && context.user.sms >= 15) {
if(context.user.warnings < 2) {
    context.user.warnings = context.user.warnings + 1
    context.send(`[id${context.senderId}|Пользователю] выдано предупреждение! Причина: Спам.
⚠ Предупреждений: ${context.user.warnings}⚠`)
    context.user.sms = 1
    context.user.sms_l = getUnix();
} else if(context.user.warnings = 2) {
    context.user.ban = 1
    context.send({
        attachment: "photo-179364340_456239028",
        message: `[id${context.senderId}|Пользователю] выдан бан! Причина: Спам.
  Game Over`})
    context.user.sms_l = getUnix();
}}
    }
  
    try {
        await next();
    } catch (err) { console.error(err) }
});

const utils_1 = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}
//Статистика сообщений беседы
updates.hear(/^score$/i, async (context) => {
if (!~admins.indexOf(context.senderId)) {
    context.send(`[id${context.senderId}|${context.user.nick}], у вас не достаточно прав.`)
  } else {
			var sex = os.freemem() / 1024 / 1024;
			var totalmem = os.totalmem() / 1024 / 1024;
			var cpu = os.cpus();
    	context.send("🖥Информация о системе:\n&#4448;💻ОС: "+os.type()+"\n&#4448;💻Arch: "+os.arch()+"\n&#4448;💻Platform: "+os.platform()+"\n&#4448;💻Release: "+os.release()+"\n\n⚙Информация о железе: "+"\n&#4448;🔧RAM: "+Math.round(sex)+" / "+Math.round(totalmem)+" mb"+"\n&#4448;🔧CPU: "+cpu[0].model+"\n\n🛠Информация о процессе:"+"\n&#4448;💿PID: "+process.pid+"\n&#4448;💿Title: "+process.title+"\n&#4448;💿Node: "+process.version)
	}
})

updates.hear(/^статистика$/i, async (context) => {
if(context.isChat) {
  await context.send(`Всего сообщений беседы: ${utils_1.sp(chats[context.chatId].messages)} ✉`);
  }
})

//Передать деньги ироку
updates.hear(/^передать\s(.*)\s(.*)$/i, async (context) => {
    var arr = await context.text.split(' ')

  arr[2] = arr[2].replace(/(\.|\,)/ig, '');
	arr[2] = arr[2].replace(/(к|k)/ig, '000');
	arr[2] = arr[2].replace(/(м|m)/ig, '000000');
	arr[2] = arr[2].replace(/(вабанк|вобанк|все|всё)/ig, users[context.senderId].balance);

    if(!Number(arr[2])) return;
	  arr[2] = Math.floor(Number(arr[2]));

    if(arr[2] <= 0) return;

    let data = await vk.api.users.get({ 
      user_ids: context.$match[1], 
      fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
    });

      if(data[0].id == context.senderId) { 
      context.send(`👩‍💻 [id${context.senderId}|${users[context.senderId].nick}], вы не можете передать деньги себе 👨‍💻`) 
      } else if(!users[data[0].id]) {
    context.send(`🧟 Пользователь не найден 🧟`) 
    }else
    if(arr[2] > users[context.senderId].balance) {
    context.send(`[id${context.senderId}|${users[context.senderId].nick}], недостаточно денег
    💰 Баланс: ${utils_1.sp(users[context.senderId].balance)}₽`);
    } else if(arr[2] <= users[context.senderId].balance)
	{
		users[context.senderId].balance -= arr[2];
        users[data[0].id].balance += arr[2]
        
      vk.api.messages.send({
        user_id: data[0].id,
        message: `[УВЕДОМЛЕНИЕ]
▶ Игрок [id${context.senderId}|${users[context.senderId].nick}] перевел вам ${utils_1.sp(arr[2])}₽!`
      })
      await context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы передали игроку [id${data[0].id}|${users[data[0].id].nick}] ${utils_1.sp(arr[2])}₽`);
    }
})


//Выдать деньги игроку
updates.hear(/^выдать\s(.*)\s([0-9]+)/i, async (context) => {
if (!~admins.indexOf(context.senderId)) {
        return;
} else {
var arr = await context.text.split(' ')

let data = await vk.api.users.get({ 
  user_ids: context.$match[1], 
  fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
});

if (!users[data[0].id]) {
        const date = new Date();
        users[data[0].id] = {
          balance: 5000,
          sms: 0,
          warnings: 0,
          ban: 0,
          bonus: null,
          limit: null,
          sms_l: 0,
          regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
          rating: 0,
          cases: 0,
          keys: 0,
          marriage: {
            partner: 0,
            requests: []
          },
          nick: data[0].first_name,
          clan: "",
          transport: {
            car: 0,
            yacht: 0,
            airplane: 0,
            helicopter: 0
        },
        realty: {
            home: 0,
            apartment: 0
        },
        misc: {
            phone: 0,
            farm: 0
        }
        };
    }

users[data[0].id].balance = Number(users[data[0].id].balance) + Number(arr[2])
await context.send(`К балансу [id${[data[0].id]}|${users[data[0].id].nick}] добавлено ${utils_1.sp(arr[2])}₽
Баланс игрока [id${[data[0].id]}|${users[data[0].id].nick}] ${utils_1.sp(users[data[0].id].balance)}₽`);
}
})
//Обнулить баланс и бонус у игрока
updates.hear(/^обнулить\s(.*)/i, async (context) => {
if (!~admins.indexOf(context.senderId)) {
        return;
} else {
  let data = await vk.api.users.get({ 
    user_ids: context.$match[1], 
    fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
  });
var arr = await context.text.split(' ')
users[data[0].id].balance = 5000;
users[data[0].id].bonus = null;
users[data[0].id].warnings = 0,
users[data[0].id].ban = 0,
users[data[0].id].rating = 0,
users[data[0].id].cases = 0,
users[data[0].id].keys = 0
await context.send(`Игрок [id${[data[0].id]}|${users[data[0].id].nick}] обнулён`);
}
})
//Товары
//Разбан - 1шт
updates.hear(/^buy_1$/i, async (context) => {
if(context.user.balance < 2500) {
context.send(`[id${context.senderId}|${context.user.nick}], недостаточно средств
💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
} else if(context.user.warnings == 0) {
context.send(`[id${context.senderId}|${context.user.nick}], у вас нет предупреждений`)
}  else {
context.user.warnings = context.user.warnings - 1 
context.user.balance = context.user.balance - 2500
context.send(`[id${context.senderId}|${context.user.nick}], с вас было снято одно предупреждение, списано 2.500₽
⚠ ${context.user.warnings}/3 предупреждений ⚠
💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
}
})
//Разбан - max
updates.hear(/^buy_2$/i, async (context) => {
if(context.user.balance < 3500) {
context.send(`[id${context.senderId}|${context.user.nick}], недостаточно средств
💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
} else if(context.user.warnings <= 0) {
context.send(`[id${context.senderId}|${context.user.nick}], у вас нет предупреждений`)
} else if(context.user.warnings == 1) {
context.send(`[id${context.senderId}|${context.user.nick}], у вас должно быть минимум 2 предупреждения
⚠ ${context.user.warnings}/3 предупреждений ⚠`)
} else {
context.user.warnings = 0 
context.user.balance = context.user.balance - 3500
context.send(`[id${context.senderId}|${context.user.nick}], с вас было сняты все предупреждения, списано 3.500₽
💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
}
})

updates.hear(/^buy_3\s?(.*)?$/i, async (context) => {
  let options = {
		count: null
	}

  if(!context.$match[1]) options.count = 1;
	if(context.$match[1])
	{
		context.$match[1] = context.$match[1].replace(/(\.|\,)/ig, '');
		context.$match[1] = context.$match[1].replace(/(к|k)/ig, '000');
		context.$match[1] = context.$match[1].replace(/(м|m)/ig, '000000');

		context.$match[1] = Math.floor(Number(context.$match[1]));
		if(context.$match[1] <= 0) return;

		if(!context.$match[1]) options.count = 1;
		else if(context.$match[1]) options.count = context.$match[1];
  }

	if(( options.count +  context.user.cases) > 50) {
		return context.send(`[id${context.senderId}|${context.user.nick}], вы можете иметь при себе только 50 кейсов
Кейсов: ${utils_1.sp(context.user.cases)}`)
	}
  if(( options.count * 2500 ) > context.user.balance) {
  context.send(`[id${context.senderId}|${context.user.nick}], у вас недостаточно средств
  💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
  } else if(( options.count * 2500 ) <= context.user.balance) {
  context.user.cases += options.count; 
  context.user.balance -= (options.count * 2500);
  context.send(`[id${context.senderId}|${context.user.nick}], вы успешно купили ${options.count} ${utils_1.decl(options.count, ['кейс', 'кейса', 'кейсов'])}
  💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
  }
})

updates.hear(/^buy_4\s?(.*)?$/i, async (context) => {
  let options = {
		count: null
	}

  if(!context.$match[1]) options.count = 1;
	if(context.$match[1])
	{
		context.$match[1] = context.$match[1].replace(/(\.|\,)/ig, '');
		context.$match[1] = context.$match[1].replace(/(к|k)/ig, '000');
		context.$match[1] = context.$match[1].replace(/(м|m)/ig, '000000');

		context.$match[1] = Math.floor(Number(context.$match[1]));
		if(context.$match[1] <= 0) return;

		if(!context.$match[1]) options.count = 1;
		else if(context.$match[1]) options.count = context.$match[1];
  }
	if(( options.count +  context.user.keys) > 50) {
	return context.send(`[id${context.senderId}|${context.user.nick}], вы можете иметь при себе только 50 ключей
Ключей: ${utils_1.sp(context.user.keys)}`)
	}
  if(( options.count * 150 ) > context.user.balance) {
  context.send(`[id${context.senderId}|${context.user.nick}], у вас недостаточно средств
  💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
  } else if(( options.count * 150 ) <= context.user.balance) {
  context.user.keys += options.count; 
  context.user.balance -= (options.count * 150);
  context.send(`[id${context.senderId}|${context.user.nick}], вы успешно купили ${options.count} ${utils_1.decl(options.count, ['ключ', 'ключа', 'ключей'])}
  💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
  }
})

updates.hear(/^Открыть кейс$/i, async (context) => {
     if(!context.user.cases) {
     context.send(`[id${context.senderId}|${context.user.nick}], у вас нет кейсов`)
     } else if(!context.user.keys){
          context.send(`[id${context.senderId}|${context.user.nick}], у вас нет ключей`)
     } else {
          context.user.cases -= 1
          context.user.keys -= 1
          let prize_1_1 = utils_1.pick([1,2,3]);
          let prize_1_2 = utils_1.pick([1,2,3]);


          if(prize_1_1 == prize_1_2) {
            let prize_2_1 = utils_1.pick([1,2,3,4,5]);
            if(prize_2_1 == 1) {
              let prize_2_2 = utils_1.pick([1,2,3,4,5,10])
              context.user.cases += prize_2_2
              return context.send(`✅[id${context.senderId}|${context.user.nick}], вы открыли кейс и вам ${utils_1.decl(prize_2_2, ['выпал', 'выпало', 'выпало'])} ${prize_2_2} ${utils_1.decl(prize_2_2, ['бонусный кейс', 'бонусных кейса', 'бонусных кейсов'])} ✅`)
            }
            if(prize_2_1 == 1) {
              let prize_2_2 = utils_1.pick([1,2,3,4,5,10])
              context.user.keys += prize_2_2
              return context.send(`✅[id${context.senderId}|${context.user.nick}], вы открыли кейс и вам ${utils_1.decl(prize_2_2, ['выпал', 'выпало', 'выпало'])} ${prize_2_2} ${utils_1.decl(prize_2_2, ['бонусный ключ', 'бонусных ключа', 'бонусных ключей'])} ✅`)
            }
            if(prize_2_1 === 3) {
              let prize_2_2 = utils_1.pick([2500,2750,3000,3250,3500,3750,4000, 4200, 4500, 5000, 5500, 5550, 7000, 10000])
              context.user.balance += prize_2_2
              return context.send(`✅[id${context.senderId}|${context.user.nick}], вы открыли кейс и вам выпало ${utils_1.sp(prize_2_2)}₽ ✅`)
            }
            if(prize_2_1 === 4) {
              let prize_1 =  utils_1.pick([1,2,3,4,5,6,7,8,9,10]);
              context.user.rating += prize_1
              return context.send(`✅[id${context.senderId}|${context.user.nick}], вы открыли кейс и вам выпало ${utils_1.sp(prize_1)}👑 ✅`)
            }
            if(prize_2_1 === 5) {
              return context.send({
                attachment: "photo-179364340_456239048",
                message: `[id${context.senderId}|${context.user.nick}], вы открыли кейс, но он оказался пустым 😒😒😒`})
            }
          }
            let prize_1 = utils_1.pick([100,500,250,750,1000,1250,1500,2000,2250]);
            context.user.balance += prize_1
            await context.send(`✅[id${context.senderId}|${context.user.nick}], вы открыли кейс и вам выпало ${utils_1.sp(prize_1)}₽ ✅`)
     }
   })
//инфа
//Товары
updates.hear(/^Товары$/i, async (context) => {
//💾 buy_1 - Разбан в беседе - 500₽ 💾
  context.send(`
📋 Все товары:
💿 buy_1 - Снять одно предупреждение - ${utils_1.sp(2500)}₽ 💿
💽 buy_2 - Снять все предупреждения - ${utils_1.sp(3500)}₽ 💽
🗃 buy_3 (количество) - купить кейсов - ${utils_1.sp(2500)}₽ 🗃
🗝 buy_4 (количество) - купить ключей - ${utils_1.sp(150)}₽ 🗝
`)
})
updates.hear(/^магазин$/i, async (context) => {
		context.send(`
В магазине вы можете купить:
⠀🚗 Машину - написав машина
⠀🛥 Яхту - написав яхта
⠀🚁 Вертолёт - написав вертолёт
⠀🏠 Дом - написав дом
⠀🌇 Квартиру - написав квартира
⠀📱 Телефон - написав телефон`)
})

//Помощь
updates.hear(/^(?:помощь|команды|меню|help|commands|cmds|menu|начать|start)$/i, async (context) => {
let text = require("./text.json");
if(context.isChat) {
  let data = await vk.api.messages.getConversationMembers({
    peer_id: 2000000000 + chats[context.chatId].id,
  })
  for(var i = 0; i < data.count; i++) {
    if(data.items[i].member_id == context.senderId && data.items[i].is_admin == true && ~admins.indexOf(context.senderId)) {
      context.send(text.help + text.help_chat + text.help_admin_chat + text.help_admin)
    } else if(data.items[i].member_id == context.senderId && data.items[i].is_admin == true && !~admins.indexOf(context.senderId)) {
      context.send(text.help + text.help_chat + text.help_admin_chat)
    } else   if(data.items[i].member_id == context.senderId && data.items[i].is_admin != true && ~admins.indexOf(context.senderId)) {
      context.send(text.help + text.help_chat + text.help_admin)
    } else if(data.items[i].member_id == context.senderId && data.items[i].is_admin != true && !~admins.indexOf(context.senderId)) {
      context.send(text.help + text.help_chat)
    }
  }
}
if(!context.isChat) {
  if(!~admins.indexOf(context.senderId)) {
    context.send(text.help)
  } else if(~admins.indexOf(context.senderId)) {
    context.send(text.help + text.help_admin)
  }
}
})
//предупреждения
//Выдать - 1шт
updates.hear(/^warning\s(.*)/i, async (context) => {
  if (!~admins.indexOf(context.senderId)) {
          return;
  } else {
          let data = await vk.api.users.get({
        user_ids: context.$match[1]
      })
  if (!users[context.$match[1]]) {
      const date = new Date();
      users[context.$match[1]] = {
        balance: 5000,
        sms: 0,
        warnings: 0,
        ban: 0,
        bonus: null,
        limit: null,
        sms_l: 0,
        regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
        rating: 0,
        cases: 0,
        keys: 0,
        marriage: {
          partner: 0,
          requests: []
        },
        nick: data[0].first_name,
        clan: "",
        transport: {
          car: 0,
          yacht: 0,
          airplane: 0,
          helicopter: 0
      },
      realty: {
          home: 0,
          apartment: 0
      },
      misc: {
          phone: 0,
          farm: 0
      }
      };
    }

  if(users[data[0].id].warnings < 3) {
      users[data[0].id].warnings += 1
      await context.send(`Игрок [id${data[0].id}|${users[data[0].id].nick}], получил 1 предупреждение, теперь у игрока [id${data[0].id}|${users[data[0].id].nick}] ${users[data[0].id].warnings}/3 предупреждений`);
  } 
  if(context.isChat && users[data[0].id].warnings >= 3) {
    users[data[0].id].ban = 1
    context.send({
      attachment: "photo-179364340_456239023",
      message: `Игроку [id${data[0].id}|${users[data[0].id].nick}], выдан бан!\n Game Over`})
      
      vk.api.messages.removeChatUser({
      chat_id: context.chatId,
      user_id: data[0].id
    })  
  }
  }
})
//Снять - 1шт
updates.hear(/^unwarning\s(.*)/i, async (context) => {
  if (!~admins.indexOf(context.senderId)) {
          return;
  } else {
    let data = await vk.api.users.get({ 
      user_ids: context.$match[1], 
      fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
    });

    if(users[data[0].id].warnings <= 3 && users[data[0].id].warnings > 0) {
      users[data[0].id].warnings = users[data[0].id].warnings - 1
      await context.send(`У игрока [id${data[0].id}|${users[data[0].id].nick}], удалено 1 предупреждение, теперь у игрока [id${data[0].id}|${users[data[0].id].nick}] ${users[data[0].id].warnings}/3 предупреждений`);
  }}
})
//бан
//Заблокировать пользователя
updates.hear(/^block\s([^]+)(?:\s([^]+)|)/i, async (context) => {
  if (!~admins.indexOf(context.senderId)) {
    context.send(`[id${context.senderId}|${context.user.nick}], у вас не достаточно прав.`)
  } else {
    let data = await vk.api.users.get({ 
      user_ids: context.$match[1], 
      fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
    });

  var arr = await context.text.split(' ')
  if(users[data[0].id].ban === 0) {
    users[data[0].id].ban = 1
    await context.send(`Игрок [id${data[0].id}|${users[data[0].id].nick}], был успешно заблокирован, комментарий: ${context.text.split(' ').splice(2).join(" ")}`);

    if(context.isChat && users[data[0].id].ban === 1) {
      vk.api.messages.removeChatUser({
        chat_id: context.chatId,
        user_id: context.text.split(' ').splice(1).join(" ")
      })
    }
  }}
})
//Разблокировать пользователя
updates.hear(/^unbans\s(.*)/i, async (context) => {
  if (!~admins.indexOf(context.senderId)) {
    context.send(`[id${context.senderId}|${users[context.senderId].nick}], у вас не достаточно прав.`)
  } else {
    let data = await vk.api.users.get({ 
      user_ids: context.$match[1], 
      fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
    });
  if(users[data[0].id].ban == 1) {
    users[data[0].id].ban = 0
      await context.send(`Игрок [id${data[0].id}|${users[$data[0].id].nick}] был успешно разблокирован.`);
  }}
})
//пользователь
//Топ бота по деньгам
updates.hear(/^(?:топ$|top$)/i, (context) => {
    // Для хранения юзверов
    let _users = [];
    let _clans = [];
    // Перебираем нашу "базу"
    for (let key in users) {
        // Не пропускаем админов или заблокированных
        if (!users[key].ban && key != 407464535){
            _users.push({
                id: key,
                balance: users[key].balance,
                rating: users[key].rating,
								nick: users[key].nick
            });
        }
		}
		for (let key in clan) {
			// Не пропускаем админов или заблокированных
					_clans.push({
								id: key,
								name: clan[key].name,
								max_users: clan[key].max_users,
								rating: clan[key].rating,
								users: clan[key].users
					});
	}
  // Отправляем результат
    return context.send(
        "Топ-10 игроков:\n" +
        _users
            .sort((a, b) => b.rating - a.rating)  // Сортируем по балансу
            .slice(0, 10)   // Берем только 10 элементов
            .map((x, i) => `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`}. [id${x.id}|${x.nick}] - 👑${utils_1.sp(x.rating)} | ${utils_1.sp(x.balance)}₽`) //first_name last_name
						.join("\n") 

						+ "\n\nТоп-10 кланов:\n" +

				_clans
						.sort((a, b) => b.rating - a.rating)  // Сортируем по балансу
            .slice(0, 10)   // Берем только 10 элементов
            .map((x, i) => `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`}. <<${x.name}>> - 🏆${utils_1.sp(x.rating)} | (${x.users}/${x.max_users}) | 🛑 ID - ${x.id} 🛑 `)
						.join("\n"),
    );
});
updates.hear(/^(?:богачи$|(?:топ\s2$|top\s2$))/i, (context) => {
    // Для хранения юзверов
    let _users = [];
    // Перебираем нашу "базу"
    for (let key in users) {
        // Не пропускаем админов или заблокированных
        if (!users[key].ban && key != 407464535){
            _users.push({
                id: key,
                balance: users[key].balance,
                rating: users[key].rating,
                nick: users[key].nick
            });
        }
    }
  // Отправляем результат
      return context.send(
        "Топ-10 игроков:\n" +
        _users
            .sort((a, b) => b.balance - a.balance)  // Сортируем по балансу
            .slice(0, 10)   // Берем только 10 элементов
            .map((x, i) => `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`}. [id${x.id}|${x.nick}] - ${utils_1.sp(x.balance)}₽ | 👑${utils_1.sp(x.rating)}`) //first_name last_name
            .join("\n")
    );
});
//Профиль пользователя
updates.hear(/^профиль$/i, async (context) => {
  let data = await vk.api.users.get({ 
    user_ids: context.user.marriage.partner, 
    fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id",
    name_case: "ins"
  });
  let text = ``;
  let text_1 = ``;
  if(context.user.marriage.partner) text += `❤В браке с игроком ${users[data[0].id].nick} (vk.com/id${data[0].id})❤\n`;
  if(context.user.clan != "") text += `😎 Состоит в клане: <<${clan[context.user.clan].name}>> (ID:${context.user.clan}) (${clan[context.user.clan].rating}👑)😎\n`;
  if(context.user.transport.car || context.user.transport.yacht || context.user.transport.airplane || context.user.transport.helicopter ||
    context.user.realty.home || context.user.realty.apartment ||
    context.user.misc.phone || context.user.misc.farm || context.user.business)
{
    text_1 += `\n🔑 Имущество:\n`;

    if(context.user.transport.car) text_1 += `⠀🚗 Машина: ${cars[context.user.transport.car - 1].name}\n`;
    if(context.user.transport.yacht) text_1 += `⠀🛥 Яхта: ${yachts[context.user.transport.yacht - 1].name}\n`;
    if(context.user.transport.airplane) text_1 += `⠀🛩 Самолёт: ${airplanes[context.user.transport.airplane - 1].name}\n`;
    if(context.user.transport.helicopter) text_1 += `⠀🚁 Вертолёт: ${helicopters[context.user.transport.helicopter - 1].name}\n`;
    
    if(context.user.realty.home) text_1 += `⠀🏠 Дом: ${homes[context.user.realty.home - 1].name}\n`;
    if(context.user.realty.apartment) text_1 += `⠀🌇 Квартира: ${apartments[context.user.realty.apartment - 1].name}\n`;

    if(context.user.misc.phone) text_1 += `⠀📱 Телефон: ${phones[context.user.misc.phone - 1].name}\n`;
    if(context.user.business) text_1 += `⠀${businesses[context.user.business - 1].icon} ${businesses[message.user.business - 1].name}\n`;
}
  
  context.send(`
🐬 ${context.user.nick}, ваш профиль🐬
💾 Дата регистрации: ${context.user.regDate}
📗 Ваш профиль:
📝 Твой id: ${context.senderId} 📝
💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰
👑 Рейтинг: ${utils_1.sp(context.user.rating)} 👑
⚠ Предупреждений: ${context.user.warnings}/3⚠
🗃 Кейсы: ${context.user.cases} 🗃
🗝 Ключи: ${context.user.keys} 🗝
${text}
${text_1}`)
})

//баланс пользователя
updates.hear(/^баланс$/i, async (context) => {
	let text = `💰 [id${context.senderId}|${users[context.senderId].nick}], ваш баланс: ${utils_1.sp(context.user.balance)}₽`;

  context.send(text)
})
//Взять бонус
updates.hear(/^(?:бонус$|bonus$)/i, async (context) => {
    // Просто, чтобы каждый раз не писать context.user
    let { user } = context;
    // Проверяем, прошло ли 24 часа спустя последней активации
    if (getUnix() - user.bonus < 86400) {
     await context.send(`[id${context.senderId}|&#8288;]📊[id${context.senderId}|${users[context.senderId].nick}], вы ещё не можете взять бонус📊`);
    } else {
        let prize = utils.randomPick([1, 2, 1, 3, 1, 1, 1, 4, 1, 1, 1]);
        if(prize === 1) {
          let bon1 = utils.randomPick([25,50,500,250,100,1000, 1500, 125]);
          user.balance += bon1;
          user.bonus = getUnix();
          return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы выиграли ${utils_1.sp(bon1)}₽ \n 💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`); 
        }
        if(prize === 2) {
          let bon1 = utils.randomPick([1,5,10,15]);
          user.rating += bon1;
          user.bonus = getUnix();
          return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы выиграли ${bon1}👑!\n👑 Рейтинг: ${utils_1.sp(user.rating)}`); 
        }
        if(prize === 3) {
          let bon1 = utils.randomPick([1,5,10,15]);
          user.cases += bon1;
          user.bonus = getUnix();
          return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы выиграли ${bon1}🗃!\n🗃 Кейсы: ${utils_1.sp(user.cases)}`); 
        }
        if(prize === 4) {
          user.bonus = getUnix();
          let bon1 = utils.randomPick([1,5,10,15]);
          user.keys += bon1;
          return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы выиграли ${bon1}🗝!\n🗝 Ключи: ${utils_1.sp(user.keys)}`); 
        }
    }
});

//Беседы
//Блокировка названия беседы 
updates.hear(/^название\s(.*)/i, async (context) => {
  context.$match[1] = context.$match[1].replace(/(\.|\,)/ig, '?');
  if(context.isChat) {
    let data = await vk.api.messages.getConversationMembers({
      peer_id: 2000000000 + chats[context.chatId].id,
    })
    for(var i = 0; i < data.count; i++) {
	    if(context.$match[1].length >= 26) return context.send(`${users[context.senderId].nick}, максимальная длина названия беседы 25 символов`);
      if(data.items[i].member_id == context.senderId && data.items[i].is_admin == true) {
        chats[context.chatId].title = context.$match[1]
        context.send(`Новое название беседы сохранено`)
        await vk.api.messages.editChat({
          chat_id: chats[context.chatId].id,
          title: chats[context.chatId].title
        })
      } else if(data.items[i].member_id == context.senderId && data.items[i].is_admin != true) {
        context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы не являетесь администратором беседы`)
      }
    }
  }
})

updates.hear(/^кик\s(.*)/i, async (context) => {
  if(context.isChat) {
    let data = await vk.api.messages.getConversationMembers({
      peer_id: 2000000000 + chats[context.chatId].id,
    })
    for(var i = 0; i < data.count; i++) {
      if(data.items[i].member_id == context.senderId && data.items[i].is_admin == true) {
        let data = await vk.api.users.get({ 
          user_ids: context.$match[1], 
          fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
        });
        await vk.api.messages.removeChatUser({
          chat_id: chats[context.chatId].id,
          user_id: data[0].id
          })
      } else if(data.items[i].member_id == context.senderId && data.items[i].is_admin != true) {
        context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы не являетесь администратором беседы`)
      }
    }
  }
})

//Если поменяют название беседы
vk.updates.on('chat_title_update', async (context) => {
  context.send(`Слышь!`)
  await vk.api.messages.editChat({
    chat_id: chats[context.chatId].id,
    title: chats[context.chatId].title
  })
});
//Вошел/приглосили
vk.updates.on('chat_invite_user', async (context) => {
    if (!users[context.eventMemberId]) {
      let data = await vk.api.users.get({ 
        user_ids: context.eventMemberId, 
        fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
      });
      const date = new Date();
      users[context.eventMemberId] = {
        balance: 5000,
        sms: 0,
        warnings: 0,
        ban: 0,
        bonus: null,
        limit: null,
        sms_l: 0,
        regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
        rating: 0,
        cases: 0,
        keys: 0,
        marriage: {
          partner: 0,
          requests: []
        },
        nick: data[0].first_name,
        clan: "",
        transport: {
          car: 0,
          yacht: 0,
          airplane: 0,
          helicopter: 0
      },
      realty: {
          home: 0,
          apartment: 0
      },
      misc: {
          phone: 0,
          farm: 0
      }
      }; 
    }
    if( users[context.eventMemberId].warnings >= 3 || users[context.eventMemberId].ban == 1) {
      context.send({
        attachment: "photo-179364340_456239035",
        message: `Нельзя так! Игрок [id${context.eventMemberId}|${users[context.eventMemberId].nick}] наказан!`
      })
      vk.api.messages.removeChatUser({
        chat_id: context.chatId,
        user_id: context.eventMemberId
        })
    } else {
      context.send("Оу... Ебат.. Пздц...")
    }
});

//Вышел/Исключили
vk.updates.on('chat_kick_user', async (context) => {
    context.send({ 
    attachment: "photo-179364340_456239027",
    message: "Press F"})
});

//Игры
updates.hear(/^(?:казино)\s(.*)$/i, async (context) => {
	context.$match[1] = context.$match[1].replace(/(\.|\,)/ig, '');
	context.$match[1] = context.$match[1].replace(/(к|k)/ig, '000');
	context.$match[1] = context.$match[1].replace(/(м|m)/ig, '000000');
	context.$match[1] = context.$match[1].replace(/(вабанк|вобанк|все|всё)/ig, context.user.balance);

  let data = await vk.api.users.get({ 
    user_ids: context.senderId, 
    fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
  });

	if(!Number(context.$match[1])) return;
	if(context.$match[1] > 1000000000000000) return context.send(`[id${data[0].id}|${users[data[0].id].nick}], cтавка не может быть больше ` + utils_1.sp(1000000000000000) + '₽'); 
	context.$match[1] = Math.floor(Number(context.$match[1]));

	if(context.$match[1] < 0 || context.$match[1] === 0) return context.send(`[id${data[0].id}|${users[data[0].id].nick}], ставка должна быть минимум 1₽`);

	if(context.$match[1] > context.user.balance) return context.send(`[id${data[0].id}|${users[data[0].id].nick}], у вас нет данной суммы`);
	else if(context.$match[1] <= context.user.balance)
	{
    context.user.balance -= context.$match[1];
    const stav_1 = utils_1.pick([1,2,3]);
    const stav_2 = utils_1.pick([1,2,3]);
    const stav_3 = utils_1.pick([1,2,3]);

    if(stav_1 == stav_2) {
      let multiply = utils_1.pick([50,5,2,1]);

      context.user.balance += Math.floor(context.$match[1] * multiply);
      return context.send(`${multiply === 1 ? `[id${data[0].id}|${users[data[0].id].nick}], выши деньги остаются при вас` : `${multiply < 1 ? `[id${data[0].id}|${users[data[0].id].nick}], вы проиграли ${utils_1.sp(context.$match[1] * multiply)}₽` : `[id${data[0].id}|${users[data[0].id].nick}], вы выиграли ${utils_1.sp(context.$match[1] * multiply)}₽`}`} (x${multiply})
      💰 Баланс: ${utils_1.sp(context.user.balance)}₽`);
    } else if(stav_1 == stav_2) {
      let multiply = 2
      context.user.balance += Math.floor(context.$match[1] * multiply);
      return context.send(`${multiply === 1 ? `[id${data[0].id}|${users[data[0].id].nick}], выши деньги остаются при вас` : `${multiply < 1 ? `[id${data[0].id}|${users[data[0].id].nick}], вы проиграли ${utils_1.sp(context.$match[1] * multiply)}₽` : `[id${data[0].id}|${users[data[0].id].nick}], вы выиграли ${utils_1.sp(context.$match[1] * multiply)}₽`}`} (x${multiply})
      💰 Баланс: ${utils_1.sp(context.user.balance)}₽`);
    } else {
      const multiply = utils_1.pick([1,0,0.25,0.5,0.75]);
      context.user.balance += Math.floor(context.$match[1] * multiply);
      return context.send(`${multiply === 1 ? `[id${data[0].id}|${users[data[0].id].nick}], выши деньги остаются при вас` : `${multiply < 1 ? `[id${data[0].id}|${users[data[0].id].nick}], вы проиграли ${utils_1.sp(context.$match[1] * multiply)}₽` : `[id${data[0].id}|${users[data[0].id].nick}], вы выиграли ${utils_1.sp(context.$match[1] * multiply)}₽`}`} (x${multiply})
      💰 Баланс: ${utils_1.sp(context.user.balance)}₽`);
    }
	}
});

updates.hear(/^(?:стаканчик)\s([1-5])\s(.*)$/i, async(context) => {
    var arr = await context.text.split(' ')
    arr[2] = arr[2].replace(/(\.|\,)/ig, '');
    if(!Number(arr[2])) return;
    arr[2] = Math.floor(Number(arr[2]));

    if(arr[2] <= 0) return;

    if(arr[2] > context.user.balance) return context.send(`[id${context.senderId}|${users[context.senderId].nick}], у вас нет данной суммы
💰 Баланс: ${utils_1.sp(context.user.balance)}₽`);
    else if(arr[2] <= context.user.balance)
    {

        const multiply = utils_1.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
        const cup = utils_1.random(1, 5);

        if(cup == arr[1])
        {
            context.user.balance += Math.floor(arr[2] * multiply);
            return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы угадали! Приз ${Math.floor(arr[2] * multiply)}₽
💰 Баланс: ${utils_1.sp(context.user.balance)}₽`);
        } else {
            context.user.balance -= arr[2];
            await context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы не угадали, это был ${cup} стаканчик
💰 Баланс: ${utils_1.sp(context.user.balance)}₽`);
        }
    }
});

updates.hear(/^обновить$/i, async(context) => {
  if (!~admins.indexOf(context.senderId)) {
    return
  } else {
  let _users = [];
  // Перебираем нашу "базу"
  await context.send(`Ожидайте`)
  for (let key in users) {
    let data = await vk.api.users.get({ 
      user_ids: key, 
      fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id" 
    })
      // Не пропускаем админов или заблокированных
    _users.push({
        id: key,
        data: data 
    });
  }
  await _users.map((x, i) =>
  users[x.id] = {
      balance: users[x.id].balance,
      sms: users[x.id].sms,
      warnings: users[x.id].warnings,
      ban: users[x.id].ban,
      bonus: users[x.id].bonus,
      limit: users[x.id].limit,
      sms_l: users[x.id].sms_l,
      regDate: users[x.id].regDate,
      rating: (users[x.id].rating ? users[x.id].rating : 0),
      cases: (users[x.id].cases ? users[x.id].cases : 0),
      keys: (users[x.id].keys ? users[x.id].keys : 0),
      marriage: users[x.id].marriage,
      nick: users[x.id].nick,
      clan: users[x.id].clan,
      transport: users[x.id].transport,
    realty: users[x.id].realty,
    misc: users[x.id].misc
    }).join("\n")
    await context.send(`Усё!`)
}
});

updates.hear(/^обновить чат$/i, async(context) => {
  if (!~admins.indexOf(context.senderId)) {
    return
  } else {
  let _users = [];
  let data = [];
  // Перебираем нашу "базу"
  for (let key in chats) {
      // Не пропускаем админов или заблокированных
    _users.push({
        id: key
    });
  }
  await _users.map((x, i) => 
  chats[x.id] = {
      id: chats[x.id].id,
      title: chats[x.id].title, 
      messages: chats[x.id].messages,
    }).join("\n")
    await context.send(`Усё!`)
}
});

updates.hear(/^новый промокод\s(.*)\s(.*)\s(.*)$/i, async(context) => {
    if (!~admins.indexOf(context.senderId)) {
        context.send(`[id${context.senderId}|${users[context.senderId].nick}], у вас недостаточно прав.`)
      } else {
        var password = generator.generate({
            length: context.$match[1],
            numbers: true
        });
        promo[password] = {
            balance: Number(context.$match[2]),
            users: [],
            quantity: Number(context.$match[3])
        }
        await context.send(`Новый промокод ${password} на ${utils_1.sp(context.$match[2])}₽, успешно создан!
Количество:${utils_1.sp(promo[password].quantity)}`)
      }
})

updates.hear(/^клан создать\s([0-9]+):(.*)$/i, async(context) => {
  var the_amount = Number(5000000000);
  context.$match[2] = context.$match[2].replace(/(\.|\,)/ig, '?');

  if(users[context.senderId].clan != "") {
  return context.send(`${users[context.senderId].nick}, вы не можете создать клан пока находитесь в другом клане.`)
  }
  if(users[context.senderId].balance < the_amount) {
  return context.send(`
${users[context.senderId].nick}, у вас недостаточно средств
💰 Баланс: ${utils_1.sp(users[context.senderId].balance)}₽ 💰

🦊 Создание клана стоит: ${utils_1.sp(the_amount)}₽ 🦊`)
  }

  if(!context.$match[2]) {
    return context.send(`${users[context.senderId].nick}, видите название клана`)
  }

	if(context.$match[2].length >= 21) {
    return context.send(`${users[context.senderId].nick}, максимальная длина название клана составляет 20 символов`)
  }

  if(clan[context.$match[1]]) {
    return context.send(`${users[context.senderId].nick}, клан с таким id уже существует`)
  }

  if(!clan[context.$match[1]]) {
    clan[context.$match[1]] = {
      id: 0,
      users: 0,
      name: "",
      max_users: 5,
      сreator: context.senderId,
      rating: 0,
      min_rating: 0,
      level: 0
    }
  }
  clan[context.$match[1]].users += 1;
  clan[context.$match[1]].id = context.$match[1];
  clan[context.$match[1]].name = context.$match[2];

  users[context.senderId].clan = context.$match[1]
  users[context.senderId].balance -= the_amount

  await context.send(`${users[context.senderId].nick}, клан <<${clan[context.$match[1]].name}>> успешно создан.
id клана: ${clan[context.$match[1]].id}
Создатель: vk.com/id${clan[context.$match[1]].сreator}

💰 Баланс: ${utils_1.sp(users[context.senderId].balance)}₽ 💰`)
})

updates.hear(/^(?:клан войти|клан присоединиться|клан вход|клан qq|клан вступить)\s([0-9]+)$/i, async(context) => {
if(!clan[context.$match[1]]) {
  return context.send(`${users[context.senderId].nick}, данного клана не существует`)
}

if(users[context.senderId].clan != "") {
  return context.send(`${users[context.senderId].nick}, вы не можете вступить в клан пока находитесь в другом клане.`)
  }

if(clan[context.$match[1]].users == clan[context.$match[1]].max_users) {
  return context.send(`${users[context.senderId].nick}, клан переполнен`)
}

if(clan[context.$match[1]].сreator == context.senderId) {
  users[context.senderId].clan = context.$match[1]
  clan[context.$match[1]].users += 1
  return context.send(`С возвращением :3
Ваш клан <<${clan[context.$match[1]].name}>> вас любит💜`)
}

if(users[context.senderId].balance < 50000) {
  return context.send(`${users[context.senderId].nick}, для вступление в клан необходимо иметь при себе минимум ${utils_1.sp(50000)}₽
💰 Баланс: ${utils_1.sp(users[context.senderId].balance)}₽ 💰`)
}

if(users[context.senderId].rating < clan[context.$match[1]].min_rating) {
  return context.send(`${users[context.senderId].nick}, для вступление в данный клан необхождимо иметь минимум ${clan[context.$match[1]].min_rating}👑`)
}
users[context.senderId].balance -= Number(50000)
users[clan[context.$match[1]].сreator].balance += Number(50000)
users[context.senderId].clan = context.$match[1]

clan[context.$match[1]].users += 1
context.send(`${users[context.senderId].nick}, вы успешно вступили в клан <<${clan[context.$match[1]].name}>>`)
})

updates.hear(/^(?:клан выход|покинуть клан|клан выйти|клан бб|выйти с клана)/i, async (context) => {
  if(users[context.senderId].clan == "") {
    return context.send(`${users[context.senderId].nick}, вас нет в клане`)
  }
  clan[users[context.senderId].clan].users -= 1
  context.send(`Вы успешно вышли с клана <<${clan[users[context.senderId].clan].name}>>`)
  users[context.senderId].clan = ""  
})

updates.hear(/^клан инфо\s([0-9]+)/i, async (context) => {
if(!clan[context.$match[1]]) {
  return context.send(`Клан не найден`)
}
context.send(`
Информация о клане:
📢 ID | ${clan[context.$match[1]].id} 📢
✅ Название | ${clan[context.$match[1]].name} ✅
👥 Количество пользователей в клане: ${clan[context.$match[1]].users}/${clan[context.$match[1]].max_users} 👥
👤 Создатель: vk.com/${clan[context.$match[1]].сreator} 👤
👑 Рейтингов: ${clan[context.$match[1]].rating} 👑 
💢 Рейтинга необходимо для входа: ${clan[context.$match[1]].min_rating} 💢`)
})

updates.hear(/^клан рейтинг\s([0-9]+)\s([0-9]+)/i, async (context) => {
  if(!clan[context.$match[1]]) {
    return context.send(`Клан не найден`)
  }

  if(clan[context.$match[1]].сreator != context.senderId) {
    return context.send(`Вы не являетесь создателем клана`)
  }

clan[context.$match[1]].min_rating = context.$match[2]
context.send(`Минимальное количество рейтинга для клана ${clan[context.$match[1]].name} изменено.`)   
})

updates.hear(/^клан повысить\s([0-9]+)\s([0-9]+)/i, async (context) => {
  let options = {
    count: null
  }

  if(!clan[context.$match[1]]) {
    return context.send(`Клан не найден`)
  }

  if(!context.$match[2]) options.count = 1;
  if(context.$match[2]) {
    context.$match[2] = context.$match[2].replace(/(\.|\,)/ig, '');
    context.$match[2] = context.$match[2].replace(/(к|k)/ig, '000');
    context.$match[2] = context.$match[2].replace(/(м|m)/ig, '000000');

    context.$match[2] = Math.floor(Number(context.$match[2]));
    if(context.$match[2] <= 0) return;

    if(!context.$match[2]) options.count = 1;
    else if(context.$match[2]) options.count = context.$match[2];
  }
  
    if(( options.count * 250000000000 ) > context.user.balance) {
    context.send(`${context.user.nick}, у вас недостаточно средств
💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
    } else if(( options.count * 250000000000) <= context.user.balance) {
    clan[context.$match[1]].rating += options.count;
    clan[context.$match[1]].max_users += options.count * 5; 
    context.user.balance -= (options.count * 250000000000);
		context.send(`${context.user.nick}, вы успешно повысили рейтинг клана ${clan[context.$match[1]].name}, на ${options.count} 👑
Потратив на это: ${utils_1.sp(options.count * 250000000000)}₽
💰 Баланс: ${utils_1.sp(context.user.balance)}₽ 💰`)
    }
})


updates.hear(/^клан обнулить\s([0-9]+)/i, async (context) => {
  if(!clan[context.$match[1]]) {
    return context.send(`Клан не найден`)
  }

  if(clan[context.$match[1]].сreator != context.senderId) {
    return context.send(`Вы не являетесь создателем клана`)
  }
    clan[context.$match[1]] = {
      id: clan[context.$match[1]].id,
      users: clan[context.$match[1]].users,
      name: clan[context.$match[1]].name,
      max_users: 5,
      сreator: context.senderId,
      rating: 0,
      min_rating: 0,
      level: 0
		}
context.send(`Клан обнулён`)   
})

updates.hear(/^клан переименовать\s([0-9]+):(.*)/i, async (context) => {
  if(!clan[context.$match[1]]) {
    return context.send(`Клан не найден`)
  }

  if(clan[context.$match[1]].сreator != context.senderId) {
    return context.send(`Вы не являетесь создателем клана`)
  }

clan[context.$match[1]].name = context.$match[2]; 
context.send(`Название клана изменено.`)   
})

updates.hear(/^Клан инфо$/i, async (context) => {
    context.send(`Команды для кланов:
🐌 Клан создать <<id>>:<<название>> - Создаёт клан
🐌 Клан переименовать <<id>>:<<название>> - Изменить название клана
🐌Клан войти <<id>> - Присоединиться к клану 
🐌Клан выход - Выйти с клана
Клан инфо <<id>> - Информация о клане
🐌Клан рейтинг <<id>> <<число>> - Изменить рейтинг на вступление в клан
🐌Клан повысить <<id>> <<число>> - Повысить рейтинг клана`)
})

updates.hear(/^промо информация\s([^]+)$/i, async (context) => {
  if(!promo[context.$match[1]]) {
  context.send(`Данного промокода не существует 🏷`)
  } else {
    context.send(` 
    Информация о промокоде
    ✅ Промокод: ${context.$match[1]} ✅
    💶 Приз: ${utils_1.sp(promo[context.$match[1]].balance)}₽ 💶
    🔔 Количество: ${utils_1.sp(promo[context.$match[1]].quantity)} 🔔
    `)
  }
})

updates.hear(/^промо\s(.*)$/i, async(context) => {
if(!promo[context.$match[1]]) {
    context.send(`Данного промокода не существует 🏷`)
} else if(promo[context.$match[1]].users.indexOf(context.senderId) !== -1) {
    context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы уже активировали этот промокод.`)
} else if(promo[context.$match[1]].quantity <= 0) {
    context.send(`Промокоды кончились`)
}else{
    context.user.balance += promo[context.$match[1]].balance;
    promo[context.$match[1]].quantity -= 1;
    context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы активировали промокод на ${utils_1.sp(promo[context.$match[1]].balance)}₽
Осталось промокодов: ${promo[context.$match[1]].quantity}`)
    promo[context.$match[1]].users.push(context.senderId)
}
})

updates.hear(/^(?:color|цвет)\s([^]+)\s([^]+)\s([^]+)\s([^]+)\s([^]+)\s([^]+)$/i, async(context) => {
  const canvas = createCanvas(2000, 1200);
  var ctx = canvas.getContext('2d');
  var i = 1600
  for (let match of context.$match) {
  ctx.fillStyle = match;
  i -= 200
  ctx.fillRect(0, 0, 2000, i)
  console.log(i)
  }
  await context.sendPhoto(canvas.toBuffer())
});

updates.hear(/^(?:рейтинг)\s(.*)$/i, async (context) => {
	context.$match[1] = context.$match[1].replace(/(м|m)/ig, '000000');
	context.$match[1] = context.$match[1].replace(/(\.|\,)/ig, '');
	context.$match[1] = context.$match[1].replace(/(к|k)/ig, '000');

  if(!Number(context.$match[1])) return;
  context.$match[1] = Math.floor(Number(context.$match[1]));

  if(context.$match[1] <= 0) return;

  if(( context.$match[1] * 500000000 ) > context.user.balance) return context.send(`[id${context.senderId}|${users[context.senderId].nick}], у вас недостаточно денег
💰 Баланс: ${utils_1.sp(utils_1.sp(context.user.balance))}₽`);
	else if(( context.$match[1] * 500000000 ) <= context.user.balance)
	{
		context.user.balance -= ( context.$match[1] * 500000000 );
		context.user.rating += context.$match[1];

    return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы повысили свой рейтинг на ${context.$match[1]}👑 за ${utils_1.sp(context.$match[1] * 250000000)}₽
👑 Рейтинг: ${context.user.rating}
💰 Баланс: ${utils_1.sp(context.user.balance)}₽`);
	}
})

updates.hear(/^(?:рейтинг)$/i, async (context) => {
	return context.send(`[id${context.senderId}|${users[context.senderId].nick}], ваш рейтинг: ${utils_1.sp(context.user.rating)}👑`);
});

updates.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (context) => {
  let options = {
		count: null
	}

  context.$match[2] = context.$match[1].split(' ')[1];
  
  if(!context.$match[2]) options.count = 1;
	if(context.$match[2])
	{
		context.$match[2] = context.$match[2].replace(/(\.|\,)/ig, '');
		context.$match[2] = context.$match[2].replace(/(к|k)/ig, '000');
		context.$match[2] = context.$match[2].replace(/(м|m)/ig, '000000');

		context.$match[2] = Math.floor(Number(context.$match[2]));
		if(context.$match[2] <= 0) return;

		if(!context.$match[2]) options.count = 1;
		else if(context.$match[2]) options.count = context.$match[2];
	}
	if(/рейтинг/i.test(context.$match[1].toLowerCase()))
	{
		if(options.count > context.user.rating) return context.send(`[id${context.senderId}|${users[context.senderId].nick}], у вас нет рейтинга`);
		let a = (250000000 * options.count);

		context.user.balance += Math.floor(a);
		context.user.rating -= options.count;

		return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы продали ${options.count} ${utils_1.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils_1.sp(Math.floor(a))}₽`);
  }
  if(/кейс/i.test(context.$match[1].toLowerCase()))
	{
		if(options.count > context.user.cases) return context.send(`[id${context.senderId}|${users[context.senderId].nick}], у вас нет кейсов`);
		let a = (1250 * options.count);

		context.user.balance += Math.floor(a);
		context.user.cases -= options.count;

		return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы продали ${options.count} ${utils_1.decl(options.count, ['кейс', 'кейса', 'кейсов'])} за ${utils_1.sp(Math.floor(a))}₽`);
  }
  if(/ключ/i.test(context.$match[1].toLowerCase()))
	{
		if(options.count > context.user.keys) return context.send(`[id${context.senderId}|${users[context.senderId].nick}], у вас нет ключей`);
		let a = (75 * options.count);

		context.user.balance += Math.floor(a);
		context.user.keys -= options.count;

		return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы продали ${options.count} ${utils_1.decl(options.count, ['ключ', 'ключа', 'ключей'])} за ${utils_1.sp(Math.floor(a))}₽`);
    }
    if(/машин/i.test(context.$match[1].toLowerCase()))
	{
		if(!context.user.transport.car) return context.send(`У вас нет машины`);
		let a = Math.floor(cars[context.user.transport.car - 1].cost * 0.85);

		context.user.balance += Math.floor(cars[context.user.transport.car - 1].cost * 0.85);
		context.user.transport.car = 0;

		return context.send(`Вы продали свою машину за ${utils_1.sp(a)}₽`);
	}
	if(/яхт/i.test(context.$match[1].toLowerCase()))
	{
		if(!context.user.transport.yacht) return context.send(`У вас нет яхты`);
		let a = Math.floor(yachts[context.user.transport.yacht - 1].cost * 0.85);

		context.user.balance += Math.floor(yachts[context.user.transport.yacht - 1].cost * 0.85);
		context.user.transport.yacht = 0;

		return context.send(`Вы продали свою яхту за ${utils_1.sp(a)}₽`);
	}
	if(/самол(е|ё|йо)т/i.test(context.$match[1].toLowerCase()))
	{
		if(!context.user.transport.airplane) return context.send(`У вас нет самолёта`);
		let a = Math.floor(airplanes[context.user.transport.airplane - 1].cost * 0.85);

		context.user.balance += Math.floor(airplanes[context.user.transport.airplane - 1].cost * 0.85);
		context.user.transport.airplane = 0;

		return context.send(`Вы продали свой самолёт за ${utils_1.sp(a)}₽`);
    }
    if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(context.$match[1].toLowerCase()))
	{
		if(!context.user.transport.helicopter) return context.send(`У вас нет самолёта`);
		let a = Math.floor(helicopters[context.user.transport.helicopter - 1].cost * 0.85);

		context.user.balance += Math.floor(helicopters[context.user.transport.helicopter - 1].cost * 0.85);
		context.user.transport.helicopter = 0;

		return context.send(`Вы продали свой вертолёт за ${utils_1.sp(a)}₽`);
    }
    if(/дом/i.test(context.$match[1].toLowerCase()))
	{
		if(!context.user.realty.home) return context.send(`У вас нет дома`);
		let a = Math.floor(homes[context.user.realty.home - 1].cost * 0.85);

		context.user.balance += Math.floor(homes[context.user.realty.home - 1].cost * 0.85);
		context.user.realty.home = 0;

		return context.send(`Вы продали свой дом за ${utils_1.sp(a)}₽`);
    }
    if(/квартир/i.test(context.$match[1].toLowerCase()))
	{
		if(!context.user.realty.apartment) return context.send(`У вас нет квартиры`);
		let a = Math.floor(apartments[context.user.realty.apartment - 1].cost * 0.85);

		context.user.balance += Math.floor(apartments[context.user.realty.apartment - 1].cost * 0.85);
		context.user.realty.apartment = 0;

		return context.send(`Вы продали свою квартиру за ${utils_1.sp(a)}₽`);
    }
    if(/телефон/i.test(context.$match[1].toLowerCase()))
	{
		if(!context.user.misc.phone) return context.send(`У вас нет телефона`);
		let a = Math.floor(phones[context.user.misc.phone - 1].cost * 0.85);

		context.user.balance += Math.floor(phones[context.user.misc.phone - 1].cost * 0.85);
		context.user.misc.phone = 0;

		return context.send(`Вы продали свой телефон за ${utils_1.sp(a)}₽`);
    }
})


updates.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (context) => {
	if(!context.$match[1]) return context.send(`Машины: 
${context.user.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500₽)
${context.user.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500₽)
${context.user.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000₽)
${context.user.transport.car === 4 ? '🔹' : '🔸'} 4. Сегвей (7.500₽)
${context.user.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000₽)
${context.user.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000₽)
${context.user.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000₽)
${context.user.transport.car === 8 ? '🔹' : '🔸'} 8. Квадроцикл (80.000₽)
${context.user.transport.car === 9 ? '🔹' : '🔸'} 9. Багги (135.000₽)
${context.user.transport.car === 10 ? '🔹' : '🔸'} 10. Вездеход (200.000₽)
${context.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000₽)
${context.user.transport.car === 12 ? '🔹' : '🔸'} 12. Audi Q7 (750.000₽)
${context.user.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000₽)
${context.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000₽)
${context.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000₽)
${context.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000₽)
${context.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000₽)
${context.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000₽)
${context.user.transport.car === 19 ? '🔹' : '🔸'} 19. Yamaha YZF R6 (5.000.000₽)
${context.user.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (6.500.000₽)
${context.user.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (35.000.000₽)
${context.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000₽)
${context.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (50.000.000₽)
${context.user.transport.car === 24 ? '🔹' : '🔸'} 24. Tesla Semi (75.000.000₽)
${context.user.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (125.000.000₽)
${context.user.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (200.000.000₽)
${context.user.transport.car === 27 ? '🔹' : '🔸'} 27. Семёрка (195.900₽)
${context.user.transport.car === 28 ? '🔹' : '🔸'} 28. Трактор ТДТ-55А (1.100.000₽)
${context.user.transport.car === 29 ? '🔹' : '🔸'} 29. Трактор ВТЗ-Дт-75 (2.150.000₽)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(context.$match[1]));
	if(!sell) return;
	if(context.user.transport.car) return context.send(`У вас уже есть машина (${cars[context.user.transport.car - 1].name}), введите "Продать машину"`);

	if(context.user.balance < sell.cost) return context.send(`Недостаточно денег`);
	else if(context.user.balance >= sell.cost)
	{
		context.user.balance -= sell.cost;
		context.user.transport.car = sell.id;

		return context.send(`Вы купили "${sell.name}" за ${utils_1.sp(sell.cost)}₽`);
	}
});

updates.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (context) => {
	if(!context.$match[1]) return context.send(`Яхты: 
${context.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000₽)
${context.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000₽)
${context.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000₽)
${context.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000₽)
${context.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000₽)
${context.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000₽)
${context.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000₽)
${context.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000₽)
${context.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000₽)
${context.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000₽)
${context.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000₽)
${context.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000₽)
${context.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000₽)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(context.$match[1]));
	if(!sell) return;
	if(context.user.transport.yacht) return context.send(`У вас уже есть яхта (${yachts[context.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(context.user.balance < sell.cost) return context.send(`Недостаточно денег`);
	else if(context.user.balance >= sell.cost)
	{
		context.user.balance -= sell.cost;
		context.user.transport.yacht = sell.id;

		return context.send(`Вы купили "${sell.name}" за ${utils_1.sp(sell.cost)}₽`);
	}
});

updates.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (context) => {
	if(!context.$match[1]) return context.send(`Вертолеты: 
${context.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2₽)
${context.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000₽)
${context.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000₽)
${context.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000₽)
${context.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000₽)
${context.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000₽)
${context.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000₽)
${context.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000₽)
${context.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000₽)
${context.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000₽)
${context.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000₽)
${context.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000₽)
${context.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000₽)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(context.$match[1]));
	if(!sell) return;
	if(context.user.transport.helicopter) return context.send(`У вас уже есть вертолёт (${homes[context.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(context.user.balance < sell.cost) return context.send(`Недостаточно денег`);
	else if(context.user.balance >= sell.cost)
	{
		context.user.balance -= sell.cost;
		context.user.transport.helicopter = sell.id;

		return context.send(`Вы купили "${sell.name}" за ${utils_1.sp(sell.cost)}₽`);
	}
});

updates.hear(/^(?:дом|дома)\s?([0-9]+)?$/i, async (context) => {
	if(!context.$match[1]) return context.send(`Дома: 
${context.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250₽)
${context.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000₽)
${context.user.realty.home === 3 ? '🔹' : '🔸'} 3. Палатка (3.500₽)
${context.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000₽)
${context.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000₽)
${context.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (25.000$)
${context.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500$)
${context.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000₽)
${context.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (80.000₽)
${context.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (450.000₽)
${context.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (1.250.000₽)
${context.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (5.000.000₽)
${context.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (7.000.000₽)
${context.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (12.500.000₽)
${context.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (20.000.000₽)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(context.$match[1]));
	if(!sell) return;
	if(context.user.realty.home) return context.send(`У вас уже есть дом (${homes[context.user.realty.home - 1].name}), введите "Продать дом"`);

	if(context.user.balance < sell.cost) return context.send(`Недостаточно денег`);
	else if(context.user.balance >= sell.cost)
	{
		context.user.balance -= sell.cost;
		context.user.realty.home = sell.id;

		return context.send(`Вы купили "${sell.name}" за ${utils_1.sp(sell.cost)}$`);
	}
});

updates.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (context) => {
	if(!context.$match[1]) return context.send(`квартиры: 
${context.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000₽)
${context.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000₽)
${context.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000₽)
${context.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000₽)
${context.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000₽)
${context.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000₽)
${context.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000₽)
${context.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000₽)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(context.$match[1]));
	if(!sell) return;
	if(context.user.realty.apartment) return context.send(`У вас уже есть квартира (${apartments[context.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(context.user.balance < sell.cost) return context.send(`Недостаточно денег`);
	else if(context.user.balance >= sell.cost)
	{
		context.user.balance -= sell.cost;
		context.user.realty.apartment = sell.id;

		return context.send(`Вы купили "${sell.name}" за ${utils_1.sp(sell.cost)}₽`);
	}
});

updates.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (context) => {
	if(!context.$match[1]) return context.send(`телефоны: 
${context.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (250₽)
${context.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (500₽)
${context.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.000₽)
${context.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.000₽)
${context.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.000₽)
${context.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.000₽)
${context.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.000₽)
${context.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.000₽)
${context.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (100.000₽)
${context.user.misc.phone === 10 ? '🔹' : '🔸'} 10. Мегафон С1 (250.000₽)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(context.$match[1]));
	if(!sell) return;
	if(context.user.misc.phone) return context.send(`у вас уже есть телефон (${phones[context.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(context.user.balance < sell.cost) return context.send(`Недостаточно денег`);
	else if(context.user.balance >= sell.cost)
	{
		context.user.balance -= sell.cost;
		context.user.misc.phone = sell.id;

		return context.send(`Вы купили "${sell.name}" за ${utils_1.sp(sell.cost)}₽`);
	}
});

updates.hear(/(?:rand|рандом) ([0-9]+)/i, async(context) => {
    await context.send(
        `Случайное число в промежутке 1-${ context.$match[1] }
💜 — ${ getRandomInt(context.$match[1]) } — 💜`
    );
});

updates.hear(/^(?:брак)\s(.*)$/i, async(context) => {
  let data = await vk.api.users.get({ 
    user_ids: context.$match[1], 
    fields: "about,photo_100,bdate,online,followers_count,blacklisted,last_seen,nickname,online_app,screen_name,sex,photo_id",
    name_case: "ins"
  });

  if(context.user.marriage.partner) return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы уже в браке за ${data[0].first_name} (vk.com/${context.user.marriage.partner})`);
  if(Number(data[0].id) === context.senderId) return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы не можете жениться/выйти замуж за себя`);

  if(!users[data[0].id]) return context.send(`🧟 Пользователь не найден 🧟`);

  if(users[data[0].id].marriage.partner) return context.send(`[id${data[0].id}|${users[data[0].id].nick}] уже состоит в браке`);

    if(users[data[0].id].marriage.requests ==  context.senderId) {
      return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы уже делали предложение этому игроку`);
    }
    if(context.user.marriage.requests == data[0].id)
	{
		context.user.marriage.requests = [];
		context.user.marriage.partner = data[0].id;
    users[data[0].id].marriage.partner = context.senderId

		users[data[0].id].marriage.requests = [];
		users[data[0].id].marriage.partner = context.senderId;

		return context.send(`😍 [id${context.senderId}|${users[context.senderId].nick}], вы вступили в брак с игроком vk.com/id${data[0].id} 😍`);
	}

  users[data[0].id].marriage.requests.push(context.senderId);
	return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы сделали предложение игроку vk.com/id${data[0].id}`);
})

updates.hear(/^(?:изи брак)\s(.*)\s(.*)$/i, async(context) => {
  if (!~admins.indexOf(context.senderId)) {
    context.send(`${context.user.nick}, у вас недостаточно прав.`)
  } else {

  if(users[context.$match[1]].marriage.partner) return context.send(`1 пользователь уже состоит в браке`);
  if(users[context.$match[2]].marriage.partner) return context.send(`2 пользователь уже состоит в браке`);

  users[context.$match[1]].marriage.partner = context.$match[2];
  users[context.$match[2]].marriage.partner = context.$match[1];

    return context.send(`😍 Успешно 😍`);
  }
	})

updates.hear(/^(?:браки)$/i, async (context) => {
	if(users[context.senderId].marriage.partner) {
    return context.send(`[id${context.senderId}|${users[context.senderId].nick}], вы уже состоите в браке c vk.com/${users[context.senderId].marriage.partner}`);
  }
  if(users[context.senderId].marriage.requests == "") {
    return context.send(`У вас нет предложении на вступление в брак`)
  }
  return context.send(`🔱=-=Предложения=-=🔱
${users[context.senderId].marriage.requests.map(x=> `✅От игрока vk.com/id${x}✅`).join('\n')}` );
});

//`✅От игрока vk.com/id${x}`).join('\n')} 🚫`
updates.hear(/^(?:развод|развестись)$/i, async (context) => {
  if(!context.user.marriage.partner) return context.send(`😷 [id${context.senderId}|${users[context.senderId].nick}], вы не состоите в браке 😷`);

  for(let key in users) {
    if(users[key].marriage.partner == context.senderId) {
      context.user.marriage.partner = 0;
      users[key].marriage.partner = 0;
    
      return context.send(`🙄 [id${context.senderId}|${users[context.senderId].nick}], вы теперь свободный человек 🙄`);
    }
  }
});

updates.hear(/^(?:ник)\s(.*)$/i, async (context) => {
  context.$match[1] = context.$match[1].replace(/(\.|\,)/ig, '?');
  context.$match[1] = context.$match[1].replace(/(сова никогда не спит|&#1089;&#1086;&#1074;&#1072;&#32;&#1085;&#1080;&#1082;&#1086;&#1075;&#1076;&#1072;&#32;&#1085;&#1077;&#32;&#1089;&#1087;&#1080;&#1090;)/ig, 'Ха, попався!');
  context.$match[1] = context.$match[1].replace(/(vto.pe|&#118;&#116;&#111;&#46;&#112;&#101;|&#118;&#116;&#111;.&#112;&#101;|&#46;)/ig, 'Ха, попався!');
  
	if(context.$match[1].length >= 21) return context.send(`${users[context.senderId].nick}, максимальная длина ника 20 символов`);

	users[context.senderId].nick = context.$match[1];
	return context.send(`Вы теперь "${users[context.senderId].nick}"`);
});

updates.hear(/^(?:переведи)\s?([^]+):([^]+)$/i, async(context) => {
  context.$match[2] = context.$match[2].replace(/(\.|\,)/ig, '?');
  context.$match[1] = context.$match[1].replace(/(русский|руский|руский|rus)/ig, 'ru');
  context.$match[1] = context.$match[1].replace(/(английский|англиский|английскии|англискии)/ig, 'en');

  const key = 'trnsl.1.1.20180817T043432Z.65f0b876928cd46d.eca1670d6e7412653113fc48d989e5c7987e8939'
  await request.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${encodeURIComponent(key)}&lang=${context.$match[1]}&text=${encodeURIComponent(context.$match[2])}`, (e, r, b) => {
    if(!b || JSON.parse(b).code != 200) return
    context.send(`Перевод: \n ${JSON.parse(b).text[0]}`)
  })
})

updates.hear(/^переведи help$/i, async(context) => {
  context.send(`
Образец использование команды «переведи» 
===================== 
Переведи en:text 
🦊 En - язык на какой будет переведёт данный текст 🦊
🐬 Текст - текст который будет переводится. 🐬

Языки:
⚠ en - английский 🐿
⚠ ru - русский 🐿`)
})

updates.hear(/^dark смайлы$/i, async(context) => {
  if (!~admins.indexOf(context.senderId)) {
    return
  } else {
context.send(`
🐬 ¯\\_(ツ)_/¯ 🐬`)
  }
})

//Новое сообщение (не команда)
updates.hear(/(.*)/i, async(context) => {
    context.user.balance = context.user.balance + 1;

    if (getUnix() - context.user.spam < 60) {
    context.user.sms = context.user.sms + 1
    console.log(context.user.sms)
    } else {
    context.user.spam = getUnix();
    context.user.sms = 1
    console.log(context.user.sms)
    }

    if(context.isChat && context.user.sms >= 15) {
if(context.user.warnings < 3) {
    context.user.warnings = context.user.warnings + 1
    context.send(`Игроку [id${context.senderId}|${users[context.senderId].nick}] выдано предупреждение! Причина: Спам.
⚠ Предупреждений: ${context.user.warnings}⚠`)
    context.user.sms = 1
    context.user.sms_l = getUnix();
} else if(context.user.warnings >= 3) {
    context.user.ban = 1
    context.send({
      attachment: "photo-179364340_456239035",
      message: `Игроку [id${context.senderId}|${users[context.senderId].nick}] выдан бан! Причина: Спам.
Game Over`})
    context.user.sms_l = getUnix();
}}
  
    if(context.isChat && context.user.warnings >= 3 || context.user.ban == 1) {
    vk.api.messages.removeChatUser({
    chat_id: context.chatId,
    member_id: context.senderId
    })
    }
});

async function run() {
    await vk.updates.startPolling();
    console.log("Longpoll started");
}

setInterval(() => {
    fs.writeFileSync("./db/users.json", JSON.stringify(users, null, "\t"));
    fs.writeFileSync("./db/chats.json", JSON.stringify(chats, null, "\t"));
    fs.writeFileSync("./db/promo.json", JSON.stringify(promo, null, "\t"));
    fs.writeFileSync("./db/clan.json", JSON.stringify(clan, null, "\t"));
}, 1000)

run().catch(console.error);
// Get UnixDate in seconds
function getUnix() {
    return Math.floor(Date.now() / 1000);
}
// Random integer
function getRandomInt(x, y) { 
    return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
}
  
// Random element from array
function getRandomElement(array) { 
    return array[getRandomInt(array.length - 1)]; 
}

function sleep(ms) {
	var start = new Date().getTime()
	while ((new Date().getTime() - start) < ms) {}
	return 1
}

function getRandomItem(array) {
return array[Math.floor(Math.random()*array.length)]
}