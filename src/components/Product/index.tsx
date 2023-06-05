import {
  Card,
  CardBorder,
  CardPerfil,
  ContainerTitulo,
  Descricao,
  Titulo,
  TituloPerfil,
  Infos,
  DescricaoPerfil
} from './styles'
import star from '../../assets/images/star_icon.png'
import Tag from '../Tag'
import { BtnLinkSecundario } from '../Button/styles'
import Button from '../Button'

type Props = {
  title: string
  highlighted: boolean
  type: string
  rating: number
  description: string
  capa: string
}

const Product = ({ title, type, rating, description, capa }: Props) => (
  <Card>
    <div>
      <img src={capa} alt={title} />
    </div>
    <Infos>
      <Tag>Destaque do dia</Tag>
      <Tag>{type}</Tag>
    </Infos>
    <CardBorder>
      <ContainerTitulo>
        <Titulo>{title}</Titulo>
        <Titulo>
          {rating}
          <img src={star} alt="estrela" />
        </Titulo>
      </ContainerTitulo>
      <Descricao>{description}</Descricao>
      <Button type="link" to="/perfil" title="Conheça nossos pratos">
        Saiba mais
      </Button>
    </CardBorder>
  </Card>
)

export default Product

export const ProductPerfil = ({ capa, title, description }: Props) => (
  <CardPerfil>
    <img src={capa} alt={title} />
    <TituloPerfil>{title}</TituloPerfil>
    <DescricaoPerfil>{description}</DescricaoPerfil>
    <BtnLinkSecundario type="link" to="/" title="Adicione ao carrinho">
      Adicionar ao carrinho
    </BtnLinkSecundario>
  </CardPerfil>
)
