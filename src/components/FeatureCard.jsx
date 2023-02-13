import styles from './styles/Features.module.css'

const FeatureCard = ({ title, description, image }) => {
    return (
        <div className={styles.feature}>
            <div className={styles.featureLeft}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.featureRight}>
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default FeatureCard