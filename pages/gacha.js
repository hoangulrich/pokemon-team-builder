import Layout from "../components/Layout";
import { Button, Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Gacha = ({ pokemon }) => {
  const [result1, setResult1] = useState("?");
  const [result2, setResult2] = useState("?");
  const [result3, setResult3] = useState("?");
  const [result4, setResult4] = useState("?");
  const [result5, setResult5] = useState("?");

  const summon = () => {
    let chance1 = Math.random();
    let chance2 = Math.random();
    let chance3 = Math.random();
    let chance4 = Math.random();
    let chance5 = Math.random();

    setResult1(chance1);
    setResult2(chance2);
    setResult3(chance3);
    setResult4(chance4);
    setResult5(chance5);
  };

  return (
    <Layout>
      <Heading my="7">Gacha</Heading>
      <Box mb="7">
        <Heading size="lg">Rate:</Heading>
        <Text>Ultra Rare:1%</Text>
        <Text>Super Rare: 5%</Text>
        <Text>Rare: 15%</Text>
        <Text>Common: 79%</Text>
      </Box>

      <Button colorScheme="red" onClick={summon}>
        Summon
      </Button>
      <Text mt="7">{result1}</Text>
      <Text mt="7">{result2}</Text>
      <Text mt="7">{result3}</Text>
      <Text mt="7">{result4}</Text>
      <Text mt="7">{result5}</Text>
    </Layout>
  );
};

export default Gacha;

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
