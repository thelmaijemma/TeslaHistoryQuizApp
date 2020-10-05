
let currentQuestionNum = 0;

const store = {
  // 5 or more questions are required
  questions: [
    { question: 'What year did Tesla return its first annual profit?',
      answers: [
        '2017',
        '2018',
        '2019',
        '2020'
      ],
      correctAnswer: '2020'
    },
    {question: 'How many grams of CO2 does the Roadster release per mile driven?',
      answers: [
        '0',
        '50',
        '333', 
        '456'
      ],
      correctAnswer: '0'
    },
    {question: 'Which model was Tesla&#8217;s first?',
      answers: [
        'Model X',
        'Model S',
        'Roadster',
        'Model 3'
      ],
      correctAnswer: 'Roadster'
    },
    { question: 'What did Tesla name its 2019 HEPA air filtration upgrade?',
      answers: [
        'Bioweapon Defense Mode',
        'Prehistoric Mode',
        'Mountain Air Mode',
        'Air Mop'
      ],
      correctAnswer: 'Bioweapon Defense Mode'
    },
    { question: 'How much of Elon Musk&#8217;s own money did he invest in Tesla? (Millions, USD)',
      answers: [
        '10',
        '70',
        '2',
        '100'
      ],
      correctAnswer: '70'
    }
  ],
  quizStarted: false,
  score: 0
};


function fetchStartPageHtml() {
  return `<section class="quiz-box">
            <button id="start-btn">Get Started</button>
          </section>`;
};

// name="answer" they all need the same name attribute to avoid multiple select
function fetchQuizHtml() {
  return `<section class="box"> 


            <form id="quiz"> 
              <fieldset>
                <div class="question">
                  <legend> <h5>Question ${currentQuestionNum + 1}/5 </h5> ${store.questions[currentQuestionNum].question}  </legend>
                </div>
                <div class="answers">                                                                       
                  <label><input type="radio" name="answer" class="radioControl" id='answer-1' value='${store.questions[currentQuestionNum].answers[0]}'>${store.questions[currentQuestionNum].answers[0]}</input></label>
                  
                  <label><input type="radio" class="radioControl" name="answer" id='answer-2' value='${store.questions[currentQuestionNum].answers[1]}'>${store.questions[currentQuestionNum].answers[1]}</input></label>
                  <label><input type="radio" name="answer" class="radioControl"  id='answer-3' value='${store.questions[currentQuestionNum].answers[2]}'>${store.questions[currentQuestionNum].answers[2]}</input></label>
                  <label><input type="radio"name="answer"  class="radioControl" id='answer-4' value='${store.questions[currentQuestionNum].answers[3]}'>${store.questions[currentQuestionNum].answers[3]}</input></label>
                </div>
              </fieldset>
            </form >
            <button type='button' id="submit"> Submit </button>


          </section>
`}

function totalHtml() {
  return $('main').html(`<h2>${store.score} / 5 <button type="button" id='tryAgain' class="again">Start Again</button>`)
}

/********** RENDER FUNCTION(S) **********/
$(window).on('load', function() {
    return $('main').html(fetchStartPageHtml())})
  

function fetchQuiz() {
  return $('main').html(fetchQuizHtml());
  console.log(store.score);
  console.log(`this is the question number` + currentQuestionNum);
}



function renderQuiz() {
  startQuizFunctions();
}

$(renderQuiz);

/********** EVENT HANDLER FUNCTIONS **********/

function startQuizFunctions() {
  $('body').on('click', '#start-btn', function (event) {
    store.quizStarted = true;
    listenAnswer();
    fetchQuiz();
    nextQuestion();
    newQuiz();
    userSubmit();
  })
}

function listenAnswer() {                              
  $('body').on('click', 'input', function(event) {
    //let randomAnswer = $(this).val();
    $(this).addClass('carry');
 // let randomAnswer = $('.carry').val();
   console.log(randomAnswer)
 
      })
     
 
      }

    
 //document.getElementById("submit").addEventListener("click", function(){
function userSubmit(randomAnswer){
     $('body').on('click', '#submit', event => {
       $('input').prop('disabled', true);
    console.log('submit');
    console.log(randomAnswer)
    if ($('.carry').val() === store.questions[currentQuestionNum].correctAnswer && currentQuestionNum < 5) {
      store.score ++;
      console.log(store.score)
      return  $('main').html(`<h2> Correct</h2> <p>tally  ${store.score}/5 </p><button type="button" id='nq' class="next-question">Next</button>`)
      }
    else {
        return $('main').html(`<h2> ${store.questions[currentQuestionNum].correctAnswer} </h2><button type="button" id='nq' class="next-question">Next</button> <p> tally ${store.score}/5</p>`)
     }
     //To make a variable calculated in function A visible in function B, you have three choices: make it a global, make it an object property, or >>>pass it as a parameter when calling B from A.<<<
     
    })}
    
  
    function nextQuestion() {
      $('body').on('click', '#nq', event => {
        currentQuestionNum++;
        console.log(`this is the question number`+ currentQuestionNum)
        if (currentQuestionNum < 5){
           fetchQuiz();
        }
        else {
          totalHtml();
        }
        }
      )}

  function newQuiz() {
    $('body').on('click', '#tryAgain', event => {
      store.score = 0;
      currentQuestionNum = 0;
      console.log(`this is the question number`+ currentQuestionNum)
      fetchQuiz();
      });
  }

  
   