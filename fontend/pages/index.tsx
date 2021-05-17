import React from 'react';
import TrendingCard from '../components/views/homepage/Trending';
import LastestCard from '../components/views/homepage/Lastest';
import { GetStaticProps } from 'next';
import {useGetArticles} from '../helpers/articles';


type Props = {
    articles?: any;
    errors?: string;
};

const IndexPage = ({ articles }: Props) => {
    return (<>
            <TrendingCard articles={articles}/>
            <LastestCard  articles={articles}/>
            </>
    );
};

export const getStaticProps: GetStaticProps =  async (context:any)=> {
    try {
        let data  = await useGetArticles();
        return { props: { articles: data,  revalidate: 10 } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default IndexPage;
