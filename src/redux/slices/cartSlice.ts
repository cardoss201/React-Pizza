import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { RootState } from '../store'

export type CartItems = {
  id: string
  title: string
  price: number
  imageUrl: string
  type: string
  size: number
  count: number
}
export type AddCartItems = {
  id: string
  title: string
  price: number
  imageUrl: string
  type: string
  size: number
}

interface CartSliceState {
  items: CartItems[]
  totalPrice: number
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<AddCartItems>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)

      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count--

        state.totalPrice = calcTotalPrice(state.items)
      }
    },
    clearCart(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const cartSelector = (state: RootState) => state.cart

export const cartItemSelector = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id)

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions

export default cartSlice.reducer
