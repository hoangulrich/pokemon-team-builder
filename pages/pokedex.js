import Layout from "../components/Layout";
import Card from "../components/Card";
import { Grid, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

const pokedex = ({ pokemon }) => {
  return (
    <Layout title="Pokedex">
      <Heading my="5">POKEDEX</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={7}>
        {pokemon.map((poke, index) => {
          return (
            <Link href={`/pokemon?id=${index + 1}`}>
              <a>
                <Card>
                  <Heading textAlign="center">
                    #{index + 1} {poke.name}
                  </Heading>
                  <Image src={poke.image} />
                </Card>
              </a>
            </Link>
          );
        })}
      </Grid>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const { results } = await res.json();

  const pokemon = results.map((result, index) => {
    const paddedIndex = `00${index + 1}`.slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    return {
      ...result,
      image,
    };
  });

  return {
    props: {
      pokemon,
    },
  };
};

export default pokedex;
