'use cliente'

import styles from './sliderCards.module.css'
import Image from 'next/image'
import { Card } from '../card/Card'

export function SliderCards() {
    return (
        <div className={ styles.sectionMain }>
            <div className={ styles.container }>
                <button className={ styles.arrowButton }>
                    <Image
                        src='/images/arrow.png'
                        width={ 8 }
                        height={ 14 }
                        alt='Arrow icon'
                    />
                </button>
                <div className={ styles.container }>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <button className={ styles.arrowButton }>
                    <Image
                        src='/images/arrow.png'
                        width={ 8 }
                        height={ 14 }
                        alt='Arrow icon'
                    />
                </button>
            </div>
        </div>
    )
}