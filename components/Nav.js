import { Box, Heading } from "@chakra-ui/react";

const Nav = () => {
  return (
    <>
      <Box
        h="90px"
        bgColor="red"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="5"
        px="10"
      >
        <Heading as="h3">Pokemon Team Builder</Heading>
      </Box>
    </>
  );
};

export default Nav;
