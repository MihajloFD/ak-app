import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
window.jQuery = jquery;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
