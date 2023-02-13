import React from 'react'
import styles from './styles/Hero.module.css'

const Hero = ({ hero, features }) => {
    return (
        <section className={styles.hero} ref={hero}>
            <div className={styles.heroLeft}>
                <h3>A Free Social Media Api</h3>
                <h1>CircLink</h1>
                <p>Connect with the world like never before with CircLink, the ultimate social media API. Experience seamless integration with multiple platforms and unleash the power of social media with ease. Join the revolution today and take your online presence to the next level with CircLink.</p>
                <div className={styles.buttons}>
                    <button onClick={() => features.current.scrollIntoView()}>Features</button>
                    <button><a target="_blank" href="https://circlink.up.railway.app/">Try Now &rarr;</a></button>
                </div>
            </div>
            <div className={styles.heroRight}>
                <img src="/hero.jpg" alt="Social Media Api" />
            </div>
        </section>
    )
}

export default Hero