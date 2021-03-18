// Math.random()

// Math.min(1,5,100,62); //1
// Math.max(1,5,100,62) //100
// Math.pow(2,10) //вывод в степень


// arrays

// let arr = [
//    'String',
//    'String1', 
//    'String2', 
//    'String3'
// ];

// arr[2] = 'no string';

// console.log(arr[2]);
// console.log(arr[arr.length -1]);


// let arr = [
//    'String',
//    'String1', 
//    'String2', 
//    'String3'
// ];

// console.log(arr);

// arr[10] = 'this is string';

// console.log(arr);

// let users = [];

// let moders = [];


// function createUser(name) {
//     let user = {}
//     user.name = name
//     user.userID = Math.round(Math.random() * 100)
//     users.push(user)
// }

// createUser('dima')
// createUser('lolya')
// createUser('vasya')

// console.log(users)


// users.shift() // забрать сначала елемент 
// users.unshift() //добавить в начало массива
// users.pusр() // добавить в конец массива
// users.pop() // забрать с конца массива

// let arr = [
//     'String',
//     'String1',
//     'String2',
//     'String3',
// ]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let data of arr) {
//     console.log(data)
// }

// let allData = arr.toString()



// function sumInput() {
//     let numbers = [];

//     while (true) {
//         let value = prompt(`your nambe?`, 0);
//         if (value === '' || value === null) break;
//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;

//     }
//     console.log(sum)

// }
// sumInput()


// let arr = [
//     'String',
//     'String1', //1
//     'String2', //-
//     'String3', // 3
// ]

// arr.splice(1, 2, 'String UNIQuE');


// let arr = ['Dima', 'Vasya', 'Kolya', 'Dima', 'Vasya', 'kolya'];

// //SLICE METHOD HERE
// let newUsers = arr.slice(0, 2);

// Concat method here
// let simpleUsers = ['Dima', 'Vasya', 'Kolya', 'Dima', 'Vasya', 'kolya'];
// let admins = ['Dima', 'Vasya'];
// let superAdmins = ['Dima'];

// let users = simpleUsers.concat(admins, superAdmins, 'hahahah', 222, { key: 'Value' });


//FOREACH method here
// arr.forEach(function(item, index, array) {
//     console.log(`${item} is number ${index + 1} in this array: ${array}`)
// })
// arr.forEach((item) => console.log(`${item} is cool`)) //- запись через стерочную ф-цию

// arr.indexOf('Kolya', 3); // поиск по елементу массива
// arr.lastIndexOf('Dima'); // поиск по елементу массива, только с конца
// arr.includes('Dima'); // возвращает true or false

// let users = [
//     { name: 'Dima', userID: 1 },
//     { name: 'Dima', userID: 2 },
//     { name: 'Dima', userID: 3 },
//     { name: 'Dima', userID: 'fffffdddd' },
// ]

// users.find(item => item.userId == 'fffffdddd')


// -------------------GAMEDEV---------------------- //

// 1. Приветствие 
// 2. Выбор слова для игры
// 3. Спрашивать букву
// 4. Проверка данной буквы 
// 5. Учет отгаданнных букв
// 6. Состояние игры 
// 7. Завершать игру, если слово отгадано, или же игрок сам завершил 

//-----------------ПСЕВДОКОД-------------------------//

// Выбери случайное слово
// Пока слово не отгадано {
//     Покажи текущее состояние игры
//     Запроси букву у юзера
//     Если игрок нажал "отмена"{
//         выйдем с игры
//     }Иначе, если юзер  ввел больше одной буквы{
//         Сообщи юзеру, что необходимо ввести только одну букву
//     }В другом случае, если буква есть в нашем слове {
//         Обнови состояние игры + подставь букву в массив
//     }
// }



// Сообщаем о победе игрока и показываем отгаданное слово
// Спросить, хотите ли вы сыграть еще?

// function chesterFieldGame() {
//     let userName = prompt(`Как тебя зовут?`);
//     alert(`Привет ${userName}`);

//     let words = [
//         { word: 'Заяц', hint: 'серый летом' },
//         { word: 'Розетка', hint: '' },
//         { word: 'Мышка', hint: '' },
//         { word: 'Ковер', hint: '' },
//         { word: 'Дверь', hint: '' }
//     ];
//     let word = words[Math.floor(Math.random() * words.length)];


//     let answerArr = [];
//     for (let i = 0; i < word.length; i++) {
//         answerArr[i] = '-';
//     }
//     let remaininigLetters = word.length;


//     // Основной цыкл
//     while (remaininigLetters > 0) {
//         alert(`угадай словов! \n` + answerArr.join(' ')); // показываем текущее состояние (слово)
//         let guess = prompt(`введите букву, только одну: `);
//         if (guess === null) {
//             alert('Ну и ладно');
//             break;
//         } else if (guess.length !== 1) {
//             alert(`Введите только одну букву`);
//         } else {
//             for (let i = 0; i < word.length; i++) {
//                 if (word[i] == guess) {
//                     answerArr[i] = guess;
//                     remaininigLetters--;
//                 }
//             }
//         }


//     }
//     alert(`Поздравляю, автомобиль в студию!\n Слово:${word}`);
// }
// chesterFieldGame()

//Создать массив с названием дней. Ввести сегодняшний день недели словами
// let weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturday", ];

// let today = new Date();

// // getDay();
// let dayNumber = today.getDay();
// console.log(dayNumber);
// console.log(weekDays[dayNumber]);
// document.write((weekDays[dayNumber]));

//JSON methods
// let user = {
//     name: "Dima",
//     lastname: "Chvala",
//     phone: 096000000,
//     emails: ["fffff@gmail.com", "vvvvv@gmail.com"]
// };
// // console.log(user);
// let jsonObj = JSON.stringify(user);
// console.log(jsonObj.lastname);

// let reversJson = JSON.parse(jsonObj);
// console.log(reversJson);
// console.log(reversJson.name);


//Standaed function view
// function main() {
//     console.log('hello');
// }

// //Anonymous function (анонимная)
// let a = function() {
//     console.log("hello");
// };
// a();

// // Arrow function (стрелочная)
// let b = () => {
//     console.log("hello");
// };
// b();

//Recursion (рекурсия)
// function pow(x, n) {
//     let result = 1;

//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// console.log(pow(2, 3));

// function sumAll(...args) {
//     let sum = 0;

//     for (let arg of args) sum += arg;

//     return sum;
// }

// alert(sumAll(1));
// alert(sumAll(1, 2));
// alert(sumAll(1, 2, 3));


// let c = document.getElementsByClassName("oneDiv");
// console.log(c);
// c[0].style.backgroundColor = "blue";


// let e = document.getElementsByTagName("div");
// console.log(e);

// let a = document.createElement("div");
// console.log(a);


// b.innerText = 'inner text';
// console.log(b);

// let f = document.createTextNode("hello");
// console.log(f);

// let b = document.getElementById("myDiv");
// console.log(b);


let container = document.getElementById('myDiv');
let imgTag = document.createElement("img");
imgTag.src = "https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
imgTag.className = "img-width";

// imgTag.style.width = "120";
// imgTag.style.width = "150px";
container.appendChild(imgTag);


let header = document.createElement("h3");
// let headerText = document.createTextNode("Історія про степлер");
// // header.appendChild(headerText);                                             альтернатива
header.innerText = "Історія про степлер";
container.appendChild(header);


let article = document.createElement("p");
article.innerText = "Progressively create real-time initiatives whereas wireless alignments. Phosfluorescently aggregate best-of-breed process improvements through focused strategic theme areas. Proactively whiteboard value-added content after multimedia based niche markets. Uniquely e-enable customer directed web services whereas backend systems. Assertively grow client-centered paradigms before technically sound sources.\n" +
    "\n" +
    "Proactively fabricate future-proof alignments via distinctive vortals. Assertively productize exceptional \"outside the box\" thinking after highly efficient benefits. Compellingly incubate cross-media alignments and premier solutions. Credibly generate customer directed communities vis-a-vis alternative catalysts for change. Proactively supply turnkey methods of empowerment vis-a-vis granular markets.\n" +
    "\n" +
    "Dynamically expedite turnkey synergy before dynamic catalysts for change. Assertively scale team building relationships and distinctive services. Credibly strategize standardized deliverables and web-enabled growth strategies. Professionally empower cutting-edge action items with team building technologies. Synergistically incubate intuitive.";
container.appendChild(article);