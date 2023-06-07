import { useEffect, useState } from 'react'

import {
  Card,
  CardBorder,
  CardPerfil,
  ContainerTitulo,
  Descricao,
  Titulo,
  TituloPerfil,
  Infos,
  DescricaoPerfil,
  ModalContainer,
  Close,
  ModalContent,
  ImgProduto
} from './styles'

import star from '../../assets/images/star_icon.png'
import fechar from '../../assets/images/fechar_icon.png'

import { formataPreco } from '../ProductList'
import Tag from '../Tag'
import { BtnLinkSecundario } from '../Button/styles'
import Button from '../Button'
import { Restaurante } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  foto: string
  preco: number
  nome: string
  porcao: string
}

const Product = ({ titulo, tipo, avaliacao, descricao, capa, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 325) {
      return descricao.slice(0, 322) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <div>
          <img src={capa} alt={titulo} />
        </div>
        <Infos>
          <Tag>Destaque do dia</Tag>
          <Tag>{tipo}</Tag>
        </Infos>
        <CardBorder>
          <ContainerTitulo>
            <Titulo>{titulo}</Titulo>
            <Titulo>
              {avaliacao}
              <img src={star} alt="estrela" />
            </Titulo>
          </ContainerTitulo>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Button
            type="link"
            to={`/perfil/${id}`}
            title="Conheça nossos pratos"
          >
            Saiba mais
          </Button>
        </CardBorder>
      </Card>
    </>
  )
}

export default Product

type PropsPerfil = {
  restaurante: Restaurante
  id: number
  foto: string
  nome: string
  preco: number
  porcao: string
}

export const ProductPerfil = ({ restaurante }: PropsPerfil) => {
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <CardPerfil className={modalEstaAberto ? 'visivel' : ''}>
        <img src={restaurante.cardapio.foto} alt={restaurante.cardapio.nome} />
        <TituloPerfil>{restaurante.cardapio.nome}</TituloPerfil>
        <DescricaoPerfil>{restaurante.cardapio.descricao}</DescricaoPerfil>
        <BtnLinkSecundario
          type="link"
          to={`/perfil/${restaurante.id}`}
          title="Adicione ao carrinho"
          onClick={() => setModalEstaAberto(true)}
        >
          Adicionar ao carrinho
        </BtnLinkSecundario>
      </CardPerfil>
      <ModalContainer className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <Close>
            <img
              src={fechar}
              alt="Botão para fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </Close>
          <div className="position">
            <ImgProduto>
              <img src={restaurante.cardapio.foto} alt="Pizza Marguerita" />
            </ImgProduto>
            <div className="infos">
              <TituloPerfil>{restaurante.cardapio.nome}</TituloPerfil>
              <DescricaoPerfil>
                {restaurante.cardapio.descricao}
              </DescricaoPerfil>
              <DescricaoPerfil>
                Serve: ${restaurante.cardapio.porcao}
              </DescricaoPerfil>
              <BtnLinkSecundario
                type="link"
                to={`/perfil/${id}`}
                title="Adicione ao carrinho"
              >
                Adicionar ao carrinho {formataPreco(restaurante.cardapio.preco)}
              </BtnLinkSecundario>
            </div>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </ModalContainer>
    </>
  )
}
