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
                            return <PostLastestCard data-aos="fade-right" post={post} key={post.id} />;
                        })}
                    <Button w="100%" variant="ghost">
                        Load More
                    </Button>
                </Box>
                <Box flex="2" flexDirection="column" as="section" marginBottom={'10px'} color={colors.primary} marginX="1rem">
                    <Box>
                        <Text color="primary" textAlign="center"   marginY={'.7em'} fontWeight="bold">
                            Most Reading Today
                        </Text>
                        {articles.map((post:any) => {
                            return (
                                <PostLastestCard
                                    data-aos="fade-left"
                                    column
                                    post={post}
                                    key={post.id+'MOST READING'}
                                    titleFontSize={'1em'}
                                />
                            );
                        })}
                    </Box>
                    <NewsletterForm onSubmitForm={() => { }} marginY="10px" />
                    <SocialCard title="Follow Us" facebook twitter linkedin youtube instagram onClick={() => { }} />
                </Box>
            </Box>

        </>
    );
};

export default LastestCard;

