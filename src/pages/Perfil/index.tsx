import Restaurante from '../../models/Restaurantes'

import pizza from '../../assets/images/pizzza.png'
import ProductListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/Banner'
import { useState } from 'react'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    category: [''],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    note: ''
  },
  {
    id: 2,
    category: [''],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    note: ''
  },
  {
    id: 3,
    category: [''],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    note: ''
  },
  {
    id: 4,
    category: [''],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    note: ''
  },
  {
    id: 5,
    category: [''],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    note: ''
  },
  {
    id: 6,
    category: [''],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza,
    note: ''
  }
]

const Perfil = () => {
  const [restaurantes, setRestaurante] = useState([])(
    <>
      <Banner />
      <ProductListPerfil restaurante={restaurantes} />
    </>
  )
}

export default Perfil
