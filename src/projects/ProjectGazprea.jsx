import GazSnippet from "./GazSnippet.jsx";
import styles from './ProjectGazprea.module.css';

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
    
    // Invalid identifiers
    integer 2ndVariable = 10; // Cannot start with a digit
    integer my-variable = 5; // Cannot contain hyphens
    integer if = 20; // Cannot be a reserved keyword
}`;

const snippetTypes =
`procedure main() {
    boolean isTrue = true;
    character myChar = 'g';
    integer myInt = 6; // signed 32-bit integer
    real myReal = 3.14; // supports scientific notation, e.g., 1.5e-10
    tuple(integer, real) myTuple = (42, 2.718);
    integer[5] myArray = [1, 2, 3, 4, 5]; // fixed-size array of integers
    integer[2][2] my2DMatrix = [[1, 2], [4, 5]]; // fixed-size 2D array of integers
    string myString = "Hello, Gazprea!"; // syntactic sugar for array of characters
}`;

function ProjectGaz() {
    return (
        <>
        <div className={styles.bodyContainer}>
            <h1 className={styles.projectTitle}>Gazprea Compiler</h1>
            <h2>Overview</h2>
            <p className={styles.projectBody}>
                The Gazprea Compiler was the main project for CMPUT 415 (Compiler Design) at UAlberta and effectively served as the capstone of my undergrad. It was by far the most demanding project I completed during my studies. Over the course of around two months, with hundreds of man-hours invested, my team and I were extremely proud of the final product we delivered.
            </p>
            <img src="../GazpreaLogo.png" className={styles.projectBodyImage}/>

            <p className={styles.projectBody}>
                Gazprea is a statically and weakly typed imperative programming language, and the compiler we built for it handled the full pipeline: lexical analysis, parsing, semantic analysis, and backend code generation. By the end of the project, we had implemented a working compiler capable of translating Gazprea programs into executable code, complete with type checking, scope management, and meaningful error reporting.
            </p>
            <p className={styles.projectBody}>
                The repository for this project is closed source by request of the course instructors. However, I am happy to discuss details, specifications, share code, or demo the compiler if you reach out to me!
            </p>
            <h2>Features</h2>

            <p className={styles.projectBody}>NOTE: This feature summary is not exhaustive. There are features and restrictions that have been omitted for the sake of brevity. This project entry would be way too long if I included everything :)</p>

            <h3>Program Structure</h3>
            <p className={styles.projectBody}>Every Gazprea program must include a main procedure. All code within this procedure is executed when the program runs.</p>
            <GazSnippet code={snippetHelloWorld}/>

            <h3>Comments</h3>
            <p className={styles.projectBody}>Gazprea supports both single-line and multi-line comments.</p>
            <GazSnippet code={snippetComments}/>

            <h3>Identifiers</h3>
            <p className={styles.projectBody}>Identifiers for variables, functions, procedures, and user-defined types in Gazprea can consist of letters, digits, and underscores, but must start with a letter or underscore. They are case-sensitive and cannot be reserved keywords.</p>
            <GazSnippet code={snippetIdentifiers}/>

            <h3>Data Types</h3>
            <p className={styles.projectBody}>Gazprea supports the following data types:</p>
            <GazSnippet code={snippetTypes}/>


            <h2>Front End</h2>
            <h2>Backend</h2>
        </div>
        </>
    );
}

export default ProjectGaz;