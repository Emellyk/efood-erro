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
        <ProductPerfil
          key={restaurante.id}
          description={restaurante.cardapio.description}
          capa={restaurante.capa}
          title={restaurante.title}
          type={restaurante.type}
          rating={restaurante.rating}
          highlighted={false}
        />
      ))}
    </List>
  </Container>
)

export default ProductListPerfil
