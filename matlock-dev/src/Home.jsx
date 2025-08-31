import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="card-container">
                <Link to="/about" className="card vertical-long">
                    <time>Aug 22, 2025</time>
                    <h2>About Me</h2>
                    <p>Welcome to my website! My name is Garrett. I'm a recent Computing Science graduate from the University of Alberta.</p>
                    <p>matlock.dev is meant to function as a portfolio where I can showcase some of my project work. I'm also using it as a way to enhance my front-end web development skills.</p>
                    <p>If you'd like to learn more about me and what I do, click on 'About' in the navigation bar at the top-right of the page, or just click on this card!</p>
                    <div className="tool-container">
                    </div>
                </Link>
                <div className="card">
                    <h2>
                        Gazprea Compiler
                        {/* <img src="gazprea-icon.png" className="card-icon"/> */}
                    </h2>
                    <p>A custom compiler for the Gazprea programming language</p>
                    <div className="tool-container">
                        <img src="cpp-logo.png" className="tool"/>
                        <img src="llvm-dragon.png" className="tool"/>
                        <img src="mlir-logo.png" className="tool"/>
                        <img src="antlr-logo.png" className="tool"/>
                    </div>
                </div>
                <div className="card">
                    <h2>QRiffic</h2>
                    <p>A location-based AR scavenger hunt game for Android</p>
                    <div className="tool-container">
                        <img src="Android-Studio-icon.svg" className="tool"/>
                        <img src="Java_logo.png" className="tool"/>

                    </div>
                </div>
                <div className="card">
                    <h2>matlock.dev</h2>
                    <p>Take a look into matlock.dev's development</p>
                    <div className="tool-container">
                        <img src="React-icon.svg" className="tool"/>
                        <img src="CSS-logo.png" className="tool"/>
                        <img src="Vitejs-logo.svg" className="tool"/>
                    </div>
                </div>
                <div className="card">
                    <h2>PROJECT: Pantry</h2>
                    <p>Home inventory management app. WIP</p>
                    <div className="tool-container">
                        <img src="Tauri.png" className="tool"/>
                        <img src="Rust-logo.svg" className="tool"/>
                        <img src="Sqlite-square-icon.png" className="tool"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;