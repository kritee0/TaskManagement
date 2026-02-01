import React from 'react'

const prioirtyLogic = () => {
    const prioirtyOrder={
        higher:1,
        medim:2,
        low:3,
    }
    
    const SortedTasks=[...tasks].sort(()=>{
        const pa=prioirtyOrder[a.priority]??0;
        const pb=prioirtyOrder[b.priority]??0;
        return pa-pb;
    })
  return (
    <>

{
    SortedTasks.map((task)=>(

   <div key={task.id}>
    {SortedTasks??"Normal"}
 </div>
    ))
}
      
    </>
  )
}

export default prioirtyLogic
