import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
}

const currentUserSlice = createSlice({
  name: 'Current User',
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      return state
    },
    resetUser(state, action) {
      localStorage.removeItem('userInfo')
      state = initialState
      return state
    },
  },
})

export const currentUserReducer = currentUserSlice.reducer

export const currentUserActions = currentUserSlice.actions
