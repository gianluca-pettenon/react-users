import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({

  routes() {

    this.namespace = 'api';

    this.get('/users', () => {
      return [
        {
          id: 1,
          name: 'GIANLUCA PETTENON',
          username: 'gianluca.pettenon',
          profile: 'Desenvolvedor',
          status: 'Ativo',
          created: new Date(),
        }
      ]
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
