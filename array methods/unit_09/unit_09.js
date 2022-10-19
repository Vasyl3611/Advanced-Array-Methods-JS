// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью find должна найти первый элемент массива a1, значение которого лежит от a1_from до a1_to (больше a1_from но меньше a1_to). Вывести найденный элемент в out-1. Если значение не найдено то выводить undefined.


let a1 = [13, 15, 22, 23, 26, 35, 72];
let a1_from = 23;
let a1_to = 27; 
// ожидаю 26, но вы протестируйте и на других

const f1 = () => {
	a1_res = a1.find(item => {
		return item > a1_from && item < a1_to; 
	})
	document.querySelector('.out-1').innerHTML = a1_res;
}


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью find должна найти первый элемент массива a2, значение которого лежит от a2_from до a2_to (больше a2_from но меньше a2_to). Вывести элемент в out-2. Если значение не найдено то выводить false.

let a2 = [13, 15, 22, 23, 26, 35, 72];
let a2_from = 23;
let a2_to = 24; 

const f2 = () => {
	a2_res = a2.find(item => {
		if(item > a2_from && item < a2_to)
		return true
	})
	if (a2_res !== undefined) a2_res = true;
	a2_res = false
	document.querySelector('.out-2').innerHTML = a2_res;
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью FILTER должна найти все элементы массива a3, значение которых лежит от a3_from до a3_to (больше a3_from но меньше a3_to). Добавить их в a3_res, предварительно очистить a3_res. В out-3 вывести нулевой элемент массива a3_res. Считаем что в a3_res будет всегда минимум одно значение. 

let a3 = [13, 15, 22, 23, 26, 35, 72];
let a3_from = 14;
let a3_to = 25; 
let a3_res = [];

const f3 = () => {
	a3_res = a3.filter(item => {
		return a3_from < item && a3_to > item;
	})
	document.querySelector('.out-3').innerHTML = a3_res[0];
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция с помощью FIND должна найти первый элемент строки str4, который лежит от a4_from, до a4_to(строго больше, строго меньше). Вывести результат в out-4. Если совпадений нет вывести undefined. Обратите внимание, find не работает со строками!


let str4 = 'a_baba_galamaga_tvoe_korito_est_nesti';
let a4_from = 'k';
let a4_to = 't';

const f4 = () => {
	a4_res = str4.find(item => {
		return a4_from < item && a4_to > item;
	})
	document.querySelector('.out-4').innerHTML = a4_res;
} 

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция с помощью findIndex должна найти индекс элемента массива a5, значение которого лежит от a5_from до a5_to (больше a5_from но меньше a5_to). Вывести найденный индекс в out-5. Если значение не найдено то выводить -1.

let a5 = [13, 15, 22, 23, 26, 35, 72];
let a5_from = 23;
let a5_to = 67; 

const f5 = () => {
	a5_res = a5.findIndex(item => {
		return a5_from < item && a5_to > item;
	})
	document.querySelector('.out-5').innerHTML = a5_res;
}

// TASK 06
//  По нажатию b-6 выполняется функция f6. Функция с помощью findIndex должна найти ПОСЛЕДНИЙ индекс элемента массива a6, значение которого лежит от a6_from до a6_to (больше a6_from но меньше a6_to). Вывести найденный индекс в out-6. Если значение не найдено то выводить false.


let a6 = [13, 15, 22, 23, 26, 35, 72];
let a6_from = 23;
let a6_to = 67; 

const f6 = () => {
	a6_2 = a6.reverse();
	a6_res = a6_2.findIndex(item => {
		return a6_from < item && a6_to > item;
	})
	document.querySelector('.out-6').innerHTML = a6_res;
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция с помощью lastIndexOf должна найти наибольший индекс символа a7_1 в строке str7, и вывести out-7. Если значение не найдено то выводить -1. Обратите внимание, что lastIndexOf зависит от регистра. 


let str7 = 'cccaBCcbBDabBddcCadcDbACacbbCdbBCADBDBdaAdcCd';
let a7_1 = 'C'; // 43

const f7 = () => {
	a7_res = str7.lastIndexOf(a7_1)
	document.querySelector('.out-7').innerHTML = a7_res;
}

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция с помощью lastIndexOf должна найти наибольший индекс символа a8_1 в строке str8, и вывести out-8. Если значение не найдено то выводить -1. Реализуйте поиск независимо от регистра. 

let str8 = 'C#CdABd$d@$Ab!#@#bcAaB@c$D#@AD$A!b#!D!BB@CaAD@###@';
let a8_1 = 'a'; // 43 ожидаю и на a и на A

const f8 = () => {
	a8_res = str8.toLowerCase().lastIndexOf(a8_1)
	document.querySelector('.out-8').innerHTML = a8_res;
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция с помощью lastIndexOf должна найти наибольший индекс символа a9_1 в массиве a9, и вывести out-9. Если значение не найдено то выводить -1. 

let a9 = ['2', '17', '45', '5', '14', '5', '45', '107']; 
let a9_1 = '5'; // ожидаю индекс 5

const f9 = () => {
	a9_res = a9.lastIndexOf(a9_1)
	document.querySelector('.out-9').innerHTML = a9_res;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция должна заполнить массив a10_res, на основе массива значений a10 и массива индексов a11. Т.е. мы берем числа из a11 и смотрим есть ли значения с такими индексами в a10. Если есть - добавляем значения в a10_res. Результат a10_res выводим в out-10 через пробел. Перед заполнением чистим a10_res. Если значения с таким индексом не существует пропускаем индекс.

let a10 = [-2, 3, -4, 5, -6, 7];  
let a11 = [0,4,22];
let a10_res = []; // ожидаю [-2, -6];

const f10 = () => {
    a10_res = [];
    a11.forEach(elem => {
        if (a10[elem] !== undefined) {
            a10_res.push(a10[elem]);
        }
    });
    document.querySelector('.out-10').textContent = a10_res.join(' '); 
}


document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', f10);