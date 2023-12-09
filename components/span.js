// import { createText } from './text';
export function createSpan(props) {
  // console.log(props);
  let span = document.createElement('span');
  span.setAttribute('id', props.id);
  span.textContent = props.label;
  // span.append(createText(props.label));
  // console.log(span);
  return span;
}
