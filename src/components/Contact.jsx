import React, { useRef, useState } from 'react'
import styles from './styles/Contact.module.css'


const Contact = ({ contact }) => {
    const [emailSuccessful, setEmailSuccessful] = useState(false)
    const [emailUnsuccessful, setEmailUnsuccessful] = useState(false)
    const userName = useRef()
    const userEmail = useRef()
    const message = useRef()

    return (
        <section className={styles.contactSection} ref={contact}>
            <h2 className='sectionTitle'>Contact Us</h2>
            <br /> <br />
            <form className={styles.contactForm} >
                <div className={styles.name}>
                    <label htmlFor="name">Enter Your Name</label>
                    <input ref={userName} type="text" name='user_name' id='name' placeholder='Ex: John Doe' required minLength={5} />
                </div>
                <div className={styles.email}>
                    <label htmlFor="email">Enter Your Email</label>
                    <input ref={userEmail} type="email" name='user_email' id='email' placeholder='Ex: abc@xyz.com' required />
                </div>
                <div className={styles.message}>
                    <label htmlFor="message">Enter Your Message</label>
                    <textarea ref={message} name='message' id="message" placeholder='Hello World!' required minLength={20}></textarea>
                </div>
                <div className={styles.submit}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
            {
                emailSuccessful && <div className={styles.emailSuccess}>
                    <h1>Email Sent Successfully!😃</h1>
                </div>
            }
            {
                emailUnsuccessful && <div className={styles.emailError}>
                    <h1>Something Went Wrong.😟</h1>
                </div>
            }
        </section>
    )
}

export default Contact