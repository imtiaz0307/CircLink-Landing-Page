import { featureItems } from '../data/FeatureItems'
import FeatureCard from './FeatureCard'
import styles from './styles/Features.module.css'


const Features = ({ features }) => {
    return (
        <section ref={features} className={styles.features}>
            <h2 className='sectionTitle'>CircLink Features</h2>
            {
                featureItems.map((featureItem, index) => {
                    return <FeatureCard key={index} title={featureItem.title} description={featureItem.description} image={featureItem.img} />
                })
            }
        </section>
    )
}

export default Features