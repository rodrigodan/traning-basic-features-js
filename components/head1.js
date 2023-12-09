import { createText } from './text';
export function createHead1({ label }) {
  let head1 = document.createElement('h1');
  let text = createText({ label });
  head1.append(text);
  return head1;
}
