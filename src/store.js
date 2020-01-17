import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);
store.subscribe(() => {
  const allState = store.getState();
  const { cartItems, orderTotal } = allState.starshipReducer; 
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("orderTotal", JSON.stringify(orderTotal));
 
});
export default store;
