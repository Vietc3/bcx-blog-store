import React from 'react';
import Link from 'next/link';
import { Box, BoxProps, Button, Text } from '@chakra-ui/react';

interface Props extends BoxProps {
    to: string;
    isLast?: boolean;
}

const MenuItem: React.FC<Props> = ({ children, isLast = false, to = '/', ...rest }) => {
    return (
        <Link href={to}>
        <Button variant={'ghost'} {...rest}>
            <a>
            <Text display="block">{children}</Text>
            </a>             
        </Button>
        </Link>
    );
};

export default MenuItem;
