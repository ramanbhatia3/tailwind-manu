import React from 'react'

function Responsive() {
    return(
        <div className='flex flex-col paaji:flex-row items-center gap-10'>
            <div className='h-20 w-20 rounded bg-neutral-200'></div>
            <div className='h-20 w-20 rounded bg-red-200'></div>
            <div className='h-20 w-20 rounded bg-blue-200'></div>
        </div>
    )
}

export default Responsive
