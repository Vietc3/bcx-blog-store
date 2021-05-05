import React from "react";
import { chakra, Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";
import {URL_BASE} from '../../constants';
import _ from 'lodash';

type Props = {
    product: any;
}

const ProductCard = ({product}:Props) => {
    const getUrlImage = (image: string) => {
        return URL_BASE + image
    }   
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="100%"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          {/* <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {product.name}
          </chakra.h1> */}
          <chakra.h1
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
           {product.name.substr(0, 20)}
                    {product.name.length > 20 ? '...' : ''}
          </chakra.h1>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={getUrlImage(product.images[0].url)}
          alt={product.name}
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
           {`$${product.price}`}
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductCard;