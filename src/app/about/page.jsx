import React from 'react'
import styles from './About.module.css'
import AboutUs from '../components/AboutUs'

const page = () => {
    return (
        <>
            {/* hero start */}
            <section className={styles.hero}>
                <h1>About us</h1>
            </section>
            {/* hero end */}
            <AboutUs />
        </>
    )
}

export default page