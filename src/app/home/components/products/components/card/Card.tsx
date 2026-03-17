import styles from './card.module.css'
import Image from 'next/image'

export function Card() {
    return ( 
        <div className={ styles.card }>
            <div className={ styles.imageBox }>
                <Image
                    src='/images/image.png'
                    width={ 240 }
                    height={ 240 }
                    alt='Picture of the Cupcake'
                />
                <button className={ styles.deleteButton }>-</button>
            </div>
            <p className={ styles.productName }>Cupcake Chocomenta</p>
            <button className={ styles.buyButton }>R$<span className={ styles.largerText }>5,00</span>/un</button>
        </div>
    )
}