function plus() {
  let num1, num2, result;
  num1 = document.getElementById("num1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);

  result = num1 + num2;
  document.getElementById("out").innerHTML = result;
}

function minus() {
  let num1, num2, result;
  num1 = document.getElementById("num1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);

  result = num1 - num2;
  document.getElementById("out").innerHTML = result;
}

function delet() {
  let num1, num2, result;
  num1 = document.getElementById("num1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);

  if (num1 == 0 || num2 == 0) {
    alert("На 0 ділити не можна");
  } else {
    result = num1 / num2;
  }
  document.getElementById("out").innerHTML = result;
}

function mult() {
  let num1, num2, result;
  num1 = document.getElementById("num1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);

  result = num1 * num2;
  document.getElementById("out").innerHTML = result;
}

function vids() {
  let num1, num2, result;
  num1 = document.getElementById("num1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);

  result = num1 % num2;
  document.getElementById("out").innerHTML = result;
}
