import { BgBanner, BgHero, BgOpacity, Infos, Logo } from './styles'

//verificar essas importações para ver se possivel deixar
// em apenas uma linha
import bannerImg from '../../assets/images/vector.png'
import logo from '../../assets/images/logo.svg'

import { BtnLinkSecundario } from '../Button/styles'
import { Container } from '../ProductList/styles'

type Props = {
  capa: string
  tipo: string
  title: string
}

const Banner = ({ capa, tipo, title }: Props) => {
  return (
    <>
      <BgHero style={{ backgroundImage: `url(${bannerImg})` }}>
        <Container>
          <BtnLinkSecundario to="/">Restaurantes</BtnLinkSecundario>
          <Logo src={logo} alt="EFOOD" />
          <BtnLinkSecundario to="/">Carrinho</BtnLinkSecundario>
        </Container>
      </BgHero>
      <BgBanner style={{ backgroundImage: `url(${capa})` }}>
        <BgOpacity>
          <Container>
            <Infos>{tipo}</Infos>
            <Infos>{title}</Infos>
          </Container>
        </BgOpacity>
      </BgBanner>
    </>
  )
}

export default Banner
