const DATA = {
    "C++ Syntax & Structure": [
        {
            heading: "Main Function",
            image: "1a.jpg", // https://pixabay.com/photos/code-coding-programming-css-583923/
            paragraph: "What is the correct way to declare the main function in C++?",
            a: "void main()",
            b: "function main()",
            c: "int main()",
            d: "main() void",
            answer: "c",
            score: 10,
            answerParagraph: "In standard C++, the correct declaration is `int main()` because the function returns an integer exit status to the operating system."
        },
        {
            heading: "Semicolons",
            image: "1b.jpg", // https://pixabay.com/photos/keyboard-programming-code-4034208/
            paragraph: "What happens if a semicolon is missing at the end of a statement?",
            a: "The program will skip the line",
            b: "It may cause a compile-time error",
            c: "It will ignore the error",
            d: "It runs but prints a warning",
            answer: "b",
            score: 20,
            answerParagraph: "C++ requires semicolons to terminate most statements. Omitting them typically results in a compile-time syntax error."
        },
        {
            heading: "Comments",
            image: "1c.jpg", // https://pixabay.com/photos/comment-opinion-message-graphic-1873548/
            paragraph: "Which is a valid way to write a single-line comment in C++?",
            a: "`/* comment */`",
            b: "`# comment`",
            c: "`// comment`",
            d: "`-- comment`",
            answer: "c",
            score: 30,
            answerParagraph: "In C++, single-line comments begin with `//`. Block comments use `/* */`."
        }
    ],
    "Variables & Data Types": [
        {
            heading: "Declaring Variables",
            image: "2a.jpg", // https://pixabay.com/photos/computer-desk-workspace-laptop-414554/
            paragraph: "Which line correctly declares an integer variable in C++?",
            a: "integer x = 5;",
            b: "int x = 5;",
            c: "x = 5 int;",
            d: "let x = 5;",
            answer: "b",
            score: 10,
            answerParagraph: "C++ uses the keyword `int` to declare integer variables, like `int x = 5;`."
        },
        {
            heading: "Data Types",
            image: "2b.jpg", // https://pixabay.com/photos/digitally-encoded-computer-data-2674849/
            paragraph: "Which data type is used to store a true/false value?",
            a: "int",
            b: "char",
            c: "bool",
            d: "float",
            answer: "c",
            score: 20,
            answerParagraph: "`bool` is used to represent Boolean values (`true` or `false`) in C++."
        },               
        {
            heading: "String Declaration",
            image: "2c.jpg", // https://pixabay.com/photos/code-programming-technology-2620118/
            paragraph: "Which statement correctly declares a string in C++?",
            a: "char name[] = \"Alex\";",
            b: "string name = 'Alex';",
            c: "String name = Alex;",
            d: "string name = \"Alex\";",
            answer: "d",
            score: 30,
            answerParagraph: "In C++, `string name = \"Alex\";` is correct if the `<string>` library is included. Double quotes are used for string literals."
        }
    ],
    "Control Structures": [
        {
            heading: "If Statement",
            image: "3a.jpg", // https://pixabay.com/photos/turn-right-road-sign-arrow-right-144577/
            paragraph: "What is the purpose of an if statement in C++?",
            a: "Repeat actions until false",
            b: "Branch code execution based on a condition",
            c: "Store multiple values",
            d: "Create functions",
            answer: "b",
            score: 10,
            answerParagraph: "`if` statements let the program make decisions and branch execution depending on whether a condition is true or false."
        },
        {
            heading: "Loops",
            image: "3b.jpg", // https://pixabay.com/photos/turntable-loop-technology-circle-2974646/
            paragraph: "Which loop is best for repeating a block of code a known number of times?",
            a: "while",
            b: "do-while",
            c: "if",
            d: "for",
            answer: "d",
            score: 20,
            answerParagraph: "`for` loops are commonly used when the number of iterations is known in advance, such as looping from 1 to 10."
        },
        {
            heading: "Switch Case",
            image: "3c.jpg", // https://pixabay.com/photos/switch-button-button-switch-light-503911/
            paragraph: "What is a benefit of using a switch statement over multiple if-else conditions?",
            a: "Better for complex boolean logic",
            b: "Faster for comparing a variable against multiple constant values",
            c: "Only works with float values",
            d: "Allows function overloading",
            answer: "b",
            score: 30,
            answerParagraph: "`switch` is more efficient when checking one variable against multiple fixed values (like integers or chars)."
        }
    ],
    "Functions & Procedures": [
        {
            heading: "Function Declaration",
            image: "4a.jpg", // https://pixabay.com/photos/development-code-coding-web-3853492/
            paragraph: "Which line correctly declares a function that returns an integer?",
            a: "function int myFunc()",
            b: "int myFunc()",
            c: "myFunc() -> int",
            d: "return myFunc: int",
            answer: "b",
            score: 10,
            answerParagraph: "In C++, a function returning an integer is declared like `int myFunc()`. The return type comes before the function name."
        },
        {
            heading: "Function Parameters",
            image: "4b.jpg", // https://pixabay.com/photos/programming-html-css-technology-1873854/
            paragraph: "What is the purpose of parameters in a function?",
            a: "To store return values",
            b: "To call the function",
            c: "To pass data into the function",
            d: "To prevent recursion",
            answer: "c",
            score: 20,
            answerParagraph: "Parameters allow data to be passed into a function for use during execution, increasing flexibility and reusability."
        },
        {
            heading: "Return Values",
            image: "4c.jpg", // https://pixabay.com/photos/computer-desk-workspace-laptop-414554/
            paragraph: "What does the `return` keyword do in a C++ function?",
            a: "Stops the program",
            b: "Repeats a loop",
            c: "Outputs a value from the function",
            d: "Declares a variable",
            answer: "c",
            score: 30,
            answerParagraph: "`return` ends the function and optionally sends a value back to the part of the program that called it."
        }
    ],
    "Debugging & Errors": [
        {
            heading: "Compiler Errors",
            image: "5a.jpg", // https://pixabay.com/photos/monitor-pc-computer-mac-1276944/
            paragraph: "What is a compiler error in C++?",
            a: "An error that occurs after the program runs",
            b: "An error in your logic",
            c: "A mistake in syntax detected before execution",
            d: "A warning message that doesn't stop the program",
            answer: "c",
            score: 10,
            answerParagraph: "Compiler errors occur when the syntax is incorrect and the program cannot be compiled into an executable."
        },
        {
            heading: "Logic Errors",
            image: "5b.jpg", // https://pixabay.com/photos/question-question-mark-help-2309042/
            paragraph: "Which is an example of a logic error?",
            a: "Using `=` instead of `==` in a condition",
            b: "Misspelling a variable name",
            c: "Missing a semicolon",
            d: "Incorrect use of a library",
            answer: "a",
            score: 20,
            answerParagraph: "Using `=` instead of `==` is a common logic error—it won’t cause a syntax error, but it leads to unintended behavior."
        },
        {
            heading: "Debugging Tools",
            image: "5c.jpg", // https://pixabay.com/photos/developer-computer-web-development-3461405/
            paragraph: "Which tool helps find and fix bugs in your C++ code?",
            a: "Debugger",
            b: "Text editor",
            c: "Spreadsheet",
            d: "Compiler",
            answer: "a",
            score: 30,
            answerParagraph: "A debugger lets you step through code, inspect variables, and understand why errors occur at runtime."
        }
    ]
}