// Initial Data
let currentQuestion = 0;

showQuestion();

// Functions
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionsHTML = '';
        for (let i in q.options) {
            optionsHTML += `<div data-op="${i}" class="option"><span> ${parseInt(i) + 1}</span> ${q.options[i]} </div>`
        }
        document.querySelector('.options').innerHTML = optionsHTML;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });

    } else {

    }
}

function optionClickEvent(e) {
    let cickedOption = parseInt(e.target.getAttribute('data-op'));

    if (questins[currentQuestion].answer === cickedOption) {
        console.log("errii")
    } else {
        console.log("err")
    }
} 