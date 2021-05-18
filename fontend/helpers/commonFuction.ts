import { URL_BASE } from '../constants';

export const getUrlImage = (image: string) => {
    return URL_BASE + image
}
export const getTags = (tags: string) => { 
    return tags.split(',')
}

