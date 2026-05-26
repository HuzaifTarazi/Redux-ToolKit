import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export const unsplashApi = async (query, page = 1) => {
    try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, page }, headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
        })
        console.log(res)
    } catch (err) {
        console.error(err)
    }
}

export const pexelsApi = async (query, page = 1) => {
    try {
        const res = await axios.get('https://api.pexels.com/v1/videos/search', {
            params: { query, page }, headers: { Authorization: PEXELS_KEY }
        })
        console.log(res)
    } catch (err) {
        console.error(err)
    }
}


