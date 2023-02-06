import React from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const PizzaInfo: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string
    price: number
    title: string
  }>()

  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    const getPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://63cbd10dea8551541515f71f.mockapi.io/items/${id}`
        )
        setPizza(data)
      } catch (err) {
        console.log(err)
        navigate('/')
      }
    }
    getPizza()
  }, [])

  if (!pizza) {
    return <>Loading.....</>
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='pizza image' />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} €</h4>
      <Link to='/' className='button button--outline button--add go-back-btn'>
        Go Back
      </Link>
    </div>
  )
}

export default PizzaInfo
