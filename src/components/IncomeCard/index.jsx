import React from 'react'
import './index.css'

const Index = (props) => {
  const data = props.data

  const convertToIDR = (val) => {
    const format = val.toString().split('').reverse().join('')
    const convert = format.match(/\d{1,3}/g)

    return 'Rp. ' + convert.join(',').split('').reverse().join('')
  }

  return (
    <div>
      <div className="card-income">
        <p className='amount'>{convertToIDR(data.value)}</p>
        <p className='date'>{data.addDate.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Index