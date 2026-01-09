import GazSnippet from "./GazSnippet.jsx";

function ProjectGaz() {
    return (
        <>
        <div className="body-container">
            <h1 className="project-title">Gazprea Compiler</h1>
            <h2>Overview</h2>
            <p className="project-body">
                The Gazprea Compiler was the main project for CMPUT 415 (Compiler Design) at UAlberta and effectively served as the capstone of my undergrad. It was by far the most demanding project I completed during my studies. Over the course of around two months, with hundreds of man-hours invested, my team and I were extremely proud of the final product we delivered.                
            </p>
            <img src="../GazpreaLogo.png" className="project-body-image"/>
            
            <p className="project-body">
                Gazprea is a statically and weakly typed imperative programming language, and the compiler we built for it handled the full pipeline: lexical analysis, parsing, semantic analysis, and backend code generation. By the end of the project, we had implemented a working compiler capable of translating Gazprea programs into executable code, complete with type checking, scope management, and meaningful error reporting.
            </p>
            <p className="project-body">
                The repository for this project is private by request of the course instructors. However, I am happy to discuss details, specifications, share code, or demo the compiler if you reach out to me!
            </p>
            <h2>Features</h2>

            <p className="project-body">NOTE: This feature summary is not exhaustive. There are features that have been omitted for the sake of brevity. This project entry would be way too long if I included everything :)</p>

            <h3>Program Structure</h3>
            <p className="project-body">Every Gazprea program must include a main procedure. All code within this procedure is executed when the compiled program runs.</p>
            <GazSnippet code='procedure main() {
    "Hello, World!" -> std_output;
}'/>

            <h2>Front End</h2>
            <h2>Backend</h2>
        </div>
        </>
    );
}

export default ProjectGaz;