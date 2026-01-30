import React, { useState } from 'react'


const Search = () => {
    const [search,setSearch]=useState()
    const handelSearch={
    }
  return (
    <div className='max-w-4xl w-full '>
        <input type="text" placeholder='Search....' value={search} onChange={handelSearch} className=' w-full outline-2 outline-gray-300 p-1 rounded-md '/>
      
    </div>
  )
}

export default Search
