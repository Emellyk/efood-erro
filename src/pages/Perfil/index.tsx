import { useEffect, useState } from 'react'

import ProductListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/Banner'

import { Restaurante } from '../../pages/Home'

export type Props = {
  restaurante: Restaurante
}

const Perfil = () => {
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
      <Banner />
      <ProductListPerfil restaurante={restaurante} />
    </>
  )
}

export default Perfil
