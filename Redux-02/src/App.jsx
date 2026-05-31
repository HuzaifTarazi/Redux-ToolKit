import React from 'react'
import { pexelsApi } from './Api/mediaApi.js'
const App = () => {

  return (<>
    <div className='text-white h-screen bg-gray-900'>

      <button className='bg-red-500' onClick={()=>{ pexelsApi('cat')}}>GET PHOTOS</button>
    </div>
  </>
  )
}

export default App