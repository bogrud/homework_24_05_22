// // Все задания оформить в виде функций:
// // 1 Вывести знак * столько раз сколько задаст пользователь

printStars(6);

function printStars(countStars) {
  let star = '', i = 1;
  while (i <= countStars) {
    star = star + '* ';
    i++;
  }
  console.log(star);
}

// // 2 Вывод чисел от limit1 до limit2, которые кратны num

printNumber(13, 89, 7);

function printNumber (limit1, limit2, num) {

  for (limit1; limit1 <= limit2; limit1++){
    if (limit1%num == 0) console.log(limit1);
  }
}

// // 3 Сумма четных элементов массива

let array1 = [2, 13, 206, 17, 10, 23]; // Cумма четных элементов = 218

let sum = 0;
for (i = 0; i < array1.length; i++){
  if(array1[i]%2 == 0) sum += array1[i];
}
console.log(sum);

// 4 Обнулите все элементы массива меньше 10

let array2 = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4];

for(i = 0; i < array2.length; i++) {

  if(array2[i] < 10) {
    array2[i] = 0;
  }
}
console.log(array2);

