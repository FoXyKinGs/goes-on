import React from 'react'
import Line from '../../components/Chart'
import './index.css'

const index = () => {
  return (
    <main className='managementPage'>
      <div className='content'>
        <p className='id'>ID: 129kasd123</p>
        <div className='total-money'>
          <p>Value :</p>
          <table>
            <th rowSpan='2'>Rp</th>
            <td rowSpan='10'>6.500.000</td>
          </table>
          <button className='add-income'> Add income </button>
        </div>
        <div className='history'>
          <div className='income'>
            <p>Income :</p>
            <div className='history'></div>
          </div>
          <div className='expense'>
            <p>Expense :</p>
            <div className='history'></div>
            <dvi className='action'>
              <button className='reminder'>Reminder</button>
              <button className='add-expense'>Add Expense</button>
            </dvi>
          </div>
        </div>
        <div className='graph'>
          <Line />
        </div>
      </div>
    </main>
  )
}

export default index