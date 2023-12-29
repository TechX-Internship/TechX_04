import React from 'react'
import styles from './Home.module.css'
import Button from './components/Button'
import AboutUs from './components/AboutUs'
import Title from './components/Title'

const page = () => {
  return (
    <>
      {/* hero start */}
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
      {/* hero end */}

      <AboutUs />

      <section className='py-[100px]'>
        <div className="container">
          <Title title='We Offer Best Services' subtitle='CATEGORY' />
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

      {/* choose start */}
      <section className={styles.choose}>
        <div className="container">
          <div className='absolute bottom-0 translate-y-[113px]'>
            <div className="flex gap-5">
              <div className={styles.card}>
                <div className={styles.gradient}>
                  <h3>20+</h3>
                </div>
                <p>Corporates trust us</p>
              </div>
              <div className={styles.card}>
                <div className={styles.gradient}>
                  <h3>1,000+</h3>
                </div>
                <p>Hotels and Flights</p>
              </div>
              <div className={styles.card}>
                <div className={styles.gradient}>
                  <h3>24 X 7</h3>
                </div>
                <p>Customer support</p>
              </div>
            </div>
          </div>
        </div>
        <div className='overflow-hidden relative' >
          <div className='absolute top-0 right-0 translate-x-16 -translate-y-[100px] mix-blend-color-dodge'>
            <img src="/images/home/vector.png" alt="" />
          </div>
          <div className="container flex py-14 items-center">
            <div className="w-1/2">
              <h2>Why Choose Travel Mandi</h2>
              <p>Travel Mandi is the first and the only platform of its kind. It is a safe marketplace for travellers who don’t want to pay for changing their plans. Not only do we have amazing deals on resale but also a vast network of hotels, airlines and agents to get the best and still the lowest priced travel bookings for you.</p>
              <p>From a comfortable flight and stay to visa and forex, we can help you with everything you need for a memorable trip.</p>
              <Button name='Explore More' />
            </div>
            <div className="w-1/2">
              <img src="/images/home/choose-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* choose end */}

      {/* plan start */}
      <section className='pt-52 pb-24'>
        <Title title='Plan Your Trip' subtitle='Make Your Holiday Amazing' />
        <div className="container mt-24">
        </div>
      </section>
      {/* plan end */}

      <section className={`bg-[#DB2319] ${styles.endBanner}`}>
        <div className="w-2/5 mx-auto text-center">
          <h2>Get In Touch With Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. </p>
          <button className='' >Get A Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="#DB2319" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </section >
    </>
  )
}

export default page