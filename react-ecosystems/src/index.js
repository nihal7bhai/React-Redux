import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate, persistGate } from "redux-persist/lib/integration/react";
import ReactDom from "react-dom";
import App from "./App";
import { configureStore } from "./store";

const store = configureStore();
const persistor = persistStore(store);

ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
