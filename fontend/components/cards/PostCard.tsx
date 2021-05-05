import React from "react";
import { chakra, Box, Flex, useColorModeValue, FlexProps } from "@chakra-ui/react";
import Image from '../Image';
import { useRouter } from 'next/router';

interface Props extends FlexProps {
  imgSrc: string;
  alt: string;
  title: string;
  idArticle:string;
}

const PostCard = ({idArticle,
  title,
  imgSrc}:Props) => {

    const router = useRouter();
    const onClick = () => {
      router.push(`/articles/${idArticle}`);
  };

  return (
    <Flex
      data-aos="fade-left"
      bg={useColorModeValue("white", "gray.800")}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"   
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx='0'
        display={{ lg: "flex" }}
        // shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
        w="full"
        h="100%"
      >
        <Box w={{ lg: "50%" }} >
        <Image
                objectFit="cover"
                h="100%"
                src={imgSrc}
                
            />
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {title}
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
         {title}
          </chakra.p>

          <Box mt={8}
          as='button' 
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
              onClick={() => onClick()}>
              Read Now
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default PostCard;