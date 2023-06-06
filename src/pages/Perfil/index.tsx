import { useEffect, useState } from 'react'

import ProductListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/Banner'

import { Restaurante } from '../../pages/Home'

export type Props = {
  restaurante: Restaurante[]
}

const Perfil = () => {
  const [cardapio, setCardapio] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner capa={''} tipo={''} title={''} />
      <ProductListPerfil restaurante={cardapio} />
    </>
  )
}

export default Perfil
