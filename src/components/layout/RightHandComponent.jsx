import React from 'react'
import './splitScreen.css';
import EmployeeList from '../employee/EmployeeList';

function RightHandComponent({message}) {
  return (
    <div className='background-color-left'>
      <p>hi {message}</p>
      <EmployeeList />
    </div>
  )
}

export default RightHandComponent
