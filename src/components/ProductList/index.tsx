import { Restaurante } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurante: Restaurante[]
}

const ProductList = ({ restaurante }: Props) => (
  <Container>
    <List>
      {restaurante.map((restaurante) => (
        <Product
          key={restaurante.id}
          description={restaurante.description}
          capa={restaurante.capa}
          title={restaurante.title}
          rating={restaurante.rating}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
