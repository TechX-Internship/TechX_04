import Link from 'next/link'
import React from 'react'
import styles from './styles/Header.module.css'
import Image from 'next/image'
import Button from './Button'

const Header = () => {
    return (
        <header>
            <div className="container flex items-center justify-between">
                <div className={styles.logo}>
                    <Image alt='logo' src={'/images/logo.png'} width={166} height={80} />
                    {/* <img alt='logo' src={'/images/logo.png'} width={166} height={80} /> */}
                </div>
                <div>
                    <ul className={styles.menu}>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About us</Link></li>
                        <li><Link href={'/plan-your-trip'}>Plan your Trip</Link></li>
                        <li><Link href={'/services'}>Services</Link></li>
                        <li><Link href={'/reviews'}>Reviews</Link></li>
                        <li><Link href={'/contact'}>Contact Us</Link></li>
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