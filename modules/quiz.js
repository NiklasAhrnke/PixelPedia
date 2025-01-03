function generateQuiz(questions, quizcontainer, resultscontainer, submitButton) {

    function showQuiz(questions, quizcontainer) {
        const heading = document.createElement("h3");
        heading.innerHTML = "Quiz";
        quizcontainer.appendChild(heading);
        for(let i=0; i<questions.length; i++) {
            const questions_text = document.createElement("p");
            questions_text.innerHTML = questions[i].question;
            quizcontainer.appendChild(questions_text);
            for(let [key, value] of Object.entries(questions[i].answers)){
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `q${i}`;
                input.id = `q${i}a${key}`;
                input.value = `${key}`;
                const label = document.createElement("label");
                label.id = `lq${i}a${key}`;
                label.innerText = `${value}`;
                quizcontainer.appendChild(input);
                quizcontainer.appendChild(label);
            }
        }
    }

    function showResults(questions, quizcontainer, resultscontainer) {

        const answers = document.querySelectorAll("input:checked");
        const inputs = document.querySelectorAll("input");

        let correctAnswers = 0;

        if(answers.length < questions.length) {
            alert("Bitte beantworte alle Fragen!");
            return;
        }

        for(let i=0; i<questions.length; i++) {
            if(answers[i].value === questions[i].correctAnswer) {
                document.getElementById("l" + answers[i].id).style.color = "green";
                correctAnswers++;
            } else {
                document.getElementById("l" + answers[i].id).style.color = "red";
            }
        }

        inputs.forEach((input) => {
            input.disabled = true;
        })

        resultscontainer.innerText = `Du hast ${correctAnswers} von ${questions.length} Fragen richtig beantwortet! `
        const again = document.createElement("a");
        again.id = "again";
        again.innerText = "Nochmal?";
        resultscontainer.appendChild(again);
        again.addEventListener("click", () => {
            reset();
        })
    }

    function reset() {
        document.querySelectorAll("input").forEach((input) => {
            input.disabled = false;
            input.checked = false;
            document.getElementById("l" + input.id).style.color = "black";
        })

        resultscontainer.innerText = "";
    }

    showQuiz(questions, quizcontainer);
    submitButton.addEventListener("click", () => {
        showResults(questions, quizcontainer, resultscontainer);
    })
}