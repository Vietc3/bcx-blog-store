import { GetStaticProps, GetStaticPaths } from 'next';
import Article from '../../components/views/article/Article'
import { Post } from '../../interfaces';
import { useGetAllArticles,useGetArticleById } from '../../helpers/articles';

type Props = {
    article?: any;
    morePosts?: Post[];
    errors?: string;
};

const PostDetail = ({ article}: Props) => {
    return (
        <>
      <Article article={article}/>
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
        return { props: { article: data }, revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
