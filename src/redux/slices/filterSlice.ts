import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Sort = {
  name: string
  sort: string
}

interface FilterSliceState {
  categoryId: number
  page: number
  sort: Sort
}

const initialState: FilterSliceState = {
  categoryId: 0,
  page: 1,
  sort: {
    name: 'popularity',
    sort: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sort = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
  },
})

export const filterSelector = (state: RootState) => state.filter
export const sortSelector = (state: RootState) => state.filter.sort
export const sortTypeSelector = (state: RootState) => state.filter.sort.sort

export const { setCategoryId, setSortType, setCurrentPage } =
  filterSlice.actions

export default filterSlice.reducer
