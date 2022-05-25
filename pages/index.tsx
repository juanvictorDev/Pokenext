import type { NextPage, GetStaticProps, InferGetStaticPropsType  } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Lista, Title } from '../styles/home'


export const getStaticProps : GetStaticProps = async () => {
  const api : string = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const res = await fetch(api);
  const data = await res.json();

  data.results.forEach((item : {id:number, name:string, url:string}, index : number) => {
    item.id = index + 1;
  })
  
  const pokemons : {id:number, name:string, url:string}[] = data.results;

  return{
    props : {
      pokemons,
    }
  }
}


const Home: NextPage = ({pokemons}:InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Pokénext</title>
      </Head>

      <Title>
        <Image src="/images/pokenext.png" width={350} height={125} alt="Pokenext Logo" />
        <Link href='/sobre'><a>SOBRE</a></Link>
      </Title>

      <Lista>
        {pokemons.map((p:{id:number, name:string, url:string}) => (
          <Card key = {p.id}>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${p.id.toString()}.png`}  height={112} width={112}/>
            <p>#{p.id}</p>
            <h2>{p.name}</h2>
            <Link href={`/pokemon/${p.id}`}><a>detalhes</a></Link>
          </Card>
        ))}
      </Lista>
    </>
  )
}

export default Home
