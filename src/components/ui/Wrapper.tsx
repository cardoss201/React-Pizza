import React from 'react'

type WraperProps = {
  children?: React.ReactNode
}

const Wrapper: React.FC<WraperProps> = ({ children }) => {
  return <div className='wrapper'>{children}</div>
}

export default Wrapper
