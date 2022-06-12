import React from 'react'
import './index.css'
import UnDraw from '../../assets/undraw.svg'
import { useNavigate } from 'react-router-dom'


const Index = () => {
  const navigate = useNavigate()

  const nextStep = () => {
    navigate('/manage')
  }

  return (
    <main className='welcomePage'>
      <div className='content'>
        <div className='right-content'>
          <img src={UnDraw} className='splash' alt='splash'/>
        </div>
        <div className='left-content'>
          <button onClick={() => nextStep()}> Start Using </button>
        </div>
      </div>
      <p className='copyright'>mochrizaldiak©2022</p>
    </main>
  )
}

export default Index