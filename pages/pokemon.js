import Layout from "../components/Layout";
import Link from "next/Link";
import { Button, Heading, Text, Image } from "@chakra-ui/react";

const pokemon = ({ pokeman }) => {
  return (
    <Layout title={pokeman.name}>
      <Heading>
        #{pokeman.id} {pokeman.name}
      </Heading>
      <Image src={pokeman.image} alt={pokeman.name} />
      <Text>
        <span>Weight:</span> {pokeman.weight}
      </Text>
      <Text>
        <span>Height:</span>
        {pokeman.height}
      </Text>
      <Heading>Types</Heading>
      {pokeman.types.map((type, index) => (
        <Text key="index">{type.type.name}</Text>
      ))}
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokeman = await res.json();
  const paddedId = ("00" + id).slice(-3);
  pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
  return {
    props: { pokeman },
  };
};

export default pokemon;
