import React,{ useEffect} from 'react'
import './contactus.css'

import Aos from 'aos'
import "aos/dist/aos.css"

function ContactUs() {

  useEffect(() => {
    Aos.init({duration: 2000})
 
 }, []);
  return (
    <>
   
         <section className="cta">
         <div className='container'>
         <div className="row">
            <div className="cta-content">
                <div data-aos="fade-right" className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                        Mas información?
                        <br />
                        No hay problema...
                    </h2>
                    <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="#contact" title='Contact'>Contáctanos</a>
                </div>
            </div>
            </div>
            </div>
        </section>
       
    </>
  )
}

export default ContactUs