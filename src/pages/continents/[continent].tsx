import { Box, Center, Flex, Heading, HStack, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { api } from "../../services/api"
import { Info } from "../../components/Info"

type ContinentType = {
  name: string;
  description: string;
  banner: string;
  countriesAmount: number;
  languagesAmount: number;
  popularCitiesAmount: number;
  popularCities: [{
    city: string;
    country: string;
    countryCode: string;
    cityImg: string;
  }]
}

interface ContinentProps {
  continent: ContinentType;
}

export default function Continent({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header hasBackLink />

      <Box
        bgImage={`url(${continent.banner})`}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        height={['150', '500']}
      >
        <Box
          maxW='1240'
          h='100%'
          mx='auto'
          px={10}
          position='relative'
        >
          {isWideVersion ? (
            <Heading
              as='h1'
              fontWeight='600'
              fontSize='5xl'
              color='gray.50'
              position='absolute'
              bottom='60px'
              textTransform='capitalize'
            >
              {continent.name}
            </Heading>
          ) : (
            <Center w='100%' h='100%'>
              <Text
                as='h1'
                fontWeight='600'
                fontSize='1.75rem'
                color='gray.50'
              >
                {continent.name}
              </Text>
            </Center>
          )}
        </Box>
      </Box>

      <Box
        maxW='1240'
        h='100%'
        mx='auto'
        px={['4', '10']}
      >
        <Flex
          direction={['column', 'row']}
          justify={'space-between'}
          align='center'
          mt={['6', '20']}
          mb={['8', '20']}
        >
          <Text maxW='600' fontSize={['sm', '2xl']} lineHeight={['5', '9']} textAlign='justify' fontWeight='400'>
            {continent.description}
          </Text>

          <HStack spacing={10} mt={['4', '0']}>
            <Info
              legend="países"
              numberOf={continent.countriesAmount}
            />

            <Info
              legend="línguas"
              numberOf={continent.languagesAmount}
            />

            <Info
              legend="cidades +100"
              numberOf={continent.popularCitiesAmount}
              hasTooltip={true}
            />
          </HStack>
        </Flex>

        <Box>
          <Heading
            as='h1'
            fontWeight='500'
            fontSize={['2xl', '4xl']}
            color='gray.600'
          >
            Cidades +100
          </Heading>

          <SimpleGrid columns={[1, 4]} spacing={[5, 10]} my={['5', '45px']}>
            {continent.popularCities.map((city) => (
              <Card
                key={city.city}
                name={city.city}
                image={city.cityImg}
                countryName={city.country}
                countryCode={city.countryCode}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params

  const response = await api.get(`/continents?slug=${continent}`)

  const continentInfos: ContinentType = response.data[0];

  return {
    props: {
      continent: continentInfos
    }
  }
}
