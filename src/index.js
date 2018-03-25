import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.jsx';
import Menu from './page/menu/menu.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route ,HashRouter} from 'react-router-dom';
ReactDOM.render(
    (
        <HashRouter>
            <App/>
        </HashRouter>
    )
    ,
     document.getElementById('root'));
registerServiceWorker();
