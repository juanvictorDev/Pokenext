import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { Container, ImageWrapper, Texto, Button } from '../styles/sobre';

const Sobre : NextPage = () => {
  return( 
    <>
      <Head>
        <title>Pokénext | sobre</title>
      </Head>
      
      <ImageWrapper>
        <Image src="/images/pokenext.png" width={350} height={125} alt="Pokenext Logo" />
      </ImageWrapper>

      <Container>
        <Texto>
          <h1>Sobre</h1>
          <p>
            Esse projeto foi feito com Next.js, Typescript e Styled-Components, para consolidar
            o aprendizado que andei estudando nessas últimas semanas, o projeto é uma Pokédex que lista todos
            os Pokémons da primeira geração da série, e apresenta suas características individuais com mais detalhes.
          </p>
          
          <Button>
            <Link href="/">
              <a>VOLTAR</a>
            </Link>
          </Button>
        </Texto>
        
        <Image src="/images/charizard2.png" width={450} height={450} alt="Time de Pokemon" />
      </Container>

    </>
  )
}

export default Sobre;