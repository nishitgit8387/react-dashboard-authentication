import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="380px">
        <Icon as={icon} boxSize={6} color="P.purple" />
        <Text as="h1" fontWeight="medium" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
