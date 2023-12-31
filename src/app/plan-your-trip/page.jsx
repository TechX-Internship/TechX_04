import React from 'react'
import Hero from '../components/Hero'
import styles from './Plan.module.css'

const page = () => {
    return (
        <>
            <Hero title='Plan Your Trip' />

            <section className={styles.plan}>
                <div className="container">
                    <h2>Best Services</h2>
                    <div className="flex mt-[50px] gap-5">
                        <div className="w-1/2">
                            <div className='relative'>
                                <img src="/images/plan-your-trip/plan-1.png" alt="" />
                                <div className='bg-[#F5F5F5] rounded-[20px] absolute bottom-0 right-0 p-[14px] translate-y-1/2'>
                                    <div className="flex gap-[14px]">
                                        <div className="w-1/2">
                                            <img src="/images/plan-your-trip/plan-2.png" alt="" />
                                        </div>
                                        <div className="w-1/2">
                                            <img src="/images/plan-your-trip/plan-3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <h3 className='capitalize'>magical Kingdom Park</h3>
                            <div className='flex mb-5 gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.9078 5.48C15.8438 5.2398 15.7136 4.984 15.6174 4.76C14.4656 1.992 11.949 1 9.91698 1C7.19678 1 4.20078 2.824 3.80078 6.5838V7.352C3.80078 7.384 3.81178 7.672 3.82758 7.816C4.05178 9.6078 5.46558 11.512 6.52158 13.3038C7.65758 15.2236 8.83638 17.112 10.0046 18.9996C10.7246 17.7678 11.4422 16.5198 12.146 15.3198C12.3378 14.9676 12.5602 14.6156 12.7522 14.2796C12.8802 14.0558 13.1246 13.832 13.2364 13.6238C14.3722 11.5444 16.2008 9.448 16.2008 7.384V6.536C16.2008 6.3122 15.9234 5.5282 15.9078 5.48ZM9.96678 9.336C9.16718 9.336 8.29198 8.9362 7.85998 7.832C7.79558 7.6562 7.80078 7.304 7.80078 7.2718V6.7758C7.80078 5.3682 8.99598 4.728 10.0358 4.728C11.3158 4.728 12.306 5.7522 12.306 7.0322C12.306 8.3122 11.2468 9.336 9.96678 9.336Z" fill="#DB2319" />
                            </svg> <span> Orlando, USA </span></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.dream}>
                <div className="container">
                    <h2 className='text-center mb-[15px]'>Let,s Plan The Trip Of Your Dreams</h2>
                    <p className='w-1/2 mx-auto'>
                        There are basically six key areas to higher achievement. Some people will tell you there are four while others may tell you there are eight.
                    </p>

                    <div className="flex mt-[50px]">
                        <div className="flex-1">
                            <img src="/images/plan-your-trip/plan-4.png" className='h-full w-full' alt="" />
                        </div>
                        <div className="flex-1 py-10 bg-[#111827] flex flex-col justify-center items-center">
                            <ul>
                                <li className='pb-5'>
                                    <h5>Statue of Liberty</h5>
                                    <div className='flex mb-5 gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.9078 5.48C15.8438 5.2398 15.7136 4.984 15.6174 4.76C14.4656 1.992 11.949 1 9.91698 1C7.19678 1 4.20078 2.824 3.80078 6.5838V7.352C3.80078 7.384 3.81178 7.672 3.82758 7.816C4.05178 9.6078 5.46558 11.512 6.52158 13.3038C7.65758 15.2236 8.83638 17.112 10.0046 18.9996C10.7246 17.7678 11.4422 16.5198 12.146 15.3198C12.3378 14.9676 12.5602 14.6156 12.7522 14.2796C12.8802 14.0558 13.1246 13.832 13.2364 13.6238C14.3722 11.5444 16.2008 9.448 16.2008 7.384V6.536C16.2008 6.3122 15.9234 5.5282 15.9078 5.48ZM9.96678 9.336C9.16718 9.336 8.29198 8.9362 7.85998 7.832C7.79558 7.6562 7.80078 7.304 7.80078 7.2718V6.7758C7.80078 5.3682 8.99598 4.728 10.0358 4.728C11.3158 4.728 12.306 5.7522 12.306 7.0322C12.306 8.3122 11.2468 9.336 9.96678 9.336Z" fill="#DB2319" />
                                    </svg> <span> New York, USA </span></div>
                                </li>
                                <li className='pb-5'>
                                    <h5>magical Kingdom Park</h5>
                                    <div className='flex mb-5 gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.9078 5.48C15.8438 5.2398 15.7136 4.984 15.6174 4.76C14.4656 1.992 11.949 1 9.91698 1C7.19678 1 4.20078 2.824 3.80078 6.5838V7.352C3.80078 7.384 3.81178 7.672 3.82758 7.816C4.05178 9.6078 5.46558 11.512 6.52158 13.3038C7.65758 15.2236 8.83638 17.112 10.0046 18.9996C10.7246 17.7678 11.4422 16.5198 12.146 15.3198C12.3378 14.9676 12.5602 14.6156 12.7522 14.2796C12.8802 14.0558 13.1246 13.832 13.2364 13.6238C14.3722 11.5444 16.2008 9.448 16.2008 7.384V6.536C16.2008 6.3122 15.9234 5.5282 15.9078 5.48ZM9.96678 9.336C9.16718 9.336 8.29198 8.9362 7.85998 7.832C7.79558 7.6562 7.80078 7.304 7.80078 7.2718V6.7758C7.80078 5.3682 8.99598 4.728 10.0358 4.728C11.3158 4.728 12.306 5.7522 12.306 7.0322C12.306 8.3122 11.2468 9.336 9.96678 9.336Z" fill="#DB2319" />
                                    </svg> <span> New York, USA </span></div>
                                </li>
                                <li className='pb-5'>
                                    <h5>CN Tower</h5>
                                    <div className='flex mb-5 gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.9078 5.48C15.8438 5.2398 15.7136 4.984 15.6174 4.76C14.4656 1.992 11.949 1 9.91698 1C7.19678 1 4.20078 2.824 3.80078 6.5838V7.352C3.80078 7.384 3.81178 7.672 3.82758 7.816C4.05178 9.6078 5.46558 11.512 6.52158 13.3038C7.65758 15.2236 8.83638 17.112 10.0046 18.9996C10.7246 17.7678 11.4422 16.5198 12.146 15.3198C12.3378 14.9676 12.5602 14.6156 12.7522 14.2796C12.8802 14.0558 13.1246 13.832 13.2364 13.6238C14.3722 11.5444 16.2008 9.448 16.2008 7.384V6.536C16.2008 6.3122 15.9234 5.5282 15.9078 5.48ZM9.96678 9.336C9.16718 9.336 8.29198 8.9362 7.85998 7.832C7.79558 7.6562 7.80078 7.304 7.80078 7.2718V6.7758C7.80078 5.3682 8.99598 4.728 10.0358 4.728C11.3158 4.728 12.306 5.7522 12.306 7.0322C12.306 8.3122 11.2468 9.336 9.96678 9.336Z" fill="#DB2319" />
                                    </svg> <span> Toronto, Canada </span></div>
                                </li>
                                <li className=''>
                                    <h5>Oia</h5>
                                    <div className='flex mb-5 gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.9078 5.48C15.8438 5.2398 15.7136 4.984 15.6174 4.76C14.4656 1.992 11.949 1 9.91698 1C7.19678 1 4.20078 2.824 3.80078 6.5838V7.352C3.80078 7.384 3.81178 7.672 3.82758 7.816C4.05178 9.6078 5.46558 11.512 6.52158 13.3038C7.65758 15.2236 8.83638 17.112 10.0046 18.9996C10.7246 17.7678 11.4422 16.5198 12.146 15.3198C12.3378 14.9676 12.5602 14.6156 12.7522 14.2796C12.8802 14.0558 13.1246 13.832 13.2364 13.6238C14.3722 11.5444 16.2008 9.448 16.2008 7.384V6.536C16.2008 6.3122 15.9234 5.5282 15.9078 5.48ZM9.96678 9.336C9.16718 9.336 8.29198 8.9362 7.85998 7.832C7.79558 7.6562 7.80078 7.304 7.80078 7.2718V6.7758C7.80078 5.3682 8.99598 4.728 10.0358 4.728C11.3158 4.728 12.306 5.7522 12.306 7.0322C12.306 8.3122 11.2468 9.336 9.96678 9.336Z" fill="#DB2319" />
                                    </svg> <span> Santorini, France </span></div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img src="/images/plan-your-trip/plan-5.png" className='h-full w-full' alt="" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default page