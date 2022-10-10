const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', func1);
function func1() {
  localStorage.setItem('rating', 1);
  console.log(`You have selected 1 out of 5`);
}

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', func2);
function func2() {
  localStorage.setItem('rating', 2);
  console.log(`You have selected 2 out of 5`);
}

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', func3);
function func3() {
  localStorage.setItem('rating', 3);
  console.log(`You have selected 3 out of 5`);
}

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', func4);
function func4() {
  localStorage.setItem('rating', 4);
  console.log(`You have selected 4 out of 5`);
}

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', func5);
function func5() {
  localStorage.setItem('rating', 5);
  console.log(`You have selected 5 out of 5`);
}