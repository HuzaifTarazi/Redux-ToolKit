import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab, setLoading } from '../features/searchSlice/searchSlice'

const Tabs = () => {
    const tabs = ['Photos', 'Videos', 'GIFs']
    const activeTab = useSelector((state) => state.search.activeTab)
    const query = useSelector((state) => state.search.query)
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex gap-4 pt-3 justify-center'>
                {tabs.map((element, index) => {
                    return <div key={index}
                        className={`${activeTab === element ? 'bg-emerald-800' : 'bg-emerald-600'} p-1 px-4 rounded cursor-pointer active:bg-emerald-700`}
                        onClick={() => {
                            dispatch(setActiveTab(element))
                            if(query) {
                                dispatch(setLoading(true))
                            } else {
                                alert("Error Search Box is Empty...!")
                            }
                        }}
                    >
                        {element}
                    </div>
                }
                )
                }
            </div>
        </>
    )
}

export default Tabs