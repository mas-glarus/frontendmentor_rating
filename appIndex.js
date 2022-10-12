const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', func1);
function func1() {
  localStorage.setItem('rating', 1);
}

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', func2);
function func2() {
  localStorage.setItem('rating', 2);
}

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', func3);
function func3() {
  localStorage.setItem('rating', 3);
}

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', func4);
function func4() {
  localStorage.setItem('rating', 4);
}

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', func5);
function func5() {
  localStorage.setItem('rating', 5);
}

const submit = document.getElementById('myBtn');
submit.addEventListener('click', funcSubmit);
function funcSubmit() {
  window.location.href = 'confirmation.html';
}