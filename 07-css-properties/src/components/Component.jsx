import React from 'react'

const Component = () => {
    return (
        <div className='w-full rounded-2xl min-h-100 bg-neutral-100 bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:10px_10px] p-8 flex flex-col items-center justify-center group'>

            <h2 className='text-2xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-800 to-red-500 text-shadow-lg'>Shashank Singh</h2>

            <p className='font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-300'>Punjab Kings</p>

            <div className='size-60 bg-neutral-100 rounded-2xl border border-neutral-200 bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)] [background-size:10px_10px] shadow-2xl relative perspective-distant transform-3d group-hover:border-neutral-300 group-hover:bg-neutral-200 transition-all duration-200'>
                <img src={"/shashank.jpg"} className='transition-transform duration-300 [transition-timing-function:cubic-bezier(.4,0,.2,1)] h-full w-full object-cover transform rotate-x-20 rotate-z-20 -rotate-y-20 translate-z-20 rounded-2xl group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85' />
            </div>
        </div>
    )
}

export default Component