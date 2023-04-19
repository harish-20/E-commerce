import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'Cart',
  initialState: initialState,
  reducers: {
    loadCart(state, action) {
      const storedState = localStorage.getItem('cart')
      if (storedState) {
        state = JSON.parse(storedState)
        return state
      }
      console.log('hwlle', JSON.parse(storedState))
      return initialState
    },
    resetCart(state, action) {
      localStorage.removeItem('cart')
      return initialState
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

      localStorage.setItem('cart', JSON.stringify(state))
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

      localStorage.setItem('cart', JSON.stringify(state))
      return state
    },
  },
})

export const cartReducer = cartSlice.reducer

export const cartActions = cartSlice.actions
