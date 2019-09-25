import React from 'react'
import styles from './styles.css'

const Rolling = props => (
    <>
        <style>${`${styles}`}</style>
        <div className="lds-css ng-scope"><div className="lds-rolling"><div></div></div>
        </div>
    </>
)

export default Rolling;