import React, { useEffect, useState } from 'react'
import './index.css'
import { db } from '../../db'

const Index = (props) => {
  const data = props.data
  const [buttonIsOpen, setButtonIsOpen] = useState(false)
  const [tag, setTag] = useState('')
  const [isReadOnly, setIsReadOnly] = useState(true)

  const convertToIDR = (val) => {
    const format = val.toString().split('').reverse().join('')
    const convert = format.match(/\d{1,3}/g)

    return 'Rp. ' + convert.join(',').split('').reverse().join('')
  }

  const changeVisibilty = () => {
    setButtonIsOpen(true)
    setIsReadOnly(false)
  }

  const saveChange = () => {
    setButtonIsOpen(false)
    try {
      db.expense.update(data.id, {tag})
      setIsReadOnly(true)
    } catch(err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setTag(e.target.value)
  }

  useEffect(() => {
    setTag(data.tag)
  }, [data])

  return (
    <div>
      <div className="card-expense">
        <p className='amount'>{convertToIDR(data.value)}</p>
        <div className="note">
          <p className='note-title'>Note</p>
          {
            buttonIsOpen ? (<button className='save-change' onClick={() => saveChange()}>Save Change</button>) : ''
          }
          <textarea readOnly={isReadOnly} value={tag} onChange={(e) => handleChange(e)} onClick={() => changeVisibilty()}/>
        </div>
        <p className='date'>{data.addDate.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Index