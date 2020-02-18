import React from 'react'
import { NavLink, } from 'react-router-dom'
import diana from '../images/Diana-bw.jpg'

const Home = () => (
  <main>
  <div className='main-home-container flex-c'>
    <h1>City Creek Counseling</h1>
    <div className='intro-p flex-c g padding'>
      {/* <div className='heading-width'>
        <h2>Welcome</h2>
      </div> */}
      <div className='p-container flex-c p-border'>
        <p className='ph-1'>City Creek Counseling | Salt Lake City, Utah
        </p>
        <p className='ph-1 ph-2'>
          Where our soul purpose is to help you live true.
        </p>
        <p className='ph-1'>
          Living True™ to live your life every day in a way that is truly, uniquely YOU. Your life is waiting for you.
        </p>
      </div>
    </div>
    <div className='welcome-container flex-c gray'>
      <div className='heading-width h-margin'>
        <h2 className='who-header'>Who I am</h2>
      </div>
      <div className='flex-r width-90'>
        <div className='hello-container flex-c'>
          <h3 className='b2'>Hello, I'm Diana Thomas, M.Ed., CMHC</h3>
          <div className='p-container flex-c'>
            <div className='intro-p flex-c'>
              <p className='ph-1 l'>
                With over 17 years of expereince, I have a strong background in the following areas: Life transitions, trauma (including EMDR), and grief and loss of all kinds.
              </p>
              <p className='ph-1 l'>
                The theme of my practice is "Living True." I enjoy working with individuals who desire to live true to themselves, even during challenging times and even when others might not approve. My approach is an open exploration of the ways in which internal and external pressures cause us to lose sight of who we really are and what really matters. I see over and over again that times of struggle offer rich opportunities for inner realizations and growth. Influences on my work include mindfulness, contemplative psychology, Buddhism, feminism, and Jungian philosophy.
              </p>
              <p className='ph-1 l'>
                My private office is located on a beautiful, tree-lined street near downtown Salt Lake City and the University of Utah. It offers a safe, serene environment for deep exploration of yourself and your life.
              </p>
            </div>
          </div>
        </div>
        <div className='image-container flex-c'>
          <img className='diana-img'src={diana} alt='diana thomas'/>
          <button className='learn-btn g2 g2-btn'>
            <NavLink
              exact
              to='/about'
            >
              Learn More About Me
            </NavLink>
          </button>
        </div>
      </div>
    </div>

    <div className='main-contact-container flex-c'>
      <div className='heading-width'>
        <h2 className='in-touch-header'>Get in Touch</h2>
      </div>
      <div className=' contact-container flex-r flex-l width-sm'>
          <div className='intro-p flex-c flex-l'>
            <div className='contact flex-l flex-r'>
              <div className='contact-meta flex-c flex-l margin-top-1'>
                <div className='flex-r'>
                  <svg className='fill-w phone-icon'version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <title>phone</title>
                    <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                  </svg>
                  <p>801-505-3696</p>
                </div>
                <div className='flex-r'>
                  <svg className='fill-w mail-icon' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>envelope</title>
                    <path d="M16.015 18.861l-4.072-3.343-8.862 10.463h25.876l-8.863-10.567-4.079 3.447zM29.926 6.019h-27.815l13.908 11.698 13.907-11.698zM20.705 14.887l9.291 11.084v-18.952l-9.291 7.868zM2.004 7.019v18.952l9.291-11.084-9.291-7.868z"></path>
                  </svg>
                  <p>diana@citycreekcounseling.com</p>  
              </div>
              </div> 
              <button className='contact-btn b b-btn'>
                <a href="mailto:diana@citycreekcounseling.com?Subject=Consultation Inquiry" target="_top">Contact</a>
              </button>
            </div>             
            <div className='flex-l margin-top-1'>
              <div className='flex-r'>
                <svg className='fill-w location-icon' version="1.1" xmlns="http://www.w3.org/2000/svg"width="32" height="32" viewBox="0 0 32 32">
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
</main>
)

export default Home;