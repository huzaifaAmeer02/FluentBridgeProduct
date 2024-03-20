import coverImageSrc from "../../assets/cover-user.jpg";
import { useRef, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export default function Cover() {
  const [coverImage, setCoverImage] = useState(null);
  const inputRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openChooseFile = () => {
    inputRef.current.click();
  };

  const handleChangeCover = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
    const selected = event.target.files[0];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => setCoverImage(reader.result);
      return reader.readAsDataURL(selected);
    }

    onOpen();
  };

  return (
    <Flex direction="column" align="center">
      <Box maxW="xl" w="100%" h={{ base: "200px", md: "300px", lg: "400px" }} overflow="hidden" position="relative">
        <Image
          w="100%"
          h="full"
          objectFit="cover"
          src={coverImage || coverImageSrc}
          alt="Cover"
        />
        <input ref={inputRef} type="file" onChange={handleChangeCover} hidden />
        <Button
          onClick={openChooseFile}
          position="absolute"
          bottom={4}
          right={4}
          variant="ghost" 
          className='font-extrabold hover:bg-purple-500 text-white p-2 rounded-2xl'
        >
          Change Cover
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
