import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import classes from "./index.module.css";
import { legacy_createStore as createStore } from 'redux'


const defolt = {
  cash: null
}
const reducer = (state = defolt, action) => {
  switch (action.type) {
    case "ADDDATA": return { ...state, cash: action.data };

    default: return state;
  }

}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={classes.contentRoot}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </div>
);

