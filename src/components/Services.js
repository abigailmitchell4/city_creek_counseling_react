import React from 'react'
import Footer from './Footer'

const Services = () => {
  return (
    <>
      <div className='flex-c h-margin gray margin-bot'>
        <div className='heading-width'>
          <h2 className='lg-margin'>Individual Work</h2>
        </div>
        <div className='flex-c width-sm p-container'>
          <div className='intro-p flex-c'>
            <p className='ph-1 l'>
              Working one-on-one with a counselor can be life-changing for you.  It can help you:
            </p>
            <div className='flex-l'>
              <ul className='meta-list'>
                <li>Understand yourself and others</li>
                <li>Improve your relationships</li>
                <li>Process unresolved trauma or pain</li>
                <li>Increase your sense of purpose</li>
                <li>Clarify your intentions</li>
                <li>Uncover your truth</li>
                <li>Discover your strengths</li>
                <li>Trust your inner wisdom</li>
              </ul>
            </div>
          </div>
            <div className='intro-p flex-c'>
              <p className='ph-1 l'>
                My goal in our sessions is to help you hear and see yourself and your situation more clearly.  I don’t have your answers, but I can help you look at the questions in new ways and find the answers that already live in you.  Together we can reduce the internal noise, pain, or confusion that stop you from showing up wholeheartedly in your life.
              </p>
              <p className='ph-1 l'>
                I invite you to schedule an initial 30 minute consultation, so we can meet each other and decide if we are a good match for working together.  Then, if you’re not sure, I will encourage you to keep exploring your options.  If I know a colleague who might be a better fit, I won’t hesitate to refer you to them.  The point is to find the best fit for YOU.
              </p>
            </div>
          </div>

        <div className='heading-width'>
          <h2 className='lg-margin'>Couples Work</h2>
        </div>
        <div className='flex-c width-sm p-container'>
          <div className='intro-p flex-c'>
            <p className='ph-1 l'>
            Relationships are often where the “rubber meets the road.”  It’s one thing to find and live your own truth — but what do you do when your truth and someone else’s appear to clash?
            </p>
            <p className='ph-1 l'>
              Your partner in counseling may be a significant other, spouse, parent, adult child, friend, or sibling. Anytime a relationship is causing distress, it can be useful to work through it with the help of a counselor.  
            </p>
            <p className='ph-1 l'>
              Together we can bring the issues into the light of day and sort through them. Sometimes the core of the problem needs gentle coaxing to come to the surface. My office is a safe place to put everything on the table and practice telling each other the truth with courage and respect.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services