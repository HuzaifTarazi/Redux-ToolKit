import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery, setActiveTab, setLoading, setResults, setError } from '../features/searchSlice/searchSlice'
import { pexelsApi, unsplashApi, giphyApi } from '../api/mediaApi'

const ActiveTabResults = () => {
    const { query, activeTab, results, loading, error } = useSelector(state => state.search)
    const dispatch = useDispatch()
    let apiData = [];

    const dataInAction = async () => {
        try {
            if (activeTab === 'Photos') {
                apiData = await unsplashApi(query)
                dispatch(setResults(apiData))
            }
            if (activeTab === 'Videos') {
                apiData = await pexelsApi(query)
                dispatch(setResults(apiData))
            }
            if (activeTab === 'GIFs') {
                apiData = await giphyApi(query)
                dispatch(setResults(apiData))
            }
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 3000);

        } catch (err) {
            dispatch(setError(err))
            dispatch(setLoading(false))
        }
    }
    useEffect(() => {
        if (query) {
            dataInAction()
        }
        return () => {
            dispatch(setResults([]))
        }
    }, [query, activeTab])

    return (
        <div>
            {loading && <p className='bg-red-600 text-white p-3 rounded'>Loading Data...</p>}
            {loading === false && results.map((element, index) => {
                return (
                    <div key={index} className='flex'>{element.title}</div>
                )
            })}
        </div>
    )
}

export default ActiveTabResults