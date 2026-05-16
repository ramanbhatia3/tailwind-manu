import React from 'react'

function Navbar() {
    const links = [
        {
            title: 'Courses',
            href: '#'
        },
        {
            title: 'Roadmaps',
            href: '#'
        },
        {
            title: 'Login',
            href: '#'
        },
    ]
    return (
        <div className='navbar-root'>
            <div className='logo'>SkillUp</div>
            <div className='links'>
                {links.map((link, index) => (
                    <a className='link-items' key={link.title} href="{link.href}">{link.title}</a>
                ))}

                <button className='btn'>Start Learning</button>
            </div>
        </div>
    )
}

export default Navbar
