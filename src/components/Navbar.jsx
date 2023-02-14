import React, { useEffect, useState } from 'react'
import styles from './styles/Navbar.module.css'


const Navbar = ({ hero, feature, about, contact }) => {
    const scrollToSection = (section) => section.scrollIntoView()
    const [sticky, setSticky] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

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
            <div className={styles.hamburger} onClick={() => setShowMenu(!showMenu)}>
                <div className={styles.line} style={{ transform: `translateY(${showMenu ? "3px" : 0}) rotate(${showMenu ? '45deg' : '0deg'})` }}></div>
                <div className={styles.line} style={{ display: showMenu ? 'none' : 'block' }}></div>
                <div className={styles.line} style={{ transform: `translateY(${showMenu ? "-4px" : 0}) rotate(${showMenu ? '-45deg' : '0deg'})` }}></div>
            </div>
            <ul className={`${styles.mainMenu} ${showMenu && styles.showMenu}`}>

                <li><a href='#' onClick={() => setShowMenu(!showMenu)}>Home</a></li>

                <li onClick={() => {
                    setShowMenu(!showMenu)
                    scrollToSection(feature.current)
                }}>Features</li>

                <li onClick={() => {
                    setShowMenu(!showMenu)
                    scrollToSection(about.current)
                }}>About</li>
                <li onClick={() => {
                    setShowMenu(!showMenu)
                    scrollToSection(contact.current)
                }}>Contact Us</li>
                <li><a target="_blank" href='https://circlink.up.railway.app/'>Go To Api &rarr;</a></li>
            </ul>
        </nav>
    )
}

export default Navbar