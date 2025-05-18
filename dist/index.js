/** @jsx createElement */
import { createElement, render } from '../src/utils.js';
const App = () => createElement("div", null, createElement("h1", null, "Hello MyReact!"), createElement("button", {
  onClick: () => alert('Clicked!')
}, "Click Me"));
const root = document.getElementById('root');
render({
  type: App
}, root); // match your API