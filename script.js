//1 способ
console.log(typeof(String(4))); //превратили один тип данных в другой

//2 способ
console.log(typeof('строка, ' + 5));
console.log('https://vk.com/catalog' + 5); //где 5 определяется уже js

//превратить любой тип данных в число
//1 number
console.log(typeof(Number('5')));
//2 унарный +
console.log(typeof(5 + +'5'));
//3 parseInt
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('hello', '');
console.log(typeof(ans));

//0, '', null, undefind, NaN все false, все остальное true это пустые массивы, объекты и строки...

//1 способ логического преобразования
let switcher = 0;
if (switcher) {
    console.log('working')
}

switcher = 1;
if (switcher) {
    console.log('working')
}

//2 способ
console.log(typeof(Boolean('5')));
//3 способ
console.log(typeof(!!('5')));