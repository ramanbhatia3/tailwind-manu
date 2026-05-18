import React from 'react'

function Hero() {
    return(
        <div className='py-40 w-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold tracking-tight max-w-xl text-center leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 font-display'>Unleash the power of intuitive finance</h1>

            <p className='mx-auto max-w-md text-neutral-300 selection:bg-black text-center mt-5 text-sm font-paaji'>Say goodbye to the <span className='text-primary'>outdated</span> finance tools. Evry small business owner, regardless of the background, can now manage their <span className='text-primary'>business</span> like a pro. Simple. Intuitive. And never broing</p>

            <div className="flex justify-center mt-4 w-full max-w-sm">
                <input type="text" placeholder='Enter your email' className='rounded-xl border border-neutral-600 mr-2 placeholder:text-neutral-500 text-white px-2 flex-1 focus:outline-none focus:ring-1 focus:ring-primary transition duration-200' />
            
                <button className='relative px-2 py-1 rounded-xl border border-neutral-700 text-white cursor-pointer'>
                    <div className='absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent'></div>
                    Join Waitlist
                </button>
            </div>
        </div>
    )
}

export default Hero
