import React from 'react'
import Sidebar from './Sidebar'
import Parentdiv from './Parentdiv'

export default function Cantainer() {
  return (
   <>
   <div className='dashboard container'>
    <Sidebar/>
    <Parentdiv/>
   </div>
   </>
  )
}
