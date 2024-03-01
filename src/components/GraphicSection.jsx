import React from "react";
import { Box, Heading, Text, Image, Flex, useColorModeValue } from "@chakra-ui/react";

const GraphicSection = ({ title, text, imageUrl = "", imageAlt = "" }) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around" py={16} px={4}>
      <Box flex="1" textAlign="center">
        <Heading as="h2" size="xl" mb={6}>
          {title}
        </Heading>
        <Text fontSize="xl" color={textColor}>
          {text}
        </Text>
      </Box>
      {imageUrl && (
        <Box flex="1">
          <Image borderRadius="xl" src={imageUrl} alt={imageAlt} objectFit="cover" width="100%" maxW={{ md: "400px" }} boxShadow="lg" />
        </Box>
      )}
    </Flex>
  );
};

export default GraphicSection;
