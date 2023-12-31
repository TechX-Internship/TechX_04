'use client'
import React from 'react'
import styles from './OurGuide.module.css'
import Hero from '../../components/Hero'
import { useParams, usePathname } from 'next/navigation'

const page = () => {
    const { id } = useParams()

    return (
        <>
            <Hero title='Our Guide' />

            <section className={styles.guide}>
                <div className="container">
                    <h2>Excellent Guide</h2>
                    <div className="flex mt-[50px] gap-5">
                        <div className="w-1/2">
                            <div className='relative pr-3'>
                                <img className='w-full' src={`/images/about/guide-${id}.png`} alt="" />
                                <div className='bg-white rounded-full absolute bottom-0 -right-10 p-[10px] translate-y-1/3'>
                                    <img src="/images/guide-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <h3>Guide Tours</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummymy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page