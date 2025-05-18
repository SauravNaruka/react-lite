/** @jsx createElement */
import { createElement, render } from '../src/utils.js';

const App = () => (
  <div>
    <h1>Hello MyReact!</h1>
    <button onClick={() => alert('Clicked!')}>Click Me</button>
  </div>
);

const root = document.getElementById('root');
render({ type: App }, root); // match your API
