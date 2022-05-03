import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import { BrowserRouter } from "react-router-dom"
import Routes from './Routes';

const rootElement = document.getElementById("root")

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  rootElement
)