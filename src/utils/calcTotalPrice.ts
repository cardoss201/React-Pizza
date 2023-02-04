import { CartItems } from '../redux/slices/cartSlice'

export const calcTotalPrice = (items: CartItems[]) => {
  return items.reduce((acc, obj) => obj.price * obj.count + acc, 0)
}
