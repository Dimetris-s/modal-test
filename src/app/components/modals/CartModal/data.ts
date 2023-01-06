export interface CartItem {
  id: number;
  name: string;
  price: number;
  count: number;
}

export const cartItems:CartItem[] = [
  {
    id: 1,
    name: 'Утюг',
    count: 2,
    price: 100
  },
  {
    id: 2,
    name: 'Холодильник',
    count: 1,
    price: 200
  },
  {
    id: 3,
    name: 'Стакан',
    count: 4,
    price: 400
  },
  {
    id: 4,
    name: 'Шляпа',
    count: 1,
    price: 150
  },
  {
    id: 5,
    name: 'Ботинки',
    count: 2,
    price: 300
  },
]
