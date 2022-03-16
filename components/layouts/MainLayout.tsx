import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../Navbar'
import styles from './styles.module.css'

export const MainLayout: FC= ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Bran</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
