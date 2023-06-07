import { Restaurante } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurante: Restaurante[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ restaurante }: Props) => {
  const getRestauranteTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.cardapio.preco) {
      tags.push(formataPreco(restaurante.cardapio.preco))
    }

    return tags
  }

  return (
    <Container>
      <List>
        {restaurante.map((restaurante) => (
          <li key={restaurante.id}>
            <Product
              descricao={restaurante.descricao}
              capa={restaurante.capa}
              titulo={restaurante.titulo}
              avaliacao={restaurante.avaliacao}
              destacado={false}
              tipo={restaurante.tipo}
              foto={restaurante.cardapio.foto}
              nome={restaurante.cardapio.nome}
              preco={restaurante.cardapio.preco}
              porcao={restaurante.cardapio.porcao}
              id={restaurante.id}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}
export default ProductList
