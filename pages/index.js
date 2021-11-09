import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { Grid, Heading, Image, Text } from "@chakra-ui/react";

export default function Home({ pokemon }) {
  console.log(pokemon);

  return (
    <Layout title="Pokedex">
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        {pokemon.map((poke, index) => {
          return (
            <Card>
              <Heading textAlign="center">
                #{index + 1} {poke.name}
              </Heading>
              <Text>{poke.height}</Text>
              <Image src={poke.image} />
            </Card>
          );
        })}
      </Grid>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const { results } = await res.json();

  const pokemon = results.map((result, index) => {
    const paddedIndex = `00${index + 1}`.slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    // const getHeight = async () => {
    //   const res2 = await fetch(
    //     `https://pokeapi.co/api/v2/ability/${index + 1}`
    //   );
    //   const { height } = await res2.json();

    //   return height;
    // };

    // getHeight();

    return {
      ...result,
      image,
      // height,
    };
  });

  return {
    props: {
      pokemon,
    },
  };
};
