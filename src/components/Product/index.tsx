import { useState } from 'react'

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

export const ProductPerfil = ({
  foto,
  nome,
  descricao,
  porcao,
  id,
  preco
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <CardPerfil className={modalEstaAberto ? 'visivel' : ''}>
        <img src={foto} alt={nome} />
        <TituloPerfil>{nome}</TituloPerfil>
        <DescricaoPerfil>{descricao}</DescricaoPerfil>
        <BtnLinkSecundario
          type="link"
          to={`/perfil/${id}`}
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
              <img src={foto} alt="Pizza Marguerita" />
            </ImgProduto>
            <div className="infos">
              <TituloPerfil>{nome}</TituloPerfil>
              <DescricaoPerfil>{descricao}</DescricaoPerfil>
              <DescricaoPerfil>Serve: ${porcao}</DescricaoPerfil>
              <BtnLinkSecundario
                type="link"
                to={`/perfil/${id}`}
                title="Adicione ao carrinho"
              >
                Adicionar ao carrinho {formataPreco(preco)}
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
