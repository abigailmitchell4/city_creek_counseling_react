import React from 'react'

const Contact = () => (

<div className='main-contact-container flex-c w'>
  <div className='heading-width'>
    <h2 className='lg-margin gray contact-header'>
      Get in Touch
    </h2>
  </div>
  <div className='contact-container flex-r flex-l width-sm'>
      <div className='intro-p flex-c flex-l gray'>
        <p className='p-1 g2'>If you are interested in getting started, let's schedule a consultation. Please reach out through one of the below channels.</p>
      <div className='flex-c'>
        <div className='contact flex-l flex-r'>
          <div className='contact-meta flex-c flex-l margin-top-1'>
            <div className='flex-r'>
                <svg className='g2 phone-icon' version="1.1" xmlns="http://www.w3.org/2000/svg" >
                  <title>phone</title>
                  <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                  </svg>
              <p>801-505-3696</p>
            </div>
            <div className='flex-r'>
                <svg className='g2 mail-icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <title>envelope</title>
                  <path d="M16.015 18.861l-4.072-3.343-8.862 10.463h25.876l-8.863-10.567-4.079 3.447zM29.926 6.019h-27.815l13.908 11.698 13.907-11.698zM20.705 14.887l9.291 11.084v-18.952l-9.291 7.868zM2.004 7.019v18.952l9.291-11.084-9.291-7.868z"></path>
                  </svg>
              <p>diana@citycreekcounseling.com</p>  
            </div>
          </div> 
          <button className='contact-btn g2 g2-btn'>
              <a href="mailto:diana@citycreekcounseling.com?Subject=Consultation Inquiry" target="_top">Contact</a>
            </button>
        </div>             
        <div className='flex-l margin-top-1'>
          <div className='flex-r'>
            <svg className='g2 location-icon' version="1.1" xmlns="http://www.w3.org/2000/svg"width="32" height="32" viewBox="0 0 32 32">
              <title>location</title>
              <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
              </svg>
            <div className='flex-c location'>
              <p>We are located in downtown Salt Lake City</p>
              <p className='no-m'>124 South 600 East, Suite 200</p>
              <p className='no-m'>Salt Lake City, Utah 84102</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default Contact