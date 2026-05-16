import React from 'react'

function Hero() {
    return (
        <div className='hero-root'>
            <div className='badge'>
                <span>What are the most in-demand tech skills today?</span>
                <svg width="16" height="16" fill="none">
                    <path stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path>
                </svg>
            </div>

            <h1 className='hero-title'>Level Up Your Skills with Smart Learning</h1>

            <p className='hero-subtitle'>Interactive courses, hands-on projects, real-world roadmaps. Start learning in 10mins. get job-ready at your own pace</p>

            <div className='hero-cta'>
                <button className='btn'>Start Learning</button>
                <button className='btn btn-secondary'>
                    <span>Join Community</span>
                    <svg width="16" height="16" fill="none">
                    <path stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path>
                    </svg>
                </button>
            </div>

            <div className='horizontal-line'></div>

            <div className='hero-image-container'>
                <img src={"/hero-image.png"} alt="SkillUp Courses" className='hero-image' />
            </div>
        </div>
    )
}

export default Hero
