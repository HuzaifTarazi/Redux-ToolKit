import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: '',
    activeTab: 'photos',
    results: [], 
    loading: false,
    error: null,
}

const searchSlice = createSlice({
    
    name: 'search',
    initialState,
    reducers: {
        setQuery(state, action){

        }, 
        setActiveTab(state, action){

        },
        setResults(state, action){

        },
        setLoading(state, action){

        },
        setError(state,action){

        }
    }
})

export const {setQuery, setActiveTab, setResults, setLoading, setError} = searchSlice.actions

export default searchSlice.reducer