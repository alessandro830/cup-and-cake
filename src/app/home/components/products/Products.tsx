'use client'

import styles from './product.module.css'
import { SliderCards } from './components/sliderCards/SliderCards'

export function Products() {
    return (
        <section className={ styles.section } id="products">
            <div className={ styles.container }>
                <div className={ styles.sectionHeader }>
                    <h2 className={ styles.title }>NOSSOS PRODUTOS</h2>
                    <p className={ styles.description }>Conheça nossas opções de gostosuras.</p>
                    <button className={ styles.addButton }>+</button>
                </div>
                <SliderCards />
            </div>
        </section>
    )
}