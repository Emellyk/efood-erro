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
          descricao={restaurante.cardapio.descricao}
          capa={restaurante.capa}
          titulo={restaurante.titulo}
          tipo={restaurante.tipo}
          avaliacao={restaurante.avaliacao}
          destacado={false}
          foto={restaurante.cardapio.foto}
          nome={restaurante.cardapio.nome}
          id={restaurante.id}
          preco={restaurante.cardapio.preco}
          porcao={restaurante.cardapio.porcao}
        />
      ))}
    </List>
  </Container>
)

export default ProductListPerfil
