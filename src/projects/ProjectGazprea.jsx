import GazSnippet from "./GazSnippet.jsx";

const snippetHelloWorld =
`procedure main() {
    "Hello, World!" -> std_output;
}`;

const snippetComments =
`// This is a single-line comment
/* This is a multi-line comment
   that spans multiple lines */
procedure main() {
    "Hello, World!" -> std_output; // This is an inline comment
}`;

const snippetIdentifiers =
`procedure main() {
    // Valid identifiers
    integer year = 2024;
    string _language = "Gazprea";
    
    // Invalid identifiers (uncommenting these will cause errors)
    // integer 2ndVariable = 10; // Cannot start with a digit
    // integer my-variable = 5; // Cannot contain hyphens
    // integer if = 20; // Cannot be a reserved keyword
}`;

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
                The repository for this project is closed source by request of the course instructors. However, I am happy to discuss details, specifications, share code, or demo the compiler if you reach out to me!
            </p>
            <h2>Features</h2>

            <p className="project-body">NOTE: This feature summary is not exhaustive. There are features and restrictions that have been omitted for the sake of brevity. This project entry would be way too long if I included everything :)</p>

            <h3>Program Structure</h3>
            <p className="project-body">Every Gazprea program must include a main procedure. All code within this procedure is executed when the program runs.</p>
            <GazSnippet code={snippetHelloWorld}/>

            <h3>Comments</h3>
            <p className="project-body">Gazprea supports both single-line and multi-line comments.</p>
            <GazSnippet code={snippetComments}/>

            <h3>Identifiers</h3>
            <p className="project-body">Identifiers for variables, functions, procedures, and user-defined types in Gazprea can consist of letters, digits, and underscores, but must start with a letter or underscore. They are case-sensitive and cannot be reserved keywords.</p>
            <GazSnippet code={snippetIdentifiers}/>


            <h2>Front End</h2>
            <h2>Backend</h2>
        </div>
        </>
    );
}

export default ProjectGaz;