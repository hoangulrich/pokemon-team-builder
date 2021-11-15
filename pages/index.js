import Layout from "../components/Layout";
import { Button, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Pokemon Quartz">
      <Heading>Welcome to Pokemon Quartz</Heading>
      <Button colorScheme="red" mr="5">
        POKEDEX
      </Button>
      <Button colorScheme="red"> TEAM BUILDER</Button>
    </Layout>
  );
}
