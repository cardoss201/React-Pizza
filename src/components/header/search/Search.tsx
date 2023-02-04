import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../../redux/slices/searchSlice'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

const Search: React.FC = () => {
  const dispatch = useDispatch()

  const [value, setValue] = React.useState<string>('')

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str))
    }, 250),
    []
  )
  const onChangeInut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground='new 0 0 32 32'
        id='Stock_cut'
        version='1.1'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <desc />
        <g>
          <path
            d='M21,21L21,21   c1.105-1.105,2.895-1.105,4,0l5.172,5.172c0.53,0.53,0.828,1.25,0.828,2v0C31,29.734,29.734,31,28.172,31h0   c-0.75,0-1.47-0.298-2-0.828L21,25C19.895,23.895,19.895,22.105,21,21z'
            fill='none'
            stroke='#000000'
            strokeLinejoin='round'
            strokeMiterlimit='10'
            strokeWidth='2'
          />
          <circle
            cx='11'
            cy='11'
            fill='none'
            r='10'
            stroke='#000000'
            strokeLinejoin='round'
            strokeMiterlimit='10'
            strokeWidth='2'
          />
          <path
            d='M11,5   c-3.314,0-6,2.686-6,6'
            fill='none'
            stroke='#000000'
            strokeLinejoin='round'
            strokeMiterlimit='10'
            strokeWidth='2'
          />
          <line
            fill='none'
            stroke='#000000'
            strokeLinejoin='round'
            strokeMiterlimit='10'
            strokeWidth='2'
            x1='18'
            x2='21'
            y1='18'
            y2='21'
          />
        </g>
      </svg>
      <input
        onChange={onChangeInut}
        value={value}
        className={styles.input}
        type='search'
        placeholder='Search pizza'
      />
    </div>
  )
}

export default Search
