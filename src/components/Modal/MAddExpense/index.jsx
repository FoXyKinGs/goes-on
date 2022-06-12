import { useLiveQuery } from 'dexie-react-hooks'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../../db'
import './index.css'

const Index = ({ changeValue }) => {
  const [expense, setExpense] = useState({
    expense: '',
    tag: ''
  })
  const [value, setValue] = useState(0)

  const incomeValue = useLiveQuery(() => db.income.toArray())
  const expenseValue = useLiveQuery(() => db.expense.toArray())

  const addExpenseToDB = (e) => {
    e.preventDefault()

    if (Number(expense.expense) > value) {
      alert('Your expense amount is higher than your income')
    } else {
      try {
        let date = new Date()
        db.expense.add({
          value: expense.expense,
          tag: expense.tag,
          addDate: date
        })
  
        setExpense({
          expense: '',
          tag: ''
        })
        changeValue('expense')
      } catch(error) {
        console.log(error)
      }
    }
  }


  useEffect(() => {
    const getIncome = () => {
      let result = 0
      incomeValue?.forEach(item => {
        result +=+ item.value
      })
      return result
    }
  
    const getExpense = () => {
      let result = 0
      expenseValue?.forEach(item => {
        result +=+ item.value
      })
      return result
    }

    setValue(getIncome() - getExpense())
  }, [incomeValue, expenseValue])

  const handleChange = (e) => {
    const { name, value } = e.target

    setExpense(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='modal-expense'>
      <div className='modal-box'>
        <form onSubmit={(e) => addExpenseToDB(e)}>
          <label htmlFor='expense'>Expense :</label>
          <input type='number' name='expense' required id='expense' placeholder='Input income here' value={expense.expense} onChange={(e) => handleChange(e)} />
          <label htmlFor='tag'>Tag / Note :</label>
          <textarea type='text' name='tag' id='tag' placeholder='ex: pay for laundry, buys daily need' value={expense.tag} onChange={(e) => handleChange(e)}/>
          <div className='action'>
            <button className='confirm' type='submit'> Confirm </button>
            <button className='cancel' onClick={() => changeValue('expense')}> Cancel </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Index