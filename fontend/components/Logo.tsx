import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import useColorTheme from '../hooks/useColorTheme';
const Logo = (props: any) => {
    const colors = useColorTheme();
    return (
        <Box {...props}>
            <Text fontSize="1.5rem" fontWeight="bold" color={colors.primary}>
                Blogs Store
            </Text>
        </Box>
    );
};

export default Logo;
