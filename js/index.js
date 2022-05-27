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

let userItem1 = [2, 13, 206, 17, 10, 23]; // Cумма четных элементов = 218

task1(userItem1);

function task1(a){

  let sum = 0;
  for (i = 0; i < a.length; i++){
    if(a[i]%2 == 0) sum += a[i];
  }
  console.log(sum);
  return sum;
}

// 4 Обнулите все элементы массива меньше 10

let userItem2 = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4];

task2(userItem2);

function task2(a) {
  for(i = 0; i < a.length; i++) {
    if(a[i] < 10) {
      a[i] = 0;
    }
  }
  console.log(a);
}





