import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery, setActiveTab, setLoading, setResults, setError } from '../features/searchSlice/searchSlice'
import { pexelsApi, unsplashApi, giphyApi } from '../api/mediaApi'
const ActiveTabResults = () => {
    const { query, activeTab, results, loading, error } = useSelector(state => state.search)
    const dispatch = useDispatch()
    let apiData = null;

    const dataInAction = async () => {

        if (activeTab === 'Photos') {

            apiData = await unsplashApi(query)
            console.log(apiData)
        }
        if (activeTab === 'Videos') {

            apiData = await pexelsApi(query)
            console.log(apiData)
        }
        if (activeTab === 'GIFs') {

            apiData = await giphyApi(query)
            console.log(apiData)
        }
    }

    useEffect(() => {
        if (query) {
            dataInAction()
        }
        return () => {
            apiData = null
        }
    }, [query, activeTab])

    return (
        <div>

        </div>
    )
}

export default ActiveTabResults