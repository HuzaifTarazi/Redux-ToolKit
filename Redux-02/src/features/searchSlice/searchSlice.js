import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: '',
    activeTab: 'Photos',
    results: [],
    loading: false,
    error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTab(state, action) {
            state.activeTab = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
        clearResult(state) {
            state.results = []
        }
    }
})

export const { setQuery, setActiveTab, setResults, setLoading, setError } = searchSlice.actions

export default searchSlice.reducer