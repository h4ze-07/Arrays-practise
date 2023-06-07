// Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.
function initializeArray() {
    let arr = [];
    let arrLength = Number(prompt('Введіть довжину массиву: '));
    arr.length = arrLength;
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(prompt(`Введіть ЧИСЛОВИЙ елемент масиву, під індексом ${i}: `));
    }
    alert('Ваш створений масив: ' + arr.join(', '));

    arr.sort(function(a, b){return b - a});
    alert('Ваш відсортований за зростанням масив: ' + arr.join(', '));

    arr.splice(1, 3);
    alert('Ваш створений масив, після видалення елементів зі 2 по 4 (включно): ' + arr.join(', '));
}
initializeArray();



// Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let arrTest = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
let arrTestMultiplied = 1;

let arrTestSum = 0;
let counter = 0;
for (let i = 0; i <= arrTest.length; i++) {
    if (arrTest[i] > 0) {
        arrTestSum += arrTest[i];
        counter++;

        arrTestMultiplied *= arrTest[i];
    }
}
console.log('Сума усіх позитивних елементів: ' + arrTestSum);
console.log('Кількість позитивних елементів: '+ counter);

// Знайти мінімальний елемент масиву та його порядковий номер.
function findMin() {
    let minValue = Math.min.apply(null, arrTest);
    for (let i = 0; i <= arrTest.length; i++) {
        if (arrTest[i] === minValue) {
            console.log('Мінімальний елемент масиву: '+ minValue);
            console.log(`Порядковий номер цього елементу у масиві: ${i + 1}`);
            console.log('Індекс цього елементу у масиві: '+ i);
        }
    }
}
findMin();

// Знайти максимальний елемент масиву та його порядковий номер.
function findMax() {
    let maxValue = Math.max.apply(null, arrTest);
    for (let i = 0; i <= arrTest.length; i++) {
        if (arrTest[i] === maxValue) {
            console.log('Максимальний елемент масиву: '+ maxValue);
            console.log(`Порядковий номер цього елементу у масиві: ${i + 1}`);
            console.log('Індекс цього елементу у масиві: '+ i);
        }
    }
}
findMax();

// Визначити кількість негативних елементів.
let negativeCounter = 0;
for (let i = 0; i <= arrTest.length; i++) {
    if (arrTest[i] < 0) {
        negativeCounter++;
    }
}
console.log('Кількість негативних елементів: ' + negativeCounter);

// Знайти кількість непарних позитивних елементів.
let positiveUnpairSum = 0;

let positiveUnpairCounter = 0;
for (let i = 0; i <= arrTest.length; i++) {
    if (arrTest[i] > 0 && arrTest[i] % 2 !== 0) {
        positiveUnpairCounter++;
        positiveUnpairSum += arrTest[i];
    }
}
console.log('Кількість непарних позитивних елементів: ' + positiveUnpairCounter);

// Визначити кількість парних позитивних елементів.
let positivePairSum = 0;

let positivePairCounter = 0;
for (let i = 0; i <= arrTest.length; i++) {
    if (arrTest[i] > 0 && arrTest[i] % 2 === 0) {
        positivePairCounter++;
        positivePairSum += arrTest[i];
    }
}
console.log('Кількість парних позитивних елементів: ' + positivePairCounter);

// Знайти суму парних позитивних елементів.
console.log('Сума парних позитивних елементів: ' + positivePairSum);
// Знайти суму непарних позитивних елементів.
console.log('Сума не парних позитивних елементів: ' + positiveUnpairSum);

// Знайти добуток позитивних елементів.
console.log('Добуток позитивних елементів: ' + arrTestMultiplied); //Я ДОБАВИВ ЦЮ ЗМІННУ У ПЕРШУ ЗАДАЧУ, ЩОБ ДВІЧІ НЕ ПЕРЕПИСУВАТИ ЦИКЛ

// Знайти найбільший серед елементів масиву, решту занулити.
arrTestCopy = [];
for (let i = 0; i < arrTest.length; i++) {
    arrTestCopy.push(arrTest[i]);
}
for (let i = 0; i < arrTestCopy.length; i++) {
    let arrTestCopyMaxElement = Math.max.apply(null, arrTestCopy);
    
    if (arrTestCopy[i] !== arrTestCopyMaxElement) {
        arrTestCopy[i] = 0;
    }
}
console.log(arrTestCopy);