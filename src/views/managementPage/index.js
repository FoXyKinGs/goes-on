import React, { useState, useEffect } from 'react'
import Line from '../../components/Chart'
import './index.css'
import ModalAddIncome from '../../components/Modal/MAddIncome'
import ModalAddExpense from '../../components/Modal/MAddExpense'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../db'
import IncomeCard from '../../components/IncomeCard'
import ExpenseCard from '../../components/ExpenseCard'

const Index = () => {
  const [value, setValue] = useState(0)
  const [isAddIncomeOpen, setIsAddIncomeOpen] = useState(false)
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)

  const income = useLiveQuery(() => db.income.toArray())
  const expense = useLiveQuery(() => db.expense.toArray())

  const changeValue = (val) => {
    if (val === 'income') {
      setIsAddIncomeOpen(!isAddIncomeOpen)
    } else {
      if (value <= 0) {
        alert("You doesn't have enough income to add new expense")
      } else {
        setIsAddExpenseOpen(!isAddExpenseOpen)
      }
    }
  }

  useEffect(() => {
    setIsAddExpenseOpen(false)
    setIsAddIncomeOpen(false)
  }, [])


  useEffect(() => {
    const getIncome = () => {
      let result = 0
      income?.forEach(item => {
        result +=+ item.value
      })
      return result
    }
  
    const getExpense = () => {
      let result = 0
      expense?.forEach(item => {
        result +=+ item.value
      })
      return result
    }

    setValue(getIncome() - getExpense())
  }, [income, expense])
  
  const convertToIDR = (val) => {
    const format = val.toString().split('').reverse().join('')
    const convert = format.match(/\d{1,3}/g)

    return convert.join(',').split('').reverse().join('')
  }

  return (
    <main className='managementPage'>

      {
        // Modal Add Income
        !isAddIncomeOpen ? '' :  <ModalAddIncome changeValue={changeValue} />
      }

      {
        // Modal Add Expense
        !isAddExpenseOpen ? '' : <ModalAddExpense changeValue={changeValue}/>
      }
      
      <div className='content'>
        <div className='total-money'>
          <p>Value :</p>
          <div className='value'>
            <div className='currency'>
              <p>Rp</p>
            </div>
            <div className='currency-value'>
              <p> { value ? convertToIDR(value) : 0 } </p>
            </div>
          </div>
        </div>
        <div className='history'>
          <div className='income'>
            <p className='title'>Income :</p>
            <div className='history'>
              {
                income?.map(item => {
                  return (
                    <div key={item.id}>
                      <IncomeCard data={item} />
                    </div>
                  )
                })
              }
            </div>
            <div className='action'>
              <button className='add-income' onClick={() => changeValue('income')}> Add income </button>
            </div>
          </div>
          <div className='expense'>
            <p className='title'>Expense :</p>
            <div className='history'>
              {
                expense?.map(item => {
                  return (
                    <div key={item.id}>
                      <ExpenseCard data={item} />
                    </div>
                  )
                })
              }
            </div>
            <div className='action'>
              <button className='reminder'>Reminder</button>
              <button className='add-expense' onClick={() => changeValue('expense')}>Add Expense</button>
            </div>
          </div>
        </div>
        <div className='graph'>
          <Line income={income?.reverse()} expense={expense?.reverse()}/>
        </div>
      </div>
    </main>
  )
}

export default Index