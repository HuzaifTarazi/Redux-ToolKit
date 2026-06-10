import React from 'react'

const TabGridItems = ({ element }) => {
    console.log(element)

    return (<>
        <div>
            <div className='bg-gray-200 rounded-t h-55 w-80 overflow-hidden'>

                {element.type === 'photo' ? <img src={element.src} alt="" className='w-full h-full object-cover' /> : ''}
                {element.type === 'video' ? <video autoPlay loop muted playsInline className='w-full h-full object-cover'><source src={element.src} type="video/mp4" /></video> : ''}
                {element.type === 'gif' ? <img src={element.src} alt="" className='w-full h-full object-cover' /> : ''}
            </div>
            <p className='text-black bg-gray-400 rounded-b px-2 py-1 text-sm'>
                <span className='text-xs font-bold'>Type: </span>
                {element.type}
            </p>
        </div>
    </>
    )
}

export default TabGridItems