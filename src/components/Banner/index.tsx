import { BgBanner, BgHero, BgOpacity, Infos, Logo } from './styles'

//verificar essas importações para ver se possivel deixar
// em apenas uma linha
import bannerImg from '../../assets/images/vector.png'
import logo from '../../assets/images/logo.svg'

import { BtnLinkSecundario } from '../Button/styles'
import { Container } from '../ProductList/styles'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <BgHero style={{ backgroundImage: `url(${bannerImg})` }}>
        <Container>
          <BtnLinkSecundario to="/">Restaurantes</BtnLinkSecundario>
          <Logo src={logo} alt="EFOOD" />
          <BtnLinkSecundario to="/">Carrinho</BtnLinkSecundario>
        </Container>
      </BgHero>
      <BgBanner style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <BgOpacity>
          <Container>
            <Infos>{restaurante.tipo}</Infos>
            <Infos>{restaurante.titulo}</Infos>
          </Container>
        </BgOpacity>
      </BgBanner>
    </>
  )
}

export default Banner
