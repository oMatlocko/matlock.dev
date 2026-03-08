import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.titleLogo}>matlock.dev</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;