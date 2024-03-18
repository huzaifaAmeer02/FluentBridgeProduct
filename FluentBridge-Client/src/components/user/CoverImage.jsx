import { useRef, useState } from 'react'
import {
    Badge,
    Box,
    Button,
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
} from '@chakra-ui/react'

export default function Cover() {
    const [coverImage, setCoverImage] = useState(null)
    const inputRef = useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const openChooseFile = () => {
        inputRef.current.click()
    }

    const handleChangeCover = event => {
        const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
        const selected = event.target.files[0]

        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader()
            reader.onloadend = () => setCoverImage(reader.result)
            return reader.readAsDataURL(selected)
        }

        onOpen()
    }

    return (
        <Box h={300} overflow="hidden" position="relative">
            <Image
                w="100%"
                h="full"
                objectFit="cover"
                src={coverImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7t1NBRhPTYfYj_xLrP00QR0dGf0CBU2MPQ&usqp=CAU'}
                alt="Cover"
            />
            <input ref={inputRef} type="file" onChange={handleChangeCover} hidden />
            <Button
                onClick={openChooseFile}
                position="absolute"
                bottom={4}
                right={4}
                variant="ghost"
            >
                Change Cover
            </Button>
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
        </Box>
    )
}
