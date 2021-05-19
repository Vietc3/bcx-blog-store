import { GetStaticProps, GetStaticPaths } from 'next';
import Article from '../../components/views/article/Article'
import { Post } from '../../interfaces';
import { useGetAllArticles,useGetArticleById,useGetArticles } from '../../helpers/articles';
import NextStories from '../../components/views/article/NextStories'


type Props = {
    article?: any;
    articlesNextStories?: any;
    morePosts?: Post[];
    errors?: string;
};

const PostDetail = ({ article, articlesNextStories}: Props) => {
    return (
        <>
      <Article article={article}/>
      <NextStories articles={articlesNextStories}/>
      </>
    );
};

export default PostDetail;

export async function getStaticPaths() {
    let data = await useGetAllArticles();
    const paths = data.map((article: any) => {
        return {
            params: {
                slug: article.id.toString()
            }
        }
    })
    return { paths, fallback: false }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const slug = params?.slug;
        let data = await useGetArticleById(slug);
        let dataNextStories  = await useGetArticles(`id_ne=${slug}&_sort=public_date:DESC&_limit=2`);
        return { props: { article: data, articlesNextStories: dataNextStories }, revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
