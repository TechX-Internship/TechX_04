import React from 'react'
import styles from './styles/Button.module.css'

const Button = ({ name }) => {

    return (
        <button className={styles.button} >{name} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg> </button>
    )
}

export default Button