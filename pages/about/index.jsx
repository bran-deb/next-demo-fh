import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <h1 className={'title'}>
                Ir a <Link href="/contact" replace>Contact</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.js</code>
            </p>
        </>
    )
}


AboutPage.getLayout = function getLayout(page) {
    //contiene los layouts que contienen la pagina
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}