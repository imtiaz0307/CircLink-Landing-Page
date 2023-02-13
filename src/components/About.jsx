import styles from './styles/About.module.css'


const About = ({ about }) => {
    return (
        <section ref={about} className={styles.about}>
            <h2 className='sectionTitle'>About CircLink</h2>
            <h3>What is CircLink? and Why should you use it?</h3>
            <br />
            <br />
            <p>CircLink is a free to use REST API designed to cater to the social media niche. The name CircLink is derived from the words circle and link, reflecting its aim to bring people together and allow them to connect and engage with each other.<br /><br />

                The API provides a range of features to help users manage their profiles and interact with other users on the platform. Users can sign up and log in to their accounts, update their profiles, and delete their profiles if needed. The API also enables users to follow and unfollow other users, giving them the ability to stay up-to-date with the content and updates of the people they are interested in.<br /><br />

                One of the key features of CircLink is the ability for users to post content, including text, images, and videos. Users can create, read, update, and delete their posts, and the API also provides functionality for post likes and unlikes, as well as post comments. The comment functionality includes the ability to add comments to posts, as well as to read, update, and delete comments. Additionally, comments can be liked and unliked, allowing users to show their support or engagement with a particular comment.<br /><br />

                Overall, CircLink is a powerful and user-friendly REST API that provides a comprehensive solution for social media interactions and engagement. Whether you are looking to connect with friends, family, or like-minded individuals, CircLink provides a platform to do so in a simple and efficient manner. So sign up today and start building your social circle!</p>
        </section>
    )
}

export default About