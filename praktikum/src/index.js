import React from 'react';
import ReactDOM from 'react-dom';
import BMI from './BMI';
import Bank from './Bank';
import Harga from './Harga';
import Biner from './Convert/Biner';
import Decimal from './Convert/Decimal';
import Hexadecimal from './Convert/Hexadecimal';
import Octal from './Convert/Octal';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BMI />
      <hr />
      <Bank />
      <hr />
      <Harga />
      <hr />
      <Biner />
      <hr />
      <Decimal />
      <hr />
      <Hexadecimal />
      <hr />
      <Octal/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
