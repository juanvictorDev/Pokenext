import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Tipos.module.css'
import { ImageWrapper, Button } from '../../styles/sobre';
import { PokemonWrapper, TypeWrapper} from '../../styles/pokemon';



export const getStaticPaths: GetStaticPaths = async () => {
  const api : string = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const res = await fetch(api);
  const data = await res.json();

  const paths = data.results.map((p : {name:string, url:string}, index : number) =>{
    return{
      params:{nome: (index + 1).toString()}
    }
  })

  return{
    paths,
    fallback: false,
  }
}

export const getStaticProps : GetStaticProps = async ({params} : any) => {
  let id = params.nome;
  
  const api : string = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(api);
  const data = await res.json();

  return{
    props : {
      pokemon:data
    },
  }
}

const Pokemon : NextPage = ({pokemon}:InferGetStaticPropsType<typeof getStaticProps>) => {
    
  return(
    <>
      <Head>
        <title>Pokénext | {pokemon.name}</title>
      </Head>

      <ImageWrapper>
        <Image src='/images/pokenext.png' height={125} width={350}/>
      </ImageWrapper>

      <PokemonWrapper>
        <h1>{pokemon.name}</h1>
        
        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} height={230} width={230}/>
        
        <h2>Tipo</h2>
        <TypeWrapper>
          {pokemon.types.map((t:{slot: number, type : {name : string, url : string}}, index : number) => (
            <span key={index} className={`${styles.type} ${styles['type_'+ t.type.name]}`}>{t.type.name}</span>
          ))}
        </TypeWrapper>
        
        <h2>Altura: {pokemon.height * 10}cm</h2>
        
        <h2>Peso: {pokemon.weight / 10}kg</h2>
        
        <Button>
          <Link href="/">
            <a>VOLTAR</a>
          </Link>
        </Button>
      </PokemonWrapper>
    </>
  )
}

export default Pokemon