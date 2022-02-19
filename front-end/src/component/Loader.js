import React from 'react'
import{ Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
      <>
    <Spinner 
         animation='border' 
         role='status' 
         style={{
             width:'75px',
             height:'75px',
             margin:'auto',
             marginTop:'175px',
             color:'red',
             display:'block'}}>

        <span className='sr-only'>Loading</span>
        
    </Spinner>
    </>
  )
}

export default Loader