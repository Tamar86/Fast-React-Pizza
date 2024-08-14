/** Imports
configureStore:

Imported from @reduxjs/toolkit, this function simplifies the process of setting up a
 Redux store, providing sensible defaults and integrating well with Redux DevTools.
Reducers:
userReducer and cartReducer are imported from their respective slices (userSlice and cartSlice),
 which manage the state for user data and shopping cart data, respectively. */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

/** Store Configuration
configureStore:
This function is used to create a Redux store. It takes an object as a parameter with the
 reducer key, which is an object mapping slice names to their corresponding reducers.
*/

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
