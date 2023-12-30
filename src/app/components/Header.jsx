'use client'
import Link from 'next/link'
import React from 'react'
import styles from './styles/Header.module.css'
import Image from 'next/image'
import Button from './Button'
import { usePathname } from 'next/navigation'

const Header = () => {

    const pathname = usePathname()

    return (
        <header className='bg-white'>
            <div className="container flex items-center justify-between">
                <div className={styles.logo}>
                    <Image alt='logo' src={'/images/logo.png'} width={166} height={80} />
                    {/* <img alt='logo' src={'/images/logo.png'} width={166} height={80} /> */}
                </div>
                <div>
                    <ul className={styles.menu}>
                        <li><Link className={pathname === '/' ? 'text-[#20277C]' : ''} href={'/'}>Home</Link></li>
                        <li><Link className={pathname === '/about' ? 'text-[#20277C]' : ''} href={'/about'}>About us</Link></li>
                        <li><Link className={pathname === '/plan-your-trip' ? 'text-[#20277C]' : ''} href={'/plan-your-trip'}>Plan your Trip</Link></li>
                        <li><Link className={pathname === '/services' ? 'text-[#20277C]' : ''} href={'/services'}>Services</Link></li>
                        <li><Link className={pathname === '/reviews' ? 'text-[#20277C]' : ''} href={'/reviews'}>Reviews</Link></li>
                        <li><Link className={pathname === '/contact' ? 'text-[#20277C]' : ''} href={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <Button name={'Get a Quote'} />
                </div>
            </div>
        </header>
    )
}

export default Header