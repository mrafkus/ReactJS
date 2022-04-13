import React from 'react';
import ReactDOM from 'react-dom';
import Banding from './Banding';
import Maksimum from './Maksimum';
import GanGen from './Ganjil';
import GanGen2 from './Ganjil2';
import Jumlah from './Jumlah';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Banding />
      <hr />
      <GanGen />
      <hr />
      <Jumlah />
      <hr />
      <GanGen2 />
      <hr />
      <Maksimum />
      <hr />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
