import {
  HStack,
  Box,
  Grid,
  Heading,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useState } from "react";
import { CgPokemon, CgAdd } from "react-icons/cg";

const teambuilder = ({ pokemon }) => {
  const [search, setSearch] = useState("");

  const [count, setCount] = useState(0);

  const [poke1, setPoke1] = useState(<CgPokemon />);
  const [poke2, setPoke2] = useState(<CgPokemon />);
  const [poke3, setPoke3] = useState(<CgPokemon />);
  const [poke4, setPoke4] = useState(<CgPokemon />);
  const [poke5, setPoke5] = useState(<CgPokemon />);
  const [poke6, setPoke6] = useState(<CgPokemon />);

  const team = [];

  //SEARCH FUNC
  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  //DELETE ALL
  const deleteAll = () => {
    setCount(0);
    setPoke1(<CgPokemon />);
    setPoke2(<CgPokemon />);
    setPoke3(<CgPokemon />);
    setPoke4(<CgPokemon />);
    setPoke5(<CgPokemon />);
    setPoke6(<CgPokemon />);
  };

  return (
    <Layout title="Team Builder">
      <Flex my="5" alignItems="center" justifyContent="space-between">
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
        >
          <Box fontSize="5xl" justifySelf="center">
            {poke1}
          </Box>
        </Box>

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
        >
          <Box fontSize="5xl">{poke2}</Box>
        </Box>

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
        >
          <Box fontSize="5xl">{poke3}</Box>
        </Box>

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
        >
          <Box fontSize="5xl">{poke4}</Box>
        </Box>

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
        >
          <Box fontSize="5xl">{poke5}</Box>
        </Box>

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
        >
          <Box fontSize="5xl">{poke6}</Box>
        </Box>
      </Flex>

      <HStack>
        <Button colorScheme="red">Add Team</Button>
        <Button colorScheme="red" onClick={deleteAll}>
          Clear All
        </Button>
      </HStack>

      <FormControl my="7">
        <FormLabel>Search</FormLabel>
        <Input focusBorderColor="red" onChange={handleChange} />
      </FormControl>

      <Grid templateColumns="repeat(3, 1fr)" gap={7}>
        {filteredPokemon.map((poke, index) => {
          const addPoke = () => {
            setCount(count + 1);

            switch (count) {
              case 0:
                setPoke1(<Image src={poke.image} alt="poke1" />);
                break;
              case 1:
                setPoke2(<Image src={poke.image} alt="poke2" />);
                break;
              case 2:
                setPoke3(<Image src={poke.image} alt="poke3" />);
                break;
              case 3:
                setPoke4(<Image src={poke.image} alt="poke4" />);
                break;
              case 4:
                setPoke5(<Image src={poke.image} alt="poke5" />);
                break;
              case 5:
                setPoke6(<Image src={poke.image} alt="poke6" />);
                break;
              default:
                setCount(6);
                break;
            }
          };

          return (
            <Box key={index} onClick={addPoke}>
              <Card>
                <Heading textAlign="center">
                  #{index + 1} {poke.name}
                </Heading>
                <Image src={poke.image} />
              </Card>
            </Box>
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

export default teambuilder;
