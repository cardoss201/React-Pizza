import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Wrapper from './components/ui/Wrapper'
import Header from './components/header/Header'
import Container from './components/ui/Container'
import Home from './pages/Home'
// import Cart from './pages/Cart'
import PizzaInfo from './pages/PizzaInfo'
import NotFound from './pages/NotFound'

import './scss/app.scss'

const Cart = React.lazy(() => import('./pages/Cart'))

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <div className='content'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/cart'
              element={
                <React.Suspense fallback={<div>Cart is loading...</div>}>
                  <Cart />
                </React.Suspense>
              }
            />
            <Route path='pizza/:id' element={<PizzaInfo />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </div>
    </Wrapper>
  )
}

export default App
