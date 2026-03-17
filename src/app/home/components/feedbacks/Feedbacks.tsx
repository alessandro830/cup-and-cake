import styles from './feedbacks.module.css'
import { FeedbacksCards } from './components/FeedbacksCards'

export function Feedbacks() {
    return (
        <section id="feedbacks">
            <div className={ styles.container }>
            <div className={ styles.sectionHeader }>
                <h2 className={ styles.title }>DEPOIMENTOS</h2>
                <p className={ styles.description }>Feedbacks de alguns clientes.</p>
                <button className={ styles.addButton }>+</button>
            </div>
            <FeedbacksCards />
        </div>
        </section>
    )
}