import React from "react";
import { Provider } from "react-redux";

import MainApp from "./app/index";
import store from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
