const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const invokeAction = require('./contacts.js');
 
const arr = hideBin(process.argv);
const { argv } = yargs(arr);


invokeAction(argv);








// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const invokeAction = require('./contacts.js');

// // в змінну arr записуємо hideBin(process.argv) - масив, в якому записані всі команди  
// const arr = hideBin(process.argv);
// // якщо законсолити 'arr' в терміналі ввести "node index --action getAll" - то отримаємо масив,
// // в якому будуть 2 останні елементи вводу: [ '--action', 'getAll' ];

// // далі в yargs ми додаємо наш масив arr, а yargs його трансформує в об'єкт
// // якщо законсолимо argv, то побачимо: { _: [], '$0': 'index.js' }
// // якщо викличемо одну із команд node index --action getById --id 6, 
// // то побачимо: { _: [], action: 'getById', id: 6, '$0': 'index' }
// // тобто перший ключ - назва команди - action: 'getById', другий ключ - значення команди id: 6
// const { argv } = yargs(arr);
// console.log(argv);

// // і тепер просто передаємо як аргумент argv до функції invokeAction - і можемо працювати з додатком
// // через термінал
// invokeAction(argv);




