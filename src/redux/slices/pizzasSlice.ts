import axios from 'axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error',
}

type Items = {
  id: string
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

type FetchPizzasParams = {
  category: string
  search: string
  sortType: string
  currentPage: number
}

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: FetchPizzasParams) => {
    const { category, search, sortType, currentPage } = params
    const { data } = await axios.get<Items[]>(
      `https://63cbd10dea8551541515f71f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType}&order=desc${search}`
    )

    return data
  }
)

interface PizzasSliceState {
  items: Items[]
  status: string
}

const initialState: PizzasSliceState = {
  items: [],
  status: 'loading',
}

export const pizzasSliece = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Items[]>) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCES
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export const pizzasSelector = (state: RootState) => state.pizzas

export const { setItems } = pizzasSliece.actions

export default pizzasSliece.reducer
