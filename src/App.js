import { quizData } from './quizdata/quizdata';

function App() {
  return (
    <div className="App">
      <h1>Quiz</h1>

      {quizData.map((round, index) => (
        <div key={index}>
          <h2>Round {round.round}</h2>
          <div className="quizbox">
            <h3>{round.title}</h3>
            <p>
              <i>{round.moderation}</i>
            </p>

            {round.question.map((question, index) => (
              <div key={index}>
                <h4>Question {index + 1}</h4>
                <div className="questionbox">
                  <div className="question>">
                    <p>
                      <b>{question.question[0].question}</b>
                    </p>
                  </div>
                  {question.question[1].media ? (
                    <audio controls src={question.question[1].media}></audio>
                  ) : (
                    ''
                  )}
                  <h5>Answer(s)</h5>
                  <div className="answerbox hidden">
                    {question.answers.map((answer, index) => (
                      <div key={index}>
                        <p className={`answer ${answer.correct}`}>
                          {answer.answer}
                        </p>
                        {answer.media ? (
                          <audio
                            className={`answer ${answer.correct}`}
                            controls
                            src={answer.media}
                          ></audio>
                        ) : (
                          ''
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
