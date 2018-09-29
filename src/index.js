import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import dreamListReducer from './reducers/dream-list-reducer';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
};

render(App);

registerServiceWorker();

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
/*eslint-enable */
