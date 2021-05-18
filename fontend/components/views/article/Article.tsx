
import { Box, Heading, Center, Flex, Icon, Tag, TagLabel, chakra, Link } from '@chakra-ui/react';

import useColorTheme from '../../../hooks/useColorTheme';
import Markdown from "markdown-to-jsx";
import _ from 'lodash';
import DisqusComments from '../../disqus/disqusComment'
import { BsCalendar, BsPencil } from "react-icons/bs";
import YoutubeEmbed from '../../youtube/youtube'
import { getUrlImage, formatDatePublic, getTags } from '../../../helpers/commonFuction';

type Props = {
    article: any;
}
const MyParagraph = ({ children, ...props }: any) => {
    return (
        <Link {...props}>{children}</Link>
    );
}
const Article = ({ article }: Props) => {

    const tags = getTags(article.tags)
    const colors = useColorTheme();
    const urlImage = getUrlImage(article.hero_desktop.url)
    return (
        <>
            <Box as="section">
                <Box style={{
                    backgroundImage: `url("${urlImage}")`,
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    backgroundSize: "cover"
                }}
                    display="flex"
                    justifyContent="flex-end"
                    flexDirection="column"
                    h="650px"
                    pl={{ base: '0px', lg: "80px" }}
                    pr={{ base: '0px', lg: "80px" }}
                >
                    <Box
                        as="main"
                        bottom="0px"
                        opacity={0.6}
                        bg="white"
                        py={10} px={15} pl={10} textAlign="left" w={{ base: "100%", lg: "100%" }}
                        >
                        <Box>
                            {
                                tags ? tags.map((tag: any) => (
                                    <Tag key={tag} mr={1}  opacity={1} size="lg" bgColor="red" borderRadius="full">
                                        <TagLabel color="white">{tag}</TagLabel>
                                    </Tag>
                                )) : null
                            }
                        </Box>
                        <chakra.h1
                            fontSize={{ base: "2xl", md: "3xl" }}
                            color="black"
                            fontWeight="bold"
                            pt={5}
                        >
                            {article.title}
                        </chakra.h1>
                        <Flex textAlign="center" alignItems="center" pt={5}>
                            <Flex>
                                <Icon as={BsCalendar} h={6} w={6} color="black" />
                                <chakra.h2 mx={3} color="black" fontWeight="bold" fontSize="lg">
                                    {formatDatePublic(article.public_date)}
                                </chakra.h2>
                            </Flex>
                            <Flex>
                                <Icon as={BsPencil} h={6} w={6} color="black" />
                                <chakra.h2 mx={3} color="black" fontWeight="bold" fontSize="lg">
                                    {article.author}
                                </chakra.h2>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </Box>

            <Box pl={{ base: '0px', lg: "80px" }}
                pr={{ base: '0px', lg: "80px" }} flexDirection={{ base: 'column', md: 'row' }}>
                <Box h={{ base: '380px', md: '550', lg: '630px' }}>
                    <YoutubeEmbed youtube_url={article.youtube_url} />
                </Box>
                <Box as="section" d="flex" flex="3">
                    <Box as="article" margin=".5rem">
                        <Heading marginY="1.4rem" color={colors.secondary}>
                            {_.upperFirst(article?.title)}
                        </Heading>

                        <Markdown options={{
                            overrides: {
                                a: {
                                    component: MyParagraph,
                                    props: {
                                        color: 'blue',
                                    },
                                },
                                img: {
                                    component: MyParagraph,
                                    props: {
                                        color: 'blue',
                                    }
                                }

                            },
                        }}>
                            {article?.body}
                        </Markdown>
                    </Box>
                </Box>
            </Box>
            {/* <AdsBanner/> */}
            <Box
            pl={{ base: '0px', lg: "80px" }}
            pr={{ base: '0px', lg: "80px" }}>
                 <DisqusComments post={article} />
            </Box>
           


            <Box as="section"  pl={{ base: '0px', lg: "80px" }}
            pr={{ base: '0px', lg: "80px" }}>
                <chakra.h1
                    fontWeight="bold"
                    fontSize="2xl"
                    textTransform="uppercase"
                    marginTop="0.5rem" >
                    Next Stories
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


                {/* <SimpleGrid pt={3} columns={[1, null, 4]} spacing="20px" >
                    {article.relation_products?.map((product: any) => {
                        return (
                            <Box key={product.id} >
                                <ProductCart
                                    product={product}
                                />
                            </Box>
                        );
                    })}
                </SimpleGrid> */}
            </Box>
        </>
    )

}

export default Article;