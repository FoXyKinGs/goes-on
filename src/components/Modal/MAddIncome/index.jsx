import React from 'react'
import './index.css'
import {  db } from '../../../db'
import { useState } from 'react'

const Index = ({ changeValue }) => {

  const [income, setIncome] = useState('')
  const addIncomeToDB = async (e) => {
    e.preventDefault()
    try {
      let date = new Date()
      await db.income.add({
        value: income,
        addDate: date
      })

      setIncome('')
      changeValue('income')
    } catch(error) {
      console.log(error)
    }
  }

  const changeHandle = (e) => {
    setIncome(e.target.value)
  }



  return (
    <div className='modal-income'>
      <div className='modal-box'>
        <form onSubmit={(e) => addIncomeToDB(e)}>
          <label htmlFor='income'>Income :</label>
          <input type='number' required name='income' id='income' placeholder='Input income here' value={income} onChange={(e) => changeHandle(e)}/>
          <div className='action'>
            <button className='confirm' type='submit'> Confirm </button>
            <button className='cancel' onClick={() => changeValue('income')}> Cancel </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Index