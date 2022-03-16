import { ActiveLink } from '../ActiveLink'
import { menuItems } from '../helpers/menuItems'
import styles from './styles.module.css'


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