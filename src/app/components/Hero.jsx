import React from 'react'
import styles from './styles/Hero.module.css'

const Hero = ({ title }) => {
    return (
        <section className={styles.hero}>
            <h1>{title}</h1>
        </section>
    )
}

export default Hero