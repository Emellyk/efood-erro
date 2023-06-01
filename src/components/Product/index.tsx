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
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante[]
}

const Product = ({ restaurante }: Props) => (
  <Card>
    <img src={restaurante.capa} alt={restaurante.title} />
    <Infos>
      <Tag>Destaque do dia</Tag>
      {restaurante.map((restaurante) => (
        <Tag key={restaurante.type}>{restaurante.type}</Tag>
      ))}
    </Infos>
    <CardBorder>
      <ContainerTitulo>
        <Titulo>{restaurante.title}</Titulo>
        <Titulo>
          {restaurante.rating}
          <img src={star} alt="estrela" />
        </Titulo>
      </ContainerTitulo>
      <Descricao>{restaurante.description}</Descricao>
      <Button type="link" to="/perfil" title="Conheça nossos pratos">
        Saiba mais
      </Button>
    </CardBorder>
  </Card>
)

export default Product

export const ProductPerfil = ({ restaurante }: Props) => (
  <CardPerfil>
    <img src={restaurante.capa} alt={restaurante.title} />
    <TituloPerfil>{restaurante.title}</TituloPerfil>
    <DescricaoPerfil>{restaurante.description}</DescricaoPerfil>
    <BtnLinkSecundario type="link" to="/" title="Adicione ao carrinho">
      Adicionar ao carrinho
    </BtnLinkSecundario>
  </CardPerfil>
)
