import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Characters() {
  return (
    <VStack w="full">
      <Box w="full" h={64} overflow="hidden">
        <Image
          w="full"
          h="full"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1687684513507-5482c65e8580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Characters"
        />
      </Box>
      <VStack w="7xl">
        {/* title */}
        <HStack w="full" py={16} justifyContent="space-between">
          <Box>
            <Heading
              as="h2"
              fontSize={32}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Characters
            </Heading>
          </Box>
          <Select w={32}>
            <option value={6}>6</option>
            <option value={6}>12</option>
            <option value={6}>18</option>
            <option value={6}>24</option>
            <option value={6}>30</option>
            <option value={6}>36</option>
          </Select>
        </HStack>
        {/* board */}
        <Grid templateColumns="repeat(6,1fr)" w="full" gap={4}>
          <GridItem w="full" bg="red.500" role="group">
            <VStack w="full">
              <Box w="full" h={48} overflow="hidden">
                <Image
                  transition="0.3s"
                  _groupHover={{
                    transform: 'scale(1.2)',
                  }}
                  src="https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                  alt="Character_content"
                />
              </Box>
              {/* second box */}
              <Box w="full" h={32} position="relative" overflow="hidden">
                {/* hover moving box */}
                <Box
                  transition="0.4s"
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  bg="gray.800"
                  _groupHover={{
                    top: '180',
                  }}
                />
                {/* right bottom cut box */}
                <Box
                  position="absolute"
                  w="30px"
                  h="30px"
                  bottom="-15px"
                  right="-15px"
                  bg="white"
                  transform={'rotate(45deg) scale(2)'}
                />
                <Text position="absolute" color="white" fontSize="32px">
                  안녕하세요
                </Text>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </VStack>
  );
}
j;
