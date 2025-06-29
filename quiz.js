const quizzes = {
    html: [
        { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Hyper Transfer Markup Language", "HighText Machine Learning"], answer: 0 },
        { question: "Which tag is used to define a hyperlink?", options: ["<link>", "<a>", "<href>"], answer: 1 },
    ],
    js: [
        { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "declare"], answer: 0 },
        { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Digital Output Module"], answer: 0 },
    ],
    react: [
        { question: "What is JSX in React?", options: ["JavaScript XML", "Java Syntax Extension", "Java Extended Script"], answer: 0 },
        { question: "Which hook is used for state management in React?", options: ["useState", "useEffect", "useContext"], answer: 0 },
    ],
};

function loadQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get("course");

    if (!quizzes[course]) {
        document.getElementById("quiz-container").innerHTML = "<p>Quiz not found.</p>";
        return;
    }

    document.getElementById("quiz-title").textContent = `Quiz - ${course.toUpperCase()}`;

    let quizContainer = document.getElementById("quiz-container");
    quizzes[course].forEach((q, index) => {
        let questionEl = document.createElement("p");
        questionEl.textContent = `${index + 1}. ${q.question}`;
        quizContainer.appendChild(questionEl);

        q.options.forEach((option, i) => {
            let optionEl = document.createElement("button");
            optionEl.textContent = option;
            optionEl.onclick = () => {
                if (i === q.answer) {
                    optionEl.style.backgroundColor = "green";
                    alert("Correct!");
                } else {
                    optionEl.style.backgroundColor = "red";
                    alert("Wrong answer.");
                }
            };
            quizContainer.appendChild(optionEl);
        });
    });
}

function goBack() {
    window.location.href = "index.html";
}

window.onload = loadQuiz;
