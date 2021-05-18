import React from 'react';
import TrendingCard from '../components/views/homepage/Trending';
import LastestCard from '../components/views/homepage/Lastest';
import { GetStaticProps } from 'next';
import {useGetArticles,useGetFeatered} from '../helpers/articles';


type Props = {
    featured?:any;
    articles?: any;
    errors?: string;
};

const IndexPage = ({ articles,featured }: Props) => {
    return (<>
            <TrendingCard articles={featured}/>
            <LastestCard articles={articles}/>
            </>
    );
};

export const getStaticProps: GetStaticProps =  async (context:any)=> {
    try {
        let data  = await useGetArticles();
        let dataFeatured  = await useGetFeatered();

        return { props: { articles: data, featured:dataFeatured,  revalidate: 10 } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default IndexPage;
