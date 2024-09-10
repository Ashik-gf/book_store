import React from 'react'

const Header = ({setFeatured }) => {
  return (
    <div className="flex items-center justify-between mb-12 px-12 shadow-md py-3 bg-slate-100">
    <h4 className="mt-2 text-xl font-bold">Book List</h4>

    <div className="flex items-center space-x-4">
      <button onClick={()=>setFeatured(false)} className=" px-3 py-1 rounded-md active-filter">All</button>
      <button onClick={()=>setFeatured(true)} className=" px-3 py-1 rounded-md border-2 border-blue-500">Featured</button>
    </div>

  </div>
  )
}

export default Header