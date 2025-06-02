let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let input = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    let value = e.target.textContent;

    if (value === 'AC') {
      input = "";
      display.value = "0";
    }

    else if (value === 'C') {
      input = input.slice(0, -1);
      display.value = input || "0";
    }

    else if (value === '=') {
      input = eval(input).toString(); 
      display.value = input;
    }

    else {
      input += value;
      display.value = input;
    }
  })
}
