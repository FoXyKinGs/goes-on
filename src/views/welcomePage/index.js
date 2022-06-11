import React from 'react'
import './index.css'
import UnDraw from '../../assets/undraw.svg'

const index = () => {
  return (
    <main className='welcomePage'>
      <div className='content'>
        <div className='right-content'>
          <img src={UnDraw} className='splash' alt='splash'/>
        </div>
        <div className='left-content'>
          <form>
            <input type='text' placeholder='Input your ID here' />
            <button> Start Using </button>
          </form>
          <p className='information'>Don't worry if you don't have ID, just click the button and magicaly generate a ID for you</p>
        </div>
      </div>
    </main>
  )
}

export default index