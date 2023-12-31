'use client'
import React from 'react'
import Title from './Title'
import Slider from './Slider'
import { SwiperSlide } from 'swiper/react'
import './styles/HomeTrip.css'
import Button from './Button'

const HomeTrip = () => {

    const data = [{
        img: '/images/home/trip-1.png',
        title: 'magical Kingdom Park',
        location: 'Orlando, USA'
    }, {
        img: '/images/home/trip-2.png',
        title: 'Statue of Liberty',
        location: 'Statue of Liberty'
    }, {
        img: '/images/home/trip-3.png',
        title: 'magical Kingdom Park',
        location: 'Paris, France'
    }, {
        img: '/images/home/trip-4.png',
        title: 'CN Tower',
        location: 'Toronto, Canada'
    }, {
        img: '/images/home/trip-5.png',
        title: 'Oia',
        location: 'Santorini, France'
    }]

    return (
        <>
            <section className='pt-52 pb-24'>
                <Title title='Plan Your Trip' subtitle='Make Your Holiday Amazing' />
                <div className='trip'>
                    <div className="container relative">
                        <Slider slidesPerView={4} >
                            {
                                data.map((item, i) =>
                                    <SwiperSlide key={i}>
                                        <div className='text-center w-fit'>
                                            <img src={item.img} alt="" />
                                            <h3 className='mt-[25px]'>{item.title}</h3>
                                            <div className='flex mb-5 gap-[5px] mx-auto w-fit mt-2.5'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M15.9078 5.48C15.8438 5.2398 15.7136 4.984 15.6174 4.76C14.4656 1.992 11.949 1 9.91698 1C7.19678 1 4.20078 2.824 3.80078 6.5838V7.352C3.80078 7.384 3.81178 7.672 3.82758 7.816C4.05178 9.6078 5.46558 11.512 6.52158 13.3038C7.65758 15.2236 8.83638 17.112 10.0046 18.9996C10.7246 17.7678 11.4422 16.5198 12.146 15.3198C12.3378 14.9676 12.5602 14.6156 12.7522 14.2796C12.8802 14.0558 13.1246 13.832 13.2364 13.6238C14.3722 11.5444 16.2008 9.448 16.2008 7.384V6.536C16.2008 6.3122 15.9234 5.5282 15.9078 5.48ZM9.96678 9.336C9.16718 9.336 8.29198 8.9362 7.85998 7.832C7.79558 7.6562 7.80078 7.304 7.80078 7.2718V6.7758C7.80078 5.3682 8.99598 4.728 10.0358 4.728C11.3158 4.728 12.306 5.7522 12.306 7.0322C12.306 8.3122 11.2468 9.336 9.96678 9.336Z" fill="#DB2319" />
                                            </svg> <span> {item.location} </span></div>
                                            <Button name={'Explore'} />
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Slider>
                    </div>
                </div>
            </section >
        </>
    )
}

export default HomeTrip