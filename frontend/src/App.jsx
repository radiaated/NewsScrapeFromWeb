import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
