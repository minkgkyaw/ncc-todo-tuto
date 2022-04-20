import React from 'react'
import moment from 'moment'

const Footer = () => {
  return (
    <div className='py-3 text-center text-gray-400'>
      <p> &copy; {moment().format('yyyy')}, All rights reserved.</p>
    </div>
  )
}

export default Footer