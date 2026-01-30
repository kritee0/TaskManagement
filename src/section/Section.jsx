import React from 'react'

const Section = ({children ,className=""}) => {
  return (
    <div className={` mb-4 p-4 ${className}`}>
        {children}      
    </div>
  )
}
export default Section
