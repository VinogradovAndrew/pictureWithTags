import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import styles from '../css/css.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

window.addEventListener("dragover", function (e) {
    e = e || event;
    e.preventDefault();
}, false);
window.addEventListener("drop", function (e) {
    e = e || event;
    e.preventDefault();
}, false);
