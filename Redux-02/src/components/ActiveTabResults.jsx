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
            if (!query) {
                alert('Insert Query')
                dispatch(setActiveTab(''))
                return
            }
            apiData = await unsplashApi(query)
            console.log(apiData)
        }
        if (activeTab === 'Videos') {
            if (!query) {
                alert('Insert Query')
                dispatch(setActiveTab(''))
                return
            }
            apiData = await pexelsApi(query)
            console.log(apiData)
        }
        if (activeTab === 'GIFs') {
            if (!query) {
                alert('Insert Query')
                dispatch(setActiveTab(''))
                return
            }
            apiData = await giphyApi(query)
            console.log(apiData)
        }
    }

    useEffect(() => {
        dataInAction()
        return () => {
            apiData = null
        }
    }, [activeTab])



    return (
        <div>

        </div>
    )
}

export default ActiveTabResults