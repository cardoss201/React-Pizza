import React from 'react'

type CategoriesProps = {
  categoryId: number
  setCategoryId: (id: number) => void
}

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ categoryId, setCategoryId }) => {
    const categoties: string[] = [
      'All',
      'Meat',
      'Vgetarian / Vegan',
      'Grill',
      'Spicy',
      'Closed',
    ]

    return (
      <div className='categories'>
        <ul>
          {categoties.map((category, idx) => (
            <li
              key={crypto.randomUUID()}
              onClick={() => setCategoryId(idx)}
              className={categoryId === idx ? 'active' : ''}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    )
  }
)

export default Categories
