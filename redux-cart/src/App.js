import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from 'redux'
import { DECREASE, INCREASE } from './actions'
import reducer from './reducer'
import { Provider }  from 'react-redux'

const initialStore = {
  cart: cartItems,
  total: 100.01,
  amount: 1
}

const store = new createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Navbar cart={store.getState()} />
      <CartContainer />
    </Provider>
  );
}

export default App;
