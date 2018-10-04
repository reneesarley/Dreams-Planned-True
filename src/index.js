import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import dreamListReducer from './reducers/dream-list-reducer';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
)

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
