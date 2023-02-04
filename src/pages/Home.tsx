import React from 'react'
import { useSelector } from 'react-redux'
import {
  filterSelector,
  setCategoryId,
  sortTypeSelector,
} from '../redux/slices/filterSlice'
import { fetchPizzas, pizzasSelector } from '../redux/slices/pizzasSlice'
import { searchValueSelector } from '../redux/slices/searchSlice'

import Categories from '../components/categories/Categories'
import Sort from '../components/sort/Sort'
import PizzaBlock from '../components/pizza-block/PizzaBlock'
import PizzaBlockSkeleton from '../components/pizza-block/PizzaBlockSkeleton'
import Pagination from '../components/pagination/Pagination'
import { useAppDispatch } from '../redux/store'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const { categoryId, page: currentPage } = useSelector(filterSelector)
  const sortType = useSelector(sortTypeSelector)
  const searchValue = useSelector(searchValueSelector)
  const { items: pizzaItems, status } = useSelector(pizzasSelector)

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, [])

  const getData = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(fetchPizzas({ category, search, sortType, currentPage }))

    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    getData()
  }, [categoryId, searchValue, currentPage, sortType])

  const pizzas = pizzaItems.map((pizza: any) => (
    <PizzaBlock key={crypto.randomUUID()} {...pizza} />
  ))

  const skeletons = [...new Array(6)].map(() => (
    <PizzaBlockSkeleton key={crypto.randomUUID()} />
  ))

  return (
    <>
      <div className='content__top'>
        <Categories categoryId={categoryId} setCategoryId={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>All Pizzas</h2>
      {status === 'error' ? (
        <div>
          <h2>An error occured 😐</h2>
          <p>Cannot fetch pizzas</p>
        </div>
      ) : (
        <div className='content__items'>
          {status === 'loading' ? skeletons : pizzas}
        </div>
      )}

      <Pagination />
    </>
  )
}

export default Home
