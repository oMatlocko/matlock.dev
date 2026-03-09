import { Link } from "react-router-dom";
import styles from './Card.module.css';

function Home() {
    return (
        <>
            <div className={styles.cardContainer}>
                <Link to="/about" className={`${styles.card} ${styles.verticalLong}`}>
                    <h2>About Me</h2>
                    <p>Welcome to my website! My name is Garrett. I'm a recent Computing Science graduate from the University of Alberta.</p>
                    <p>matlock.dev is meant to function as a portfolio where I can showcase some of my project work. I'm also using it as a way to enhance my front-end web development skills.</p>
                    <p>If you'd like to learn more about me and what I do, click on 'About' in the navigation bar at the top-right of the page, or just click on this card!</p>
                    <div className={styles.toolContainer}>
                    </div>
                </Link>
                <Link to="/projects/gazprea-compiler" className={styles.card}>
                    <time>Fall/Winter 2024</time>
                    <h2>
                        Gazprea Compiler
                        {/* <img src="gazprea-icon.png" className={styles.cardIcon}/> */}
                    </h2>
                    <div className={styles.toolContainer}>
                        <img src="cpp-logo.png" className={styles.tool}/>
                        <img src="llvm-dragon.png" className={styles.tool}/>
                        <img src="mlir-logo.png" className={styles.tool}/>
                        <img src="antlr-logo.png" className={styles.tool}/>
                    </div>
                    <p>Compiler for the Gazprea programming language.</p>
                    <div className={styles.cardThumbnailContainer}>
                        <img src="gaz-snippet.png" className={styles.cardThumbnail}/>
                    </div>
                </Link>
                <div className={styles.card}>
                    <time>Fall/Winter 2023</time>
                    <h2>QRiffic</h2>
                    <div className={styles.toolContainer}>
                        <img src="Android-Studio-icon.svg" className={styles.tool}/>
                        <img src="Java_logo.png" className={styles.tool}/>
                        <img src="firebase.png" className={styles.tool}/>
                    </div>
                    <p>A location-based AR scavenger hunt game for Android.</p>
                    <div className={styles.cardThumbnailContainer}>
                        <img src="qriffic-screenshot.png" className={styles.cardThumbnail}/>
                    </div>
                </div>
                <div className={styles.card}>
                    <time>Winter 2022</time>
                    <h2>matlock.dev</h2>
                    <div className={styles.toolContainer}>
                        <img src="React-icon.svg" className={styles.tool}/>
                        <img src="CSS-logo.png" className={styles.tool}/>
                        <img src="Vitejs-logo.svg" className={styles.tool}/>
                    </div>
                    <p>Take a look into matlock.dev's development.</p>
                    <div className={styles.cardThumbnailContainer}>
                        <img src="early-site-mock.png" className={styles.cardThumbnail}/>
                    </div>
                </div>
                <div className={styles.card}>
                    <time>Summer 2025</time>
                    <h2>PROJECT: Pantry</h2>
                    <div className={styles.toolContainer}>
                        <img src="Tauri.png" className={styles.tool}/>
                        <img src="Rust-logo.svg" className={styles.tool}/>
                        <img src="React-icon.svg" className={styles.tool}/>
                        <img src="Sqlite-square-icon.png" className={styles.tool}/>
                    </div>
                    <p>Home inventory management app.</p>
                </div>
            </div>
        </>
    );
}

export default Home;