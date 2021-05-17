import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue, HStack, Tag, Icon, TagLabel, Flex, chakra } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import styles from '../../constants/styles';
import Image from '../Image';
import { URL_BASE } from '../../constants';
import Card from './Card';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { MdPlayCircleOutline } from "react-icons/md";
import { BsCalendar, BsPencil } from "react-icons/bs";
import moment from 'moment';

interface Props extends BoxProps {
    post: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
}

type FlexDirection = 'row' | 'column' | undefined;

const PostLastestCard = ({
    post,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    ...props
}: Props) => {

    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'row', md: column ? 'row' : 'row' });

    const router = useRouter();

    const onClick = () => {
        router.push(`/articles/${post.id}`);
    };

    const [hover, setHover] = useState(false);
    const getUrlImage = (image: string) => {
        return URL_BASE + image
    }
    const formatDatePublic = (datePublic: any) => {
        return moment(datePublic).format("Do MMM YY");
    }


    return (
        <Card
            onClick={() => onClick()}
            p={0}
            justifyContent="flex-start"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.01 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            marginY=".5rem"
            display="flex"
            {...props}
            flexDirection={flexDirection}
        >
            <Box
                width={{ base: '50%', lg:  '100%'  }}
                height={{ base: "100%", lg: '300px' }}
            >
                <Image
                    width={{ base: '100%', lg:  '100%' }}
                    height={{ base: "100%", lg: '100%' }}
                    src={getUrlImage(post.image_cover[0].url)}
                    alt={'Photo of ' + post.title}
                    objectFit="cover"
                   
                ></Image>
                {post.youtube_url ? <HStack pl="10px" justify="left" pos="absolute" bottom="20px" width={{ base: '100%', lg: column ? '100%' : 60 }}>
                    <Icon mr="10px" as={MdPlayCircleOutline} h={7} w={7} color="white" />
                </HStack> : null}

            </Box>



            <Box mt={{ base: 1, md: 2 }} ml={{ base: 5, md: 6 }}>
                {
                    post.categories ? post.categories.map((catelogry: any) => (
                        <Tag mr={1} size="lg" bgColor="red" borderRadius="full">
                            <TagLabel color="white">{catelogry.name}</TagLabel>
                        </Tag>
                    )) : null
                }

                <Flex textAlign="center" alignItems="center" py={3} display={{ base: "none", lg: "flex" }}>
                    <Flex>
                        <Icon  mt={0.5} as={BsCalendar} h={4} w={4} color="black" />
                        <chakra.h2 mx={3} color="gray" fontWeight="bold" fontSize="md">
                            {formatDatePublic(post.public_date)}
                        </chakra.h2>
                    </Flex>
                    <Flex>
                        <Icon  mt={1} as={BsPencil} h={4} w={4} color="black" />
                        <chakra.h2 mx={3} color="gray" fontWeight="bold" fontSize="md">
                            {post.author}
                        </chakra.h2>
                    </Flex>

                </Flex>
                <Text
                    mt={1}
                    mb={2}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                    color={colors.secondary}
                >
                    {_.upperFirst(post.title)}
                </Text>

                <Flex display={{ base: "flex", lg: "none" }}>
                    <Icon  mt={0.5} as={BsCalendar} h={5} w={4} color="black" />
                    <chakra.h2 mx={3} color="gray" fontWeight="bold" fontSize="md">
                        {formatDatePublic(post.public_date)}
                    </chakra.h2>
                </Flex>

                <Flex display={{ base: "flex", lg: "none" }}>
                    <Icon mt={1} as={BsPencil} h={5} w={4} color="black" />
                    <chakra.h2 mx={3} color="gray" fontWeight="bold" fontSize="md">
                        {post.author}
                    </chakra.h2>
                </Flex>

                <Text mt={2} color="gray.500" display={{ base: 'none', lg: 'flex' }}>
                    {post.description.substr(0, 200)}
                    {post.description.length > 200 ? '...' : ''}
                </Text>
            </Box>
        </Card>
    );
};

export default PostLastestCard;