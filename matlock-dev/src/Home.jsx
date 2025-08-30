import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="card-container">
                <Link to="/about" className="card vertical-long">
                    <time datetime="2025-08-22">
                    Aug 22, 2025
                    </time>
                    <h2>About Me</h2>
                    <p>Welcome to my website! My name is Garrett. I'm a recent Computing Science graduate from the University of Alberta.</p>
                    <p>matlock.dev is meant to function as a portfolio where I can showcase some of my project work. I'm also using it as a way to enhance my front-end web development skills.</p>
                    <p>If you'd like to learn more about me and what I do, click on 'About' in the navigation bar at the top-right of the page, or just click on this card!</p>

                </Link>
                <div className="card">
                    <img src="gazprea-icon.png" alt="gaz-logo" className="card-icon"/>
                    <h2>Gazprea Compiler</h2>
                    <p>A custom compiler for the Gazprea programming language developed with C++, LLVM, MLIR, and ANTLR4!</p>

                </div>
                <div className="card">
                    <h2>QRiffic</h2>
                </div>
                <div className="card">
                    <h2>matlock.dev</h2>
                    <p>Take a look into matlock.dev's development</p>
                </div>
                <div className="card">
                    <h2>PROJECT: Pantry</h2>
                    <p>Full-Stack home inventory management app</p>
                    <p>WIP</p>
                </div>
            </div>
        </>
    );
}

export default Home;