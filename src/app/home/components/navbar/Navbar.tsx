import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
    return(
        <header className={ styles.header }>
            <Link className={ styles.logo } href="/home">Cup&Cake</Link>
            <div className={ styles.box }>
                <nav>
                    <ul className= { styles.navLink }>
                        <a href="">
                            <li className={ styles.link }>QUEM SOMOS?</li>
                        </a>
                        <a href="#products">
                            <li className={ styles.link }>PRODUTOS</li>
                        </a>
                        <a href="#feedbacks">
                            <li className={ styles.link }>DEPOIMENTOS</li>
                        </a>
                        <a href="">
                            <li className={ styles.link }>CONTATO</li>
                        </a>
                    </ul>
                </nav>
                    <Link href="/login" className={ styles.logoutButton }>
                        <Image 
                            src='/images/icon.png'
                            alt='Imagem do ícone de sair'
                            width={ 30 }
                            height={ 30 }
                        />
                    </Link>
            </div>
        </header>
    )
}