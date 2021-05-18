import React from 'react';

import {
    Box,
    Button,
    BoxProps,
    Flex,
    Text,
    IconButton,
    InputGroup,
    InputRightElement,
    Input,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Spacer,
} from '@chakra-ui/react';
import styles from '../../constants/styles';
import {
    FaPaperPlane,
} from "react-icons/fa";
interface Props extends BoxProps {
    onSubmitForm: (email: string) => void;
}

const SubcribeForm = ({ onSubmitForm, ...props }: Props) => {
    return (
        <Box>
            <Flex
                bg={useColorModeValue('red', 'gray.800')}
                color={useColorModeValue('white', 'white')}
                minH={'90px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                // borderStyle={'solid'}
                // borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                maxW={styles.mainMaxWidth}
                mx={'auto'}>
                <Flex display={{ base: 'none', md: 'flex' }} flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}>
                    <Text color="primary" fontWeight="bold" margin=".5rem">
                        Get the lastest updates about out stories.
                    </Text>
                    <Text color="primary" ml="1px" mt=".5rem" >
                       Subcribe to our newsletter now!
                    </Text>
                    <Spacer/>
                    <InputGroup w="30%">
                        <InputRightElement
                            w="30%"
                            borderRadius={30}
                            bgColor="black"  
                        >
                            <Button
                            zIndex="15"
                                p={2}
                                leftIcon={<FaPaperPlane />} colorScheme="black" variant="solid">
                                SUBCRIBE
                          </Button>
                        </InputRightElement>
                        <Input bgColor="white" color="black" borderRadius={25} type="tel" placeholder="Enter Email Address" />
                    </InputGroup>
                </Flex>


            </Flex>
        </Box>
    );
};

export default SubcribeForm;