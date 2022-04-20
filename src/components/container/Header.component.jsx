import React from 'react'
import moment from 'moment'
import Avatar from '../../svg/avatar.svg'
import List_Logo from '../../svg/list.svg'

const Header = () => {
  return (
    <div className="Header">
      <div className="Sub-header-group">
        <div className="Logo w-12 h-12">
          <img className='w-full h-full' src={List_Logo} alt="" />
        </div>
        <p className="Sub-Title">
      {moment().format('DD-MMM-YY')}
      </p>
      </div>
      <p className='Title'>NCC/Todo App</p>
      <div className="Sub-header-group ">
        <div className="avatar w-9 h-9 bg-gray-400 rounded-full">
          <img className='w-full h-full' src={Avatar} alt="" />
        </div>
        <p className="Sub-Title">Min Kg Kyaw</p>
      </div>
    </div>
  )
}

export default Header