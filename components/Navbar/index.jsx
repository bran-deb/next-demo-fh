import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.css'
import { menuItems } from '../helpers/menuItems.js'


export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map(({ text, href }, id) => {
                    return <ActiveLink key={href} text={text} href={href} />
                })
            }
        </nav>
    )
}