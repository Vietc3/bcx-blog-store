
import { Box, Heading, Flex, Icon, Tag, TagLabel, chakra, Link, Center } from '@chakra-ui/react';
import useColorTheme from '../../../hooks/useColorTheme';
import Markdown from "markdown-to-jsx";
import _ from 'lodash';
import DisqusComments from '../../disqus/disqusComment'
import { BsCalendar, BsPencil } from "react-icons/bs";
import YoutubeEmbed from '../../youtube/youtube'
import { getUrlImage, formatDatePublic, getTags } from '../../../helpers/commonFuction';
import { URL_BASE } from '../../../constants';
import Image from '../../Image';


type Props = {
    article: any;
}
const MyParagraph = ({ children, ...props }: any) => {
    return (
        <Link {...props}>{children}</Link>
    );
}

const MyIMG = ({ children, ...props }: any) => {
    console.log(props);
    
    return (
        <Image 
      
        width={{ base: '100%', lg:  '50%' }}
        float="right"
        height={{ base: "100%", lg: '100%' }} src={props.src}>{children}</Image>
    );
}
const Article = ({ article }: Props) => {

    const tags = getTags(article.tags)
    const colors = useColorTheme();
    const urlImage = getUrlImage(article.hero_desktop.url);
    const urlImageMarkdown = () =>{
        return article.body.split('/uploads/').join(`${URL_BASE}/uploads/` );
    }
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
                    h={{ base: '350px', lg: "660px" }}
                    pl={{ base: '0px', lg: "80px" }}
                    pr={{ base: '0px', lg: "80px" }}
                >
                    <Box
                        as="main"
                        bottom="0px"
                        style={{background: "rgba(255,255,255,0.7)"}}
                        bg="white"
                        py={10} px={15} pl={10} textAlign="left" w={{ base: "100%", lg: "100%" }}
                        >
                        <Box display={{base:"none",md:"flex",lg:"flex"}}>
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
                        <Flex textAlign="center" alignItems="center" pt={5} display={{base:"none",lg:"flex"}}>
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

                        <Center textAlign="center" alignItems="center" pt={5} display={{base:"flex",lg:"none"}}>
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
                        </Center>
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
                                    component: MyIMG,
                                },
                            },
                        }}>
                            {urlImageMarkdown()}
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