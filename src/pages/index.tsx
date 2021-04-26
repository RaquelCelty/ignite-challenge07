import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        maxW={1440}
        h="368.21px"
        bgImage="url('Background.svg')"
        bgRepeat="no-repeat"
      >
        <Stack
          p="20"
          pl="140"
          spacing="5"
          w="60%"
        >
          <Box
            fontSize="2.25rem"
            fontWeight="500"
            lineHeight="54px"
            color="gray.100"
          >
            <Text>5 Continentes,</Text>
            <Text>infinitas possibilidades.</Text>
          </Box>
          <Box
            fontSize="1.25rem"
            fontWeight="normal"
            lineHeight="30px"
            color="gray.50"
          >
            <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </Box>
        </Stack>

        <Box mt="70px" mr="140px">
          <Image
            src="Airplane.svg"
            alt="Airplane"
            transform="rotate(3deg)"
          />
        </Box>
      </Flex>
    </Box>
  );
}
