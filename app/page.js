import React from 'react'
import Home from './pagesRoutes/home/page'
import Project from './pagesRoutes/projects/page'
import Sampleblog from './components/Sampleblog'
const page = () => {
  return (
    <div>
      <Home/>
      <Sampleblog/>
      <Project/>
    </div>
  )
}

export default page