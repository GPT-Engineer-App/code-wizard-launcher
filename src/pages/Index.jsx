import { Box, Heading, Text, Image, VStack, HStack, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={8} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Heading as="h1" size="2xl" mb={2} textAlign="center">
        GPT Engineer
      </Heading>
      <Heading as="h2" size="lg" mb={8} textAlign="center" fontWeight="normal">
        enable no-code editing any frontend with AI
      </Heading>

      <HStack spacing={8} alignItems="center">
        <VStack align="center" spacing={6} flex={1}>
          <Text fontSize="xl">GPT Engineer lets you:</Text>
          <UnorderedList spacing={2}>
            <ListItem>Connect to frontend codebase (via GitHub)</ListItem>
            <ListItem>Add OpenAPI of the backend</ListItem>
            <ListItem>Ask for complex frontend changes, get instant previews, with GitHub codebase as single source of truth</ListItem>
          </UnorderedList>
        </VStack>

        <Box flex={1}>
          <Image src="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/074415de-ef04-11ee-941b-02420a0001fb/gooey.ai%20-%20A%20rocket%20with%20a%20doge%20dog%20on%20it%20with%20a%20laptop.png" alt="QR Code" maxW="300px" height="auto" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Index;
