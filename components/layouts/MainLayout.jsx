import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './styles.module.css'

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Bran</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar className={styles.container} />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
