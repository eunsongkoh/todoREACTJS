import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//The HTML in JS script is called JSX, converted BTS because its not recognized 
//tells we wnt to render the html code with this root id 
// render the content returned by the custom elements in function App()

ReactDOM.render(<App />, document.getElementById('root'));