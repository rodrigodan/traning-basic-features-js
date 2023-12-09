// Import stylesheets
import './style.css';
import { Calculator } from './calculator';

import { createInput } from './components/input.js';
import { createButton } from './components/button.js';
import { createForm } from './components/form.js';
import { createHead1 } from './components/head1.js';
import { createSpan } from './components/span.js';

// Write Javascript code!

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let calculator = new Calculator(10, 25);

let div = document.getElementById('app');
let form = createForm();
div.append(form);

let h1 = createHead1({ label: 'Resultado' });

div.append(h1);

form.append(createInput({ id: 'input-a' }));
form.append(createInput({ id: 'input-b' }));

form.append(
  createButton({
    label: '+',
    onclick: (event) => {
      event.preventDefault();
      let { input1Value, input2Value } = getValues();
      let value = calculator.sum(input1Value, input2Value);
      saveResult({
        label: `${input1Value} + ${input2Value} = ${value}`,
        id: 'resultado-id',
      });
    },
  })
);

form.append(
  createButton({
    label: 'x',
    onclick: (event) => {
      event.preventDefault();
      let { input1Value, input2Value } = getValues();
      let value = calculator.multiply(input1Value, input2Value);
      saveResult({
        label: `${input1Value} x ${input2Value} = ${value}`,
        id: 'resultado-id',
      });
    },
  })
);

form.append(
  createButton({
    label: '/',
    onclick: (event) => {
      event.preventDefault();
      let { input1Value, input2Value } = getValues();
      let value = calculator.divide(input1Value, input2Value);
      saveResult({
        label: `${input1Value} / ${input2Value} = ${value}`,
        id: 'resultado-id',
      });
    },
  })
);

form.append(
  createButton({
    label: '-',
    onclick: (event) => {
      event.preventDefault();
      let { input1Value, input2Value } = getValues();
      let value = calculator.sub(input1Value, input2Value);
      saveResult({
        label: `${input1Value} - ${input2Value} = ${value}`,
        id: 'resultado-id',
      });
    },
  })
);

function getValues() {
  let input1Value = document.getElementById('input-a').value;
  let input2Value = document.getElementById('input-b').value;
  return { input1Value, input2Value };
}
function saveResult(props) {
  console.log(props);
  let elementHtml = getElement(props);
  console.log(elementHtml);
  if (!elementHtml) {
    let span = createSpan(props);
    div.append(span);
  } else {
    elementHtml.textContent = props.label;
  }
}

function getElement({ id }) {
  let el = document.getElementById(id);
  return el;
}

// function createInput({ id }) {
//   let input = document.createElement('INPUT');
//   input.setAttribute('id', id);
//   console.log(input);
//   return input;
// }
// function createForm() {
//   let form = document.createElement('form');
//   return form;
// }

// function createButton({ label, onclick }) {
//   let button = document.createElement('BUTTON');
//   button.append(createText({ label }));
//   button.setAttribute('onclick', onclick);
//   return button;
// }

// function createText({ label }) {
//   let text = document.createTextNode(label);
//   return text;
// }
