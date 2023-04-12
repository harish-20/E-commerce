import { configureStore } from '@reduxjs/toolkit'

import { currentUserReducer } from '../slices/currentUser'
import { cartReducer } from '../slices/cart'

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    cart: cartReducer,
  },
})

export default store
