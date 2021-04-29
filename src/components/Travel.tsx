import { Flex, useBreakpointValue, Text, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaCircle } from 'react-icons/fa';

interface TravelProps {
  title: string;
  children: ReactNode;
  isLastItem?: boolean;
}

export function Travel({ title, children, isLastItem }: TravelProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isWideVersion) {
    return (
      <Flex direction="column" align="center">
        {children}

        <Text mt={6} fontSize="2xl" fontWeight="600">
          {title}
        </Text>
      </Flex>
    );
  }

  return (
    <Text fontSize="lg" fontWeight="500" mb={isLastItem ? "0" : "27px"}>
      <Icon as={FaCircle} fontSize="0.5rem" color="yellow.500" mr={2} />
      {title}
    </Text>
  );
}
