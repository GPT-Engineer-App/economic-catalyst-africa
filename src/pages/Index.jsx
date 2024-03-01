import React from "react";
import { Box, Container, Flex, Heading, Text, Button, Image, VStack, Stack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaHandshake, FaChartLine, FaGlobeAfrica, FaRegLightbulb } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex align="center" justify="center" direction="column" minH="100vh" textAlign="center">
        <VStack spacing={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWNvbm9taWMlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MDkzMDg2NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Economic Development" mb={4} />
          <Heading as="h1" size="2xl" fontWeight="bold">
            Driving Economic Growth in Africa
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
            A leading catalyst for economic development, committed to delivering excellence and fostering sustainable growth.
          </Text>
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
        </VStack>
      </Flex>

      {/* Services Section */}
      <Box py={16}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Services
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center" align="center">
          <ServiceBox icon={FaChartLine} title="Market Access" description="Expanding the reach of African businesses through strategic market access initiatives." />
          <ServiceBox icon={FaGlobeAfrica} title="Economic Solutions" description="Offering comprehensive solutions that catalyze economic transformation." />
          <ServiceBox icon={FaHandshake} title="Strategic Partnerships" description="Building partnerships that create a more connected and prosperous Africa." />
          <ServiceBox icon={FaRegLightbulb} title="Innovative Financing" description="Facilitating finance options that drive growth and development." />
        </Stack>
      </Box>
      {}
      <Box py={16}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Mission
        </Heading>
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")} textAlign="center">
          As a leading catalyst for economic development in Africa, we are committed to providing best-in-class services that drive economic growth, enhance market access and finance, while promoting sustainable developments. We create value by offering comprehensive solutions, leveraging our expertise, and fostering meaningful partnerships.
        </Text>
      </Box>

      {}
      <Collaborations />
    </Container>
  );
};

const MissionStatement = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Box py={16} bg={bgColor} px={{ base: 4, md: 8 }}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Our Mission
      </Heading>
      <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")} textAlign="center">
        As a leading catalyst for economic development in Africa, we are committed to providing best-in-class services that drive economic growth, enhance market access and finance, while promoting sustainable developments. We create value by offering comprehensive solutions, leveraging our expertise, and fostering meaningful partnerships.
      </Text>
    </Box>
  );
};

const Collaborations = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  return (
    <Box py={16} bg={bgColor} px={{ base: 4, md: 8 }}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Collaborations & Partnerships
      </Heading>
      <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")} textAlign="center">
        Our strategic collaborations and partnerships are pivotal to our mission. By working together with leading organizations and stakeholders, we are able to amplify our impact and drive transformative change across the continent.
      </Text>
    </Box>
  );
};

const ServiceBox = ({ icon, title, description }) => {
  return (
    <VStack
      p={5}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="md"
      borderRadius="xl"
      width={{ base: "80%", md: "200px" }}
      height="100%"
      align="center"
      justify="center"
      _hover={{
        bg: useColorModeValue("gray.100", "gray.600"),
        transform: "scale(1.05)",
        transition: "all .2s ease-in-out",
      }}
    >
      <Icon as={icon} w={10} h={10} color={useColorModeValue("teal.500", "teal.200")} />
      <Heading as="h3" size="md" fontWeight="semibold" mt={3}>
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.200")} textAlign="center">
        {description}
      </Text>
    </VStack>
  );
};

export default Index;
