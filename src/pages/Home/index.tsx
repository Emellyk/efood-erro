import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

export type Restaurante = {
  id: number
  title: string
  highlighted: boolean
  type: string
  rating: number
  description: string
  capa: string
  cardapio: {
    photo: string
    price: number
    id: number
    name: string
    description: string
    porcao: string
  }
}

const Home = () => {
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <ProductList restaurante={restaurante} />
    </>
  )
}

export default Home
