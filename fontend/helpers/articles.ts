import {URL_BASE} from '../constants'

const URL_BASE_ARTICLES = URL_BASE+'/articles'

export const useGetArticles = async () => {
     const data = await fetch(URL_BASE_ARTICLES+`?featured=false`)
     return data.json()
}

export const useGetFeatered = async () => {
     const data = await fetch(URL_BASE_ARTICLES+`?featured=true`)
     return data.json()
}

export const useGetArticleById = async (id:any) => {
     const data = await fetch(URL_BASE_ARTICLES+'/'+id)
     return data.json()
}