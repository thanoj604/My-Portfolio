import React from 'react'
import Card from '../components/Card';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import TechSection from '../components/TechSection';
import ProjectSection from '../components/ProjectSection';
import AboutMeSection from '../components/AboutMeSection';
import ContactMeSection from '../components/ContactMeSection';

const Page2 = () => {

    gsap.registerPlugin(ScrollTrigger)


    useGSAP(function(){
        gsap.from(".techsec", {
            transform: 'rotateX(-90deg)',
            opacity:0,
            duration:1,
            stagger:1,
            scrollTrigger:{
                trigger:'.techsec',
                // markers:true,
                start:"top 100%",
                end:"top -120%",
                scrub:2
            }

        })
    })


  return (
  <>
  <div id='section2'>
    
        <TechSection />
        <hr />
        <AboutMeSection />
        <hr />
        <ProjectSection />
        <hr />
        <ContactMeSection />

    </div>
    </>
    
  )
}

export default Page2
