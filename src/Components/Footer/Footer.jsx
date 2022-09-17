import React from 'react'
import './footer.css'
import {BiCopyright} from 'react-icons/bi'


const Footer = () => {
    return (
        <section className='footer'>
            <span><BiCopyright className='icon'/> Copyright | 2022 - 
            Victor Moura Dev </span>
        </section>
    )
}

export default Footer