import React from 'react'
import styles from './Home.module.css'
import Button from './components/Button'
import AboutUs from './components/AboutUs'
import Title from './components/Title'
import HomeTesti from './components/HomeTesti'
import HomeTrip from './components/HomeTrip'
import Image from 'next/image'

const page = () => {

  const serviceData = [
    {
      img: '/images/home/tour-guide.png',
      title: 'Guided Tours',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......'
    },
    {
      img: '/images/home/travelling.png',
      title: 'Guided Tours',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......'
    },
    {
      img: '/images/home/map.png',
      title: 'Religious Tours',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......'
    },
    {
      img: '/images/home/medical-team.png',
      title: 'Medical insurance',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting niolfjkxoindustry. Lorem......'
    }
  ]

  return (
    <>
      {/* hero start */}
      <section className={styles.hero}>

        <img className='absolute left-5 top-[30%]' src="/images/home/elements/map.png" alt="" />
        <img className='absolute left-16 bottom-[25%]' src="/images/home/elements/compass.png" alt="" />
        <img className='absolute left-[10%] bottom-[20px]' src="/images/home/elements/specs.png" alt="" />
        <img className='absolute left-[43%] top-[10%]' src="/images/home/elements/camera.png" alt="" />
        <img className='absolute right-0 bottom-0' src="/images/home/elements/bag.png" alt="" />
        <img className='absolute right-0 top-1/2' src="/images/home/elements/wp.png" alt="" />

        <div className="container">
          <div className="flex items-center relative z-0">

            <img className='absolute left-[40%] -z-10 top-[10%]' src="/images/home/elements/path.png" alt="" />
            <img className='absolute left-[60%] top-[1.5%]' src="/images/home/elements/plane.png" alt="" />

            <div className="w-1/2">
              <Image alt='hero' src={'/images/home/hero.png'} width={677} height={656} />
            </div>
            <div className="w-1/2">
              <div className="w-full text-center relative">

                <img className='absolute -right-[10%] -top-[30%]' src="/images/home/elements/hat.png"
                  alt="" />

                <p className={styles.subTitle}>BEST TRAVEL AGENCY OF GUJARAT</p>
                <h1>TRAVEL MANDI</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur ac quam in congue. . </p>
                <Button name={'Plan a trip'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero end */}

      <AboutUs />

      {/* service start */}
      <section className='py-[100px]'>
        <div className="container">
          <Title title='We Offer Best Services' subtitle='CATEGORY' />
          <div className={`flex gap-7`}>
            {
              serviceData.map((item, i) =>
                <div key={i} className={`w-1/4 ${styles.category} text-center`}>
                  <img src={item.img} className='mx-auto mb-5' alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.des}</p>
                  <button>Read More</button>
                </div>
              )
            }
          </div>
        </div>
      </section>
      {/* service end */}

      {/* choose start */}
      <section className={styles.choose}>
        <div className="container">
          <div className='absolute bottom-0 translate-y-[114px]'>
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
      <HomeTrip />
      {/* plan end */}

      <HomeTesti />

      {/* gallery start */}
      <section className={`${styles.gallery} py-[100px]`}>
        <Title subtitle='GALLERY' title='memories We Collect' />
        <div className="container">
          <p className='text-center w-2/3 mx-auto' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>


          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row md:gap-2.5 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[33%] md:w-full">
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
                  <img
                    className="h-[227px] md:h-auto object-cover rounded-[5px] w-full"
                    src="/images/gallery/gallery-1.png"
                    alt="rectangle19332"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
                    <img
                      className="h-[441px] md:h-auto object-cover rounded-[5px] w-full"
                      src="/images/gallery/gallery-2.png"
                      alt="rectangle19333"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[33%] md:w-full">
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
                  <img
                    className="h-[441px] md:h-auto object-cover rounded-[5px] w-full"
                    src="/images/gallery/gallery-3.png"
                    alt="rectangle19336"
                  />
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
                  <img
                    className="h-[227px] md:h-auto object-cover rounded-[5px] w-full"
                    src="/images/gallery/gallery-4.png"
                    alt="rectangle19337"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[33%] md:w-full">
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
                  <img
                    className="h-[227px] md:h-auto object-cover rounded-[5px] w-full"
                    src="/images/gallery/gallery-6.png"
                    alt="rectangle19341"
                  />
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
                  <img
                    className="h-[441px] md:h-auto object-cover rounded-[5px] w-full"
                    src="/images/gallery/gallery-5.png"
                    alt="rectangle19340"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`flex mt-[100px] ${styles.resale}`}>
            <div className="w-1/2">
              <h2>This Is How Resale Works</h2>
              <div className='flex mb-5'>
                <img src="/images/resale-1.png" alt="" />
                <div className='ml-5'>
                  <h4>Reach out to FSB</h4>
                  <p>To sell your booking, you can contact FSB through WhatsApp or cal</p>
                </div>
              </div>
              <div className='flex mb-5'>
                <img src="/images/resale-2.png" alt="" />
                <div className='ml-5'>
                  <h4>We Find Buyer</h4>
                  <p>A traveller gets lucky and buys your deal</p>
                </div>
              </div>
              <div className='flex mb-5'>
                <img src="/images/resale-3.png" alt="" />
                <div className='ml-5'>
                  <h4>You Get Paid</h4>
                  <p>The buyer pays for your booking and enjoys a great stay</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img src="/images/gallery/gallery-bg.jpg" alt="" />
            </div>
          </div>

        </div>
      </section>
      {/* gallery end */}

      {/* endbanner start */}
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
      {/* endbanner end */}
    </>
  )
}

export default page