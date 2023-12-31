import React from 'react'
import styles from './About.module.css'
import AboutUs from '../components/AboutUs'
import Title from '../components/Title'
import Button from '../components/Button'
import Hero from '../components/Hero'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <Hero title='About us' />
            <AboutUs />

            <section className={styles.about} >
                <div className="container">
                    <div className="flex gap-[50px] mb-[80px]">
                        <div className="w-1/2">
                            <img src="/images/about/about-1.png" alt="" />
                        </div>
                        <div className="w-1/2">
                            <h2 className='flex gap-2.5 items-center'>
                                <img src="/images/about/eye.svg" alt="" />
                                Our Vision</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. to will to Lorem Ipsum has been the industry's standard dummy text ever since the will see to 1500s, when an unknown printer took a galley of type and scrambled it to see can you make a type specimen book.</p>
                            <p>It has survived not only five centuries, but alsothe leap into electronic type can will remaining essentially unchanged. It was popularised in the 1960s with the will been to release of Letraset sheets containing Lorem Ipsum passages.</p>
                        </div>
                    </div>
                    <div className="flex gap-[50px]">
                        <div className="w-1/2">
                            <h2 className='flex gap-2.5 items-center'>
                                <img src="/images/about/goal.svg" alt="" />
                                Our Mission</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. to will to Lorem Ipsum has been the industry's standard dummy text ever since the will see to 1500s, when an unknown printer took a galley of type and scrambled it to see can you make a type specimen book.</p>
                            <p>It has survived not only five centuries, but alsothe leap into electronic type can will remaining essentially unchanged. It was popularised in the 1960s with the will been to release of Letraset sheets containing Lorem Ipsum passages.</p>
                        </div>
                        <div className="w-1/2">
                            <img src="/images/about/about-2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.agency}>
                <div className=' relative' >
                    <div className='absolute top-0 right-0 mix-blend-color-dodge'>
                        <img src="/images/home/vector.png" alt="" />
                    </div>
                </div>
                <div className="container pt-20 pb-52">
                    <div className="text-center">
                        <Title isWhite={true} title='We are professional planners for your Vacations' subtitle='Best Travel Agency' />
                        <p className='mx-auto w-2/3 pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's  galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <img src="/images/about/agency.png" className="absolute w-1/2 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" alt="" />
                </div>
            </section>

            <section className={styles.guide} >
                <div className="container">
                    <div className="text-center">
                        <Title title='Meet With Professional Guide' subtitle='Our Guide' />
                        <p className='mx-auto w-2/3 pb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                    </div>

                    <div className="flex gap-[30px]">
                        <div className="w-1/3 relative">
                            <img src="/images/about/guide-1.png" alt="" />
                            <Link href='/our-guide/1' className={styles.guide_card}>
                                <h3 className='w-full'>Ivan Cairns
                                    <span className='float-end pt-1.5 pl-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </h3>
                                <span>Guide</span>
                            </Link>
                        </div>
                        <div className="w-1/3 relative">
                            <img src="/images/about/guide-2.png" alt="" />
                            <Link href='/our-guide/2' className={styles.guide_card}>
                                <h3 className='w-full'>Ivan Cairns
                                    <span className='float-end pt-1.5 pl-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </h3>
                                <span>Guide</span>
                            </Link>
                        </div>
                        <div className="w-1/3 relative">
                            <img src="/images/about/guide-3.png" alt="" />
                            <Link href='/our-guide/3' className={styles.guide_card}>
                                <h3 className='w-full'>Ivan Cairns
                                    <span className='float-end pt-1.5 pl-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </h3>
                                <span>Guide</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>

            <section className={styles.sub_banner}>
                <div className="container">
                    <h2>Start Planning Your Trip Now and</h2>
                    <h2>Get 30% Discount</h2>
                    <p className='w-2/5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's  galley of type and scrambled it to make a type specimen book.</p>
                    <Button name='Book A Trip' />
                </div>
            </section>
        </>
    )
}

export default page