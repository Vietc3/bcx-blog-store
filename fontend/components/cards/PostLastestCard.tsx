import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import styles from '../../constants/styles';
import Image from '../Image';
import { URL_BASE } from '../../constants';
import Card from './Card';
import _ from 'lodash';
import { useRouter } from 'next/router';

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
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });

    const router = useRouter();

    const onClick = () => {
        router.push(`/articles/${post.id}`);
    };

    const [hover, setHover] = useState(false);
    const getUrlImage = (image: string) => {
        return URL_BASE + image
    }
    
    return (
        <Card
            onClick={() => onClick()}
            p={4}
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
            <Box>
                <Image
                    width={{ base: '100%', lg: column ? '100%' : 60 }}
                    height={{ base: 80, lg: column ? '15rem' : 40 }}
                    src={getUrlImage(post.image_cover[0].url)}
                    alt={'Photo of ' + post.title}
                    objectFit="cover"
                    borderRadius={styles.borderRadius}
                />
            </Box>
            <Box mt={{ base: 4, md: 2 }} ml={{ md: 6 }}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color={colors.primary}
                >
                    {post.title}
                </Text>
                <Text
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                    color={colors.secondary}
                >
                    {_.upperFirst(post.title)}
                </Text>
                <Text mt={2} color="gray.500">
                    {post.description.substr(0, 120)}
                    {post.description.length > 120 ? '...' : ''}
                </Text>
            </Box>
        </Card>
    );
};

export default PostLastestCard;