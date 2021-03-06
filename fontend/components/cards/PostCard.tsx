import React from "react";
import { chakra, HStack, Box, Flex, useColorModeValue, FlexProps, Icon, Center, Spacer } from "@chakra-ui/react";
import Image from '../Image';
import { useRouter } from 'next/router';
import { BsCalendar, BsPencil } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import {getUrlImage,formatDatePublic} from '../../helpers/commonFuction';


interface Props extends FlexProps {
  alt: string;
  idArticle: string;
  article: any
}

const PostCard = ({ idArticle, article }: Props) => {

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
      onClick={()=>onClick()}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx='0'
        display={{ lg: "flex" }}
        // shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
        w="full"

      >
        <Box w={{ lg: "100%" }} display={{base:'none',lg:'flex'}}>
          <Image
            objectFit="cover"
            src={getUrlImage(article.hero_desktop.url)}
            maxHeight={'640px'}
            minHeight={'360px'}
            w="100%"
          />
        </Box>

        <Box w={{ lg: "100%" }} display={{base:'flex',lg:'none'}}>
          <Image
            objectFit="cover"
            src={getUrlImage(article.hero_mobile.url)}
            maxHeight={'640px'}
            minHeight={'360px'}
            w="100%"
          />
        </Box>



        <HStack pl="10px" justify="center" pos="absolute" bottom="8px" w="full">
          <Box py={20} px={6} maxW={{ base: "xl", lg: "5xl" }} textAlign="center" w={{ lg: "80%" }}>
            <chakra.h1
              fontSize={{ base: "2xl", md: "3xl" }}
              color="white"
              fontWeight="bold"
            >
              {article.title}
            </chakra.h1>
            {/* <chakra.p mt={4} c color="white">
         {title}
          </chakra.p> */}
            <Box textAlign="center" alignItems="center" px={6} py={3}>
              <Center>
                <Flex>
                  <Icon as={BsCalendar} h={6} w={6} color="white" />
                  <chakra.h2 mx={3} color="white" fontWeight="bold" fontSize="lg">
                    {formatDatePublic(article.public_date)}
                  </chakra.h2>
                </Flex>
                <Flex>
                  <Icon as={BsPencil} h={6} w={6} color="white" />
                  <chakra.h2 mx={3} color="white" fontWeight="bold" fontSize="lg">
                    {article.author}
                  </chakra.h2>
                </Flex>
              </Center>
            </Box>
          </Box>

        </HStack>
        {
          article.youtube_url ? <HStack pl="10px" justify="center" pos="absolute" bottom="20px" w="full">
            <Spacer />
            <Box>
              <Icon mr="10px" as={AiFillPlayCircle} h="60px" w="60px" color="white" />
            </Box>
          </HStack> 
          : null
        }
      </Box>
    </Flex>
  );
};

export default PostCard;