import React from 'react'

function Hero() {
    return (
        <div className='px-4 py-2 flex items-center flex-col w-full my-10'>
            <button className='border border-neutral-200 rounded-full px-4 py-1 text-xs font-semibold text-neutral-800 shadow-md  bg-gray-100 hover:bg-gray-200 transition duration-200 inline-flex items-center gap-2 cursor-pointer'>
                <span>Real-time data API for founders and agents</span>
                <svg width="16" height="16" fill="none">
                    <path stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path>
                </svg>
            </button>

            <h1 className='font-bold mt-10 text-6xl text-black tracking-tighter max-w-2xl text-center'>Magically simplify accounting and taxes</h1>

            <p className='max-w-lg mx-auto text-lg text-neutral-700 text-center mt-5'>Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins.</p>

            <div className='flex items-center gap-4 mt-5'>
                 <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide cursor-pointer hover:bg-[#0d6cf9] transition duration-200'>Get started</button>
                <button className='bg-white px-4 py-2 rounded-lg font-bold border-b-gray-400 shadow-lg text-shadow-md tracking-wide inline-flex items-center gap-2 cursor-pointer hover:bg-[#e9e6e6] transition duration-200'>Pricing &rarr;</button>
            </div>

        </div>
    )
}

export default Hero
