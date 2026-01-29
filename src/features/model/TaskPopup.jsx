import React from 'react'
import { Children } from 'react'

const TaskPopup = ({close,children}) => {
 
  return (
    <>   
    <div className='fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-white/50 backdrop:bg-transparent   flex items-center justify-center z-30'  onClick={close}>       
    </div>
      <div className='relative  max-w-full w-full h-full bg-gray-900 rounded-2xl border-0 border-gray-500 flex   z-80'>
      {children}
    </div>
    </>
  )
}
export default TaskPopup
