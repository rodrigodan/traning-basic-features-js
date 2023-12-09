import { createText } from './text.js';
export function createButton({ label, onclick }) {
  let button = document.createElement('BUTTON');
  // let {label, }
  button.append(createText({ label, id: label }));
  button.addEventListener('click', onclick);
  // button.setAttribute('onclick', onclick);
  // console.log(button);
  // preventDefault();
  return button;
}
// export default createButton;
