import React from 'react'

function Footer() {
    const today = new Date() 
  return (
    <div className='bg-cfbg h-28 text-center'>
        <p className='text-hltText font-bdText pt-3'>Copyright Reserved &copy; {today.getFullYear()}</p>
        <p className='text-hltText font-bdText'>Developed By: <a href='https://github.com/dailydeveloper0' rel="noreferrer" target='_blank'>dailydeveloper0</a></p>
    </div>
  )
}

export default Footer