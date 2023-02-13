import React, { useEffect, useState } from 'react'
import styles from './styles/Navbar.module.css'


const Navbar = ({ hero, feature, about, contact }) => {
    const scrollToSection = (section) => section.scrollIntoView()
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entires) => setSticky(!entires[0].isIntersecting),
            {
                threshold: 0,
                rootMargin: `-80px`
            })
        observer.observe(hero.current)
    }, [])


    return (
        <nav className={`${styles.nav} ${sticky && styles.stickyNav}`}>
            <p className={styles.logo}>
                <a href='#'>CircLink</a>
            </p>
            <ul className={styles.mainMenu}>
                <li><a href='#'>Home</a></li>
                <li onClick={() => scrollToSection(feature.current)}>Features</li>
                <li onClick={() => scrollToSection(about.current)}>About</li>
                <li onClick={() => scrollToSection(contact.current)}>Contact Us</li>
                <li><a target="_blank" href='https://circlink.up.railway.app/'>Go To Api &rarr;</a></li>
            </ul>
        </nav>
    )
}

export default Navbar