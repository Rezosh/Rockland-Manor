import React from 'react'

type Children = {
    children: React.ReactNode
}
const Container = ({children}: Children) => {
  return (
    <div className='container mx-auto max-w-7xl lg:px-8 px-4'>{children}</div>
  )
}

export default Container