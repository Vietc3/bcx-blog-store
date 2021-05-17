import React from "react";
import { chakra, HStack, Box, Flex, useColorModeValue, FlexProps, Icon, Center, Spacer } from "@chakra-ui/react";
import Image from '../Image';
import { useRouter } from 'next/router';
import { BsCalendar, BsPencil } from "react-icons/bs";
import { MdPlayCircleOutline } from "react-icons/md";
import moment from 'moment';


interface Props extends FlexProps {
  imgSrc: string;
  alt: string;
  title: string;
  idArticle: string;
  article: any
}

const PostCard = ({ idArticle,
  title,
  imgSrc, article }: Props) => {

  const router = useRouter();
  const onClick = () => {
    router.push(`/articles/${idArticle}`);
  };

  const formatDatePublic = (datePublic: any) => {
    return moment(datePublic).format("Do MMM YY");
  }

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

      >
        <Box w={{ lg: "100%" }} >
          <Image
            objectFit="cover"
            src={imgSrc}
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
              {title}
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
              <Icon mr="10px" as={MdPlayCircleOutline} h="40px" w="40px" color="white" />
            </Box>
          </HStack> 
          : null
        }



      </Box>
    </Flex>
  );
};

export default PostCard;