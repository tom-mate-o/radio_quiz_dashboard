import { quizData } from './quizdata/quizdata';
import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { ImCheckmark } from 'react-icons/im';
import wrongAudio from '../src/wrong.wav';
import correctAudio from '../src/correct.wav';

function App() {
  const [hiddenStates, setHiddenStates] = useState(
    quizData.flatMap((round) => round.question.map(() => true))
  );

  const [counter, setCounter] = useState(0);

  function playAudio(file) {
    const audio = new Audio(file);
    audio.play();
  }

  function increment() {
    setCounter(counter + 1);
    playAudio(correctAudio);
  }

  function decrement() {
    setCounter(counter - 1);
    playAudio(wrongAudio);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <div className="scoreContainer">
          <h1>{counter}</h1>
          <h4>Points</h4>
        </div>
        <div className="roundNav">
          <h4>Jump to Round</h4>
          {quizData.map((round, index) => (
            <a href={`#round-${index + 1}`} key={index}>
              {index + 1}
            </a>
          ))}
        </div>
      </div>
      <div className="mainContainer">
        <h1>Radio-Quiz-Dashboard</h1>

        {quizData.map((round, index) => (
          <div id={`round-${index + 1}`} key={index}>
            <h2>Ronde {round.round}</h2>
            <div className="quizbox">
              <h3>{round.title}</h3>
              <p className="moderation">
                <i>{round.moderation}</i>
              </p>

              {round.question.map((question, index) => (
                <div key={index}>
                  <h4>Vraag {index + 1}</h4>
                  <div className="questionbox">
                    <div className="question">
                      <p>
                        <b>{question.question[0].question}</b>
                      </p>
                    </div>
                    <div className="questionmedia">
                      {question.question[1].media ? (
                        <audio
                          controls
                          src={question.question[1].media}
                        ></audio>
                      ) : (
                        ''
                      )}
                    </div>
                    <h5
                      className="answerbutton"
                      onClick={() => {
                        const newHiddenStates = [...hiddenStates];
                        newHiddenStates[index] = !newHiddenStates[index];
                        setHiddenStates(newHiddenStates);
                      }}
                    >
                      Answer(s)
                    </h5>
                    <div
                      className={`answerbox${
                        hiddenStates[index] ? ' hidden' : ''
                      }`}
                    >
                      {question.answers.map((answer, answerIndex) => (
                        <div key={answerIndex}>
                          <div className={`answer ${answer.correct}`}>
                            <p>{answer.answer}</p>
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
                        </div>
                      ))}
                    </div>
                    <div className="buttoncontainer">
                      <h5 className="answerbutton correct" onClick={increment}>
                        <ImCheckmark />
                      </h5>{' '}
                      <h5
                        className="answerbutton incorrect"
                        onClick={decrement}
                      >
                        <ImCross />
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
