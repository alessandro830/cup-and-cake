import Image from 'next/image'
import styles from './feedbacksCards.module.css'

export function FeedbacksCards() {
    return (
        <div className= { styles.container }>
            <div className={ styles.card }>
                <div>
                </div>
                <p>Simplesmente os melhores cupcakes que já experimentei! A massa é fofinha e o recheio é perfeito.</p>
            </div>
        </div>
    )
}