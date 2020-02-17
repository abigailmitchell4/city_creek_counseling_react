import React from 'react'
import { NavLink, } from 'react-router-dom'
import Footer from './Footer'
import diana from '../images/Diana-bw.jpg'

const About = () => {
  return (
    <>
      <div className='flex-c h-margin gray margin-bot'>
        <div className='heading-width'>
          <h2 className='lg-margin'>About Me</h2>
        </div>
        <div className='flex-c width-sm p-container'>
          <div className='intro-p flex-c'>
            <p className='ph-1 l'>
              I was born in Stillwater, Minnesota, and pretty much did my life backwards.  I was the oldest daughter in a family with lots of kids, so I was changing diapers when I was barely out of them myself.  I got married and had two children while I was very young.
            </p>
          </div>  
          <div className='flex-r'>
            <div className='intro-p flex-c'>
              <p className='ph-1 l'>
                Later I went back for my formal education.  When I finished my B.A. in communication at the University of Utah, my children were teenagers.  More than a decade later, on the day I graduated with my M.Ed. in counseling psychology, my daughter graduated with her education degree.
              </p>
            </div>
            <div className='image-container-sm flex-c'>
              <img className='diana-img'src={diana} alt='diana thomas'/>
            </div>
          </div>
          <div className='intro-p flex-c'>
            <p className='ph-1 l'>
                While raising my kids I had wonderful jobs in journalism and health care, ran a couple marathons, played lots of racquetball, left my parents’ church, left my first marriage, married again and gained a stepson, adopted two dogs, and—all along the way—searched for ways to live my life that felt like ME.
            </p>
            <p className='ph-1 l'>
              So it’s fair to say the theme of my counseling practice, Living True™, has grown out of my own journey.  It is no accident that I enjoy working with individuals who are on a similar path—wanting to live the truth of who they are, even during challenging times and even when others might not approve.
            </p>
            <p className='ph-1 l'>
              Starting with my graduate internship, I worked at the Rape Recovery Center for eight years, strengthening my background in trauma, grief & loss, and life transitions.  I certified in Eye Movement Desensitization Reprocessing (EMDR), and also in The Work of Byron Katie. I am currently studying in Brene’ Brown’s program, The Daring Way, which stems from her research on shame and vulnerability (things that can stop us from living true).
            </p>
            <div className='b2 flex-l'>
              <p className='ph-1 l'>
                  Other influential teachers and philosophies have been:
              </p>
            </div>
            <div className='flex-l'>
              <ul className='influence-list'>
                <li>Feminist-multicultural theory</li>
                <li>Buddhist philosophies</li>
                <li>Mindfulness and meditation</li>
                <li>Adyashanti, spiritual teacher</li>
                <li>Marion Woodman, Jungian analyst</li>
                <li>Acceptance & Commitment Therapy (ACT)</li>
                <li>Kelly Rae Roberts, artist</li>
              </ul>
            </div>
            <div className='flex-l'>
              <p>
                Please visit the
                <span>
                <NavLink 
                  exact 
                  to='/inspirations'
                  className='b2 insp-span'
                >
                  Inspirations
                </NavLink> 
                </span>
                 section of this website for more about these and other things that inspire me.
              </p>
             </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default About