import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery, setActiveTab, setLoading, setResults, setError } from '../features/searchSlice/searchSlice'
import { pexelsApi, unsplashApi, giphyApi } from '../api/mediaApi'
import TabGridItems from './TabGridItems';

const ActiveTabResults = () => {
    const { query, activeTab, results, loading, error } = useSelector(state => state.search)
    const dispatch = useDispatch()

    const dataInAction = useCallback(async () => {
        let apiData = [];
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
    }, [activeTab, query])
    useEffect(() => {
        if (query) {
            dataInAction()
        }
        return () => {
            dispatch(setResults([]))
        }
    }, [activeTab, query, dataInAction])

    return (<>

        <div className='justify-center flex '>
            {loading && <p className='bg-red-700 w-1/2 h-1/2 mx-20 my-10 text-white p-3 rounded flex justify-between items-center'>Loading Data...
                <CircularProgress color='white' thickness={6} size="23px" aria-label="Loading…" />
            </p>}
        </div>
        <div className='flex flex-row gap-4 justify-center my-6 flex-wrap'>
            {loading === false && results.map((element) => {
                return <a key={element.id} target='_blank' href={element.src}><TabGridItems element={element} /></a>
            })}
        </div>
    </>
    )
}

export default ActiveTabResults