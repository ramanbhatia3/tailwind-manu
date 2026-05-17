import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-5xl mx-auto px-4 md:px-8'>
        {children}
    </div>
  )
}

export default Container
