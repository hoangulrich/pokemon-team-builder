import { Box, Heading, Button, HStack, Divider } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <Box
        h="90px"
        bgColor="transparent"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        // mb="5"
        px="10"
      >
        <Link href="/">
          <a>
            <Heading as="h3">Pokemon Quartz</Heading>
          </a>
        </Link>

        <HStack>
          <Button>
            <Link href="/pokedex">
              <a>Pokedex</a>
            </Link>
          </Button>
          <Button>
            <Link href="/teambuilder">
              <a>Team Builder</a>
            </Link>
          </Button>
          <Button>
            <Link href="/gacha">
              <a>Gacha</a>
            </Link>
          </Button>
        </HStack>
      </Box>
      <Divider />
    </>
  );
};

export default Nav;
