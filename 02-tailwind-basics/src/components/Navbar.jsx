import React from 'react'

function Navbar() {
    const links = [
        {
            title: 'Guide',
            href: '#'
        },
        {
            title: 'Pricing',
            href: '#'
        },
        {
            title: 'Login',
            href: '#'
        },
    ]
    return (
        <div className='flex items-center justify-between py-4 px-4'>
            <a href="#"><img src={"/finta-logo.svg"} height={50} width={50} draggable={false} loading='lazy' alt="Finta" /></a>
            <div className='flex items-center gap-6'>
                {links.map((link, index) => (
                    <a className='text-neutral-800 font-medium hover:text-neutral-600 transition duration-500' key={link.title} href="{link.href}">{link.title}</a>
                ))}

                <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide cursor-pointer hover:bg-[#0d6cf9] transition duration-200'>Get started</button>
            </div>
        </div>
    )
}

export default Navbar
