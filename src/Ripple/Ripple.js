import React from 'react'
import styles from './styles.css'

const Ripple = props => (
    <>
        <style>${`${styles}`}</style>
        <div className="lds-css ng-scope">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    </>
)

export default Ripple;