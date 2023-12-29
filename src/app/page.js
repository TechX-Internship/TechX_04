import React from 'react'
import styles from './Home.module.css'
import Button from './components/Button'
import AboutUs from './components/AboutUs'
import Title from './components/Title'

const page = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="flex items-center">
            <div className="w-1/2">
              {/* <Image alt='hero' src={'/images/home/hero.png'} width={677} height={656} /> */}
              <img src="/images/home/hero.png" alt="hero" width={'100%'} />
            </div>
            <div className="w-1/2">
              <div className="w-fit ml-auto text-center">
                <p className={styles.subTitle}>BEST TRAVEL AGENCY OF GUJARAT</p>
                <h1>TRAVEL MANDI</h1>
                <div className="w-[585px] mx-[47px] text-center">
                  <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur ac quam in congue. . </p>
                  <Button name={'Plan a trip'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />

      <section className='py-[100px]'>
        <div className="container">
          <Title />
          <div className={`flex gap-7`}>
            <div className={`w-1/4 ${styles.category} text-center`}>
              <img src="/images/home/tour-guide.png" className='mx-auto mb-5' alt="" />
              <h3>Guided Tours</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......  </p>
              <button>Read More</button>
            </div>
            <div className={`w-1/4 ${styles.category} text-center`}>
              <img src="/images/home/travelling.png" className='mx-auto mb-5' alt="" />
              <h3>Guided Tours</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......  </p>
              <button>Read More</button>
            </div>
            <div className={`w-1/4 ${styles.category} text-center`}>
              <img src="/images/home/map.png" className='mx-auto mb-5' alt="" />
              <h3>Religious Tours</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......  </p>
              <button>Read More</button>
            </div>
            <div className={`w-1/4 ${styles.category} text-center`}>
              <img src="/images/home/medical-team.png" className='mx-auto mb-5' alt="" />
              <h3>Medical insurance</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......  </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-[#DB2319] ${styles.endBanner}`}>
        <div className="w-2/5 mx-auto text-center">
          <h2>Get In Touch With Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. </p>
          <button className='' >Get A Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="#DB2319" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section >
    </>
  )
}

export default page