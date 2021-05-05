
import { Box, Heading, Text, SimpleGrid,chakra } from '@chakra-ui/react';
import styles from '../../../constants/styles';
import Image from '../../Image';
import NewsletterForm from '../../NewsletterForm';
import AuthorCard from '../../cards/AuthorCard';
import SocialCard from '../../cards/SocialCard';
import ProductCart from '../../cards/ProductCart';
import { URL_BASE } from '../../../constants'
import useColorTheme from '../../../hooks/useColorTheme';
import _ from 'lodash';
type Props = {
    article: any;
}
const Article = ({ article }: Props) => {
    const getUrlImage = (image: string) => {
        return URL_BASE + image
    }
    const colors = useColorTheme();
    return (
        <>
            <Box as="section">
                <Image
                    borderRadius={styles.borderRadius}
                    objectFit={'cover'}
                    src={getUrlImage(article?.image_cover[0].url)}
                    width={'100%'}
                    maxHeight={'640px'}
                    minHeight={'360px'}
                />
            </Box>
            <Box d="flex" flexDirection={{ base: 'column', md: 'row' }}>
                <Box as="section" d="flex" flex="3">
                    <Box as="article" margin=".5rem">
                        <Heading marginY="1.4rem" color={article.secondary}>
                            {_.upperFirst(article?.title)}
                        </Heading>
                        <Text  data-aos="fade-up">{article?.description}</Text>
                    </Box>
                </Box>
                <Box as="section" flex="1" flexDirection="column" marginTop={'2rem'}>
                    <AuthorCard
                        author={{
                            id: '1',
                            name: article.author,
                            avatar:
                                'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
                        }}
                    />
                    <SocialCard title="Share The Post" facebook twitter linkedin onClick={() => { }} />
                    <NewsletterForm onSubmitForm={() => { }} marginY="10px" />
                </Box>
            </Box>
            <Box as="section">
                <chakra.h1
                fontWeight="bold"
                fontSize="3xl"
                textTransform="uppercase"
                marginX="1.4rem" marginTop="2rem" color={colors.primary}>
                    Browse More News
                </chakra.h1>
                {/* <Box d="flex" flexDirection="row" flex="4" as="section" margin={'.3rem'}>
                    {article.relation_products?.map((product:any) => {
                        return (
                            <ProductCart
                                product={product}
                            />
                        );
                    })}
                </Box> */}


                <SimpleGrid pt={3} columns={[1, null, 4]} spacing="20px" >
                    {article.relation_products?.map((product: any) => {
                        return (
                            <Box key={product.id} >
                                 <ProductCart
                                product={product}
                            />
                            </Box>                           
                        );
                    })}

                </SimpleGrid>
            </Box>
        </>
    )

}

export default Article;