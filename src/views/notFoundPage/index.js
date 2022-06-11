import React from 'react'
import './index.css'
import notFound from '../../assets/notFound.svg'

const index = () => {
  return (
    <div className='pageNotFound'>
      <img src={notFound} alt='not-found' className='splash'/>
      <p>Not Found <span>Back</span> </p>
    </div>
  )
}

export default index