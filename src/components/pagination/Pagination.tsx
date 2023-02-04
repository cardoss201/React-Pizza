import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/filterSlice'

import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

const Pagination: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
    />
  )
}

export default Pagination
