import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export const unsplashApi = async (query, page = 1, per_page = 20) => {
    try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, page, per_page }, headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
        })
        return res.data.results
    } catch (err) {
        console.error(err)
    }
}

export const pexelsApi = async (query, page = 1, per_page = 15) => {
    try {
        const res = await axios.get('https://api.pexels.com/v1/videos/search', {
            params: { query, page }, headers: { Authorization: PEXELS_KEY }
        })
       return res.data.videos
    } catch (err) {
        console.error(err)
    }
}


export const giphyApi = async (query, page = 1) => {
    try {
        const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: { q: query, limit: 20, api_key: GIPHY_KEY }
        })
        return res.data.data
    } catch (err) {
        console.error(err)
    }
}


