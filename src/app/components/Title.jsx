import React from 'react'
import styles from './styles/Title.module.css'

const Title = ({ title, subtitle }) => {
    return (
        <div className={styles.title}>
            <h4>{title}</h4>
            <h2>{subtitle}</h2>
        </div>
    )
}

export default Title