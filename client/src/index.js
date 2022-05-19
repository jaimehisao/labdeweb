import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import { BrowserRouter } from "react-router-dom"
import Routes from './Routes';

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)