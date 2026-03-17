import styles from '@/app/styles/formPage.module.css'
import Link from 'next/link'

export default function login() {
    return (
        <main className={ styles.main }>
            <div className={ styles.textBox }>
                <p className={ styles.logo }><span className={ styles.pinkText }>Cup&</span>Cake</p>
                <p className={ styles.description }>O <span className={ styles.pinkText }>CUPCAKE</span> DE MELHOR QUALIDADE ATÉ VOCÊ</p>
            </div>
            <div className={ styles.container }>
                <Link href='/register' className={ styles.link }>Sign Up</Link>
                <div className={ styles.formBox }>
                    <h1 className={ styles.formTitle }>LOGIN ADMIN</h1>
                    <form action="/" method="POST" className={ styles.form }>
                        <label className={ styles.label } htmlFor="email">Email:</label>
                        <input className={ styles.input } type="text" name="email" id="email" />
                        <label className={ styles.label } htmlFor="password">Senha:</label>
                        <input className={ styles.input } type="password" name="password" id="password" />
                        <input className= { styles.button } type="submit" value="Logar" />
                    </form>
                </div>
            </div>
        </main>
    )
}