import React from 'react'

const Footer = () => (
  <footer className='footer g margin-top-1'>
    <div className=' footer-location intro-p flex-r width-sm'>
      <div className='width-sm flex-r'>
        <div className='flex-r width-fit'>
            <svg className='fill-w location-icon' version="1.1" xmlns="http://www.w3.org/2000/svg"width="32" height="32" viewBox="0 0 32 32">
              <title>location</title>
              <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
            </svg>
          <div className='flex-c'>
            <p className='no-m font-sm'>124 South 600 East, Suite 200</p>
            <p className='no-m font-sm'>Salt Lake City, Utah 84102</p>
          </div>
        </div>
        <div className='flex-r width-fit'>
          <svg className='fill-w phone-icon'version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <title>phone</title>
            <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
          </svg>
          <p className='no-m font-sm'>801-505-3696</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer