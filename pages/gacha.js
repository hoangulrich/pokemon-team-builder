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

    if (chance1 <= 0.01) {
      setResult1("UltraRare");
    } else if (0.1 < chance1 <= 0.06) {
      setResult1("SuperRare");
    } else if (0.06 < chance1 <= 0.2) {
      setResult1("Rare");
    } else if (0.2 < chance1 <= 1) {
      setResult1("Common");
    }

    if (chance2 <= 0.01) {
      setResult2("UltraRare");
    } else if (0.1 < chance2 <= 0.06) {
      setResult2("SuperRare");
    } else if (0.06 < chance2 <= 0.2) {
      setResult2("Rare");
    } else if (0.2 < chance2 <= 1) {
      setResult2("Common");
    }

    if (chance3 <= 0.01) {
      setResult3("UltraRare");
    } else if (0.1 < chance3 <= 0.06) {
      setResult3("SuperRare");
    } else if (0.06 < chance3 <= 0.2) {
      setResult3("Rare");
    } else if (0.2 < chance3 <= 1) {
      setResult3("Common");
    }

    if (chance4 <= 0.01) {
      setResult4("UltraRare");
    } else if (0.1 < chance4 <= 0.06) {
      setResult4("SuperRare");
    } else if (0.06 < chance4 <= 0.2) {
      setResult4("Rare");
    } else if (0.2 < chance4 <= 1) {
      setResult4("Common");
    }

    if (chance5 <= 0.01) {
      setResult5("UltraRare");
    } else if (0.1 < chance5 <= 0.06) {
      setResult5("SuperRare");
    } else if (0.06 < chance5 <= 0.2) {
      setResult5("Rare");
    } else if (0.2 < chance5 <= 1) {
      setResult5("Common");
    }
  };

  return (
    <Layout>
      <Heading my="7">Gacha</Heading>

      <Box mb="7">
        <Heading size="lg">Rate:</Heading>
        <Text>Ultra Rare:1%</Text>
        <Text>Super Rare: 5%</Text>
        <Text>Rare: 14%</Text>
        <Text>Common: 80%</Text>
      </Box>

      <Box mb="7">
        <Heading size="lg">Current Banner:</Heading>
        <Text>Ultra Rare:Lapras</Text>
        <Text>Super Rare: Hitmonchan, Hitmonlee, Hypno</Text>
        <Text>Rare: Machop, Growlithe, Pikachu, Vulpix, Charmander</Text>
        <Text>Common: Meowth</Text>
      </Box>

      <Button colorScheme="red" onClick={summon}>
        Summon
      </Button>
      {/* <Text mt="7">{result1}</Text>
      <Text mt="7">{result2}</Text>
      <Text mt="7">{result3}</Text>
      <Text mt="7">{result4}</Text>
      <Text mt="7">{result5}</Text> */}

      <Flex my="7" alignItems="center" justifyContent="space-between">
        {[result1, result2, result3, result4, result5].map((result, index) => {
          return (
            <Box
              borderColor="red"
              borderWidth="1px"
              borderRadius="lg"
              minW="150px"
              maxW="150px"
              minH="150px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              key={index}
            >
              <Box>{result}</Box>
            </Box>
          );
        })}
      </Flex>
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
