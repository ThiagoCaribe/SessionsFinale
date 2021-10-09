import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './CarrinhoEx/home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detalhes  from './CarrinhoEx/detalhes'
import Carrinho from './CarrinhoEx/carrinho'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={Detalhes} />
        <Route path="/carrinho" component={Carrinho} />

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


