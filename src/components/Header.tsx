import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1400}
      h="100px"
      align="center"
      justifyContent="center"
    >
      <Image src="Logo.svg" alt="Logo" />
    </Flex>
  );
}
