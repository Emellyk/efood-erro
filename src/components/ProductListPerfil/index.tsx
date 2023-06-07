import { Container, List } from './styles'
import { ProductPerfil } from '../Product'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante[]
}

const ProductListPerfil = ({ restaurante }: Props) => (
  <Container>
    <List>
      {restaurante.map((restaurante) => (
        <li key={restaurante.id}>
          <ProductPerfil
            id={restaurante.id}
            foto={restaurante.cardapio.foto}
            nome={restaurante.cardapio.nome}
            preco={restaurante.cardapio.preco}
            porcao={restaurante.cardapio.porcao}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default ProductListPerfil
