import { Box } from "@chakra-ui/react";

const Card = ({ children }) => {
  return (
    <Box
      maxW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      //   display="flex"
      //   flexDirection="column"
      pt="3"
      _hover={{
        borderColor: "red",
        transform: "scale(1.01)",
        transition: "0.17s ease",
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
