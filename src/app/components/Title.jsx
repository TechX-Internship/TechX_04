import React from 'react'
import styles from './styles/Title.module.css'

const Title = ({ title, subtitle, isWhite }) => {
    return (
        <div className={styles.title}>
            <h4>{subtitle}</h4>
            <h2 style={{ color: isWhite ? '#fff' : '' }}>{title}</h2>
        </div>
    )
}

export default Title