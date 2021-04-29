import { Box, Flex, Image, Text, Stack, useBreakpointValue, Heading, Divider, Center } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Travel } from "../components/Travel";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box h="100vh" width="100vw">
      <Header />

      <Box
        bgImage="url('Background.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={isWideVersion ? '335' : '163'}
      >
        <Flex
          maxW="1240"
          h="100%"
          mx="auto"
          px={['4', '10']}
          direction="column"
          align="flex-start"
          justify="center"
          position="relative"
        >
          <Heading
            as="h1"
            color="gray.50"
            fontWeight="500"
            fontSize={['xl', '4xl']}
            mb={['2', '5']}
          >
            6 continentes, <Divider as="br" /> infinitas possibilidades.
          </Heading>
          <Text
            color="gray.100"
            fontSize={['sm', 'xl']}
            maxW="524"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>

          {isWideVersion && (
            <Image
              src="Airplane.svg"
              alt="Avião"
              bottom="-35"
              right="0"
              pos="absolute"
            />
          )}
        </Flex>
      </Box>

      <Box
        maxW="1240"
        mx="auto"
        mb={["6", "10"]}
        mt={["9", "24"]}
      >
        <Flex
          justify="space-between"
          mb={["9", "20"]}
          px={["12", "10"]}
          wrap={isWideVersion ? 'nowrap' : 'wrap'}
        >
          <Travel title="vida noturna">
            <Image src="icons/cocktail.svg" maxW="85" />
          </Travel>

          <Travel title="praia">
            <Image src="icons/surf.svg" maxW="85" />
          </Travel>

          <Travel title="moderno">
            <Image src="icons/building.svg" maxW="85" />
          </Travel>

          <Travel title="clássico">
            <Image src="icons/museum.svg" maxW="85" />
          </Travel>

          <Travel title="e mais...">
            <Image src="icons/earth.svg" maxW="85" />
          </Travel>
        </Flex>

        <Center w="90px" mx="auto" borderTopWidth="2px" borderColor="gray.600"></Center>

        <Box>
          <Heading
            fontSize={["xl", "4xl"]}
            fontWeight="normal"
            lineHeight={["30px", "3.375rem"]}
            textAlign="center"
            py={["6", "14"]}
          >
            Vamos nessa? <Divider as='br' /> Então escolha seu continente
          </Heading>

          <Box h={["250", "450"]} w="100%" pb="35">
            <Slider />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
