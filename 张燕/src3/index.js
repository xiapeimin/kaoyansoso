import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import MyChat from './container/MyChat'

ReactDom.render(
    <App/>,
    document.getElementById('root')
);