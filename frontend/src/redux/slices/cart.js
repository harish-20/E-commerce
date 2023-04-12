import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    loadCart(state, action) {
      state = JSON.parse(localStorage.getItem('cart')) || initialState

      return state
    },
    storeCart(state, action) {
      localStorage.setItem('cart', JSON.stringify(state))
    },
    addItem(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id,
      )

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex]
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + action.payload.quantity,
        }

        state.cartItems[existingItemIndex] = updatedItem
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: action.payload.quantity },
        ]
      }
      return state
    },
    removeItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id,
      )

      if (state.cartItems[itemIndex].quantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id,
        )

        state.cartItems = updatedCartItems
      } else {
        const item = state.cartItems[itemIndex]
        const updatedItem = { ...item, quantity: item.quantity - 1 }

        state.cartItems[itemIndex] = updatedItem
      }
      return state
    },
  },
})

export const cartReducer = cartSlice.reducer

export const cartActions = cartSlice.actions
