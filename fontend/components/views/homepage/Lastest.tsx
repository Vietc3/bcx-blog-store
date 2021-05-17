import React from "react";
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import useColorTheme from '../../../hooks/useColorTheme';
import PostLastestCard from '../../cards/PostLastestCard';
import NewsletterForm from '../../NewsletterForm';
import SocialCard from '../../cards/SocialCard';


type Props = {
    margin?: number;
    containerHeight?: number;
    articles: any;
}

const LastestCard = ({
    articles,
}: Props) => {
    
    const colors = useColorTheme();
    return (
        <>
            <Heading marginX=".1em" marginTop="1em" fontSize={'1.6em'} color={colors.primary}  fontWeight="300">
                Latest News
            </Heading>
            <Box d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                
                <Box d="flex" flexDirection="column" flex="4" as="section" marginY={'.7em'}>
                    {articles.map((post:any) => {
                            return <PostLastestCard  post={post} key={post.id} />;
                        })}
                    <Button w="100%" variant="ghost">
                        Load More
                    </Button>
                </Box>
        
            </Box>
            <NewsletterForm onSubmitForm={() => { }} marginY="10px" />

        </>
    );
};

export default LastestCard;

