export function generateQuiz(questions, quizcontainer, resultscontainer, submitButton) {

    function showQuiz(questions, quizcontainer) {
        const heading = document.createElement("h3");
        heading.innerHTML = "Quiz";
        quizcontainer.appendChild(heading);
        for(let i=0; i<questions.length; i++) { //For every question...
            const questions_text = document.createElement("p"); //create new paragraph with the question
            questions_text.innerHTML = questions[i].question;
            quizcontainer.appendChild(questions_text);
            for(let [key, value] of Object.entries(questions[i].answers)){ //for every possible answer
                const input = document.createElement("input"); //create new radiobutton element
                input.type = "radio";
                input.name = `q${i}`;
                input.id = `q${i}a${key}`;
                input.value = `${key}`;
                const label = document.createElement("label"); //create new label with the answer text
                label.id = `lq${i}a${key}`;
                label.innerText = `${value}`;
                quizcontainer.appendChild(input);
                quizcontainer.appendChild(label);
            }
        }
        
    }

    function showResults(questions, quizcontainer, resultscontainer) {

        const answers = document.querySelectorAll("input:checked"); //get all answers with checked radiobutton
        const inputs = document.querySelectorAll("input");  //get all input elements

        let correctAnswers = 0; //counter

        //alert if not all questions have been answered
        if(answers.length < questions.length) {
            alert("Bitte beantworte alle Fragen!");
            return;
        }

        for(let i=0; i<questions.length; i++) {             //for every question...
            if(answers[i].value === questions[i].correctAnswer) {   //check if answer was correct
                document.getElementById("l" + answers[i].id).style.color = "green"; //color correct answer green and increase counter
                correctAnswers++;
            } else {
                document.getElementById("l" + answers[i].id).style.color = "red";   //else color wrong answer red
            }
        }

        //Disable all inputs
        inputs.forEach((input) => {
            input.disabled = true;
        })

        //Show results and add a link to play again
        resultscontainer.innerText = `Du hast ${correctAnswers} von ${questions.length} Fragen richtig beantwortet! `
        const again = document.createElement("a");
        again.id = "again";
        again.innerText = "Nochmal?";
        resultscontainer.appendChild(again);
        again.addEventListener("click", () => {
            reset();    // call reset function if link is clicked
        })
    }

    //reset quiz
    function reset() {
        document.querySelectorAll("input").forEach((input) => { //get all input elements
            input.disabled = false; //enable inputs
            input.checked = false;  //uncheck inputs
            document.getElementById("l" + input.id).style.color = "black"; //color inputs black
        })

        resultscontainer.innerText = "";
    }

    showQuiz(questions, quizcontainer);
    submitButton.addEventListener("click", () => {
        showResults(questions, quizcontainer, resultscontainer);
    })
}