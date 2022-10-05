

document.getElementById("myBtn").addEventListener("click", myFunction);
      function myFunction() {
        location.replace("./confirmation.html");
      }



let valBtn1 = '';
let valBtn2 = '';
let valBtn3 = '';
let valBtn4 = '';
let valBtn5 = '';

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', func1);
function func1() {
  valBtn1 = btn1.innerHTML;
  console.log(valBtn1);
}

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', func2);
function func2() {
  valBtn2 = btn2.innerHTML;
  console.log(valBtn2);
}

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', func3);
function func3() {
  valBtn3 = btn3.innerHTML;
  console.log(valBtn3);
}

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', func4);
function func4() {
  valBtn4 = btn4.innerHTML;
  console.log(valBtn4);
}

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', func5);
function func5() {
  valBtn5 = btn5.innerHTML;
  console.log(valBtn5);
}