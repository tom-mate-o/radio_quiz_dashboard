import questionrevwerse1 from './soundfiles/music_reverse/question_reverse_radio_gaga.mp3';
import answerrevwerse1 from './soundfiles/music_reverse/answer_reverse_radio_gaga.mp3';
import questionrevwerse2 from './soundfiles/music_reverse/question_reverse_take_on_me.mp3';
import answerrevwerse2 from './soundfiles/music_reverse/answer_reverse_take_on_me.mp3';
import questionrevwerse3 from './soundfiles/music_reverse/question_reverse_i_want_it_that_way.mp3';
import answerrevwerse3 from './soundfiles/music_reverse/answer_reverse_i_want_it_that_way.mp3';
import questionrevwerse4 from './soundfiles/music_reverse/question_reverse_roxanne.mp3';
import answerrevwerse4 from './soundfiles/music_reverse/answer_reverse_roxanne.mp3';

export const quizData = [
  {
    round: 1,
    title: 'Title One',
    moderation: 'moderation',
    question: [
      {
        question: [
          { question: 'What is the capital of France?' },
          { media: '' },
        ],
        answers: [
          { answer: 'Paris', media: '', correct: true },
          { answer: 'London', media: '', correct: false },
          { answer: 'Berlin', media: '', correct: false },
        ],
      },
      {
        question: [
          { question: 'What is the capital of France?' },
          { media: '' },
        ],
        answers: [
          { answer: 'Paris', media: '', correct: true },
          { answer: 'London', media: '', correct: false },
          { answer: 'Berlin', media: '', correct: false },
        ],
      },
      {
        question: [
          { question: 'What is the capital of France?' },
          { media: '' },
        ],
        answers: [
          { answer: 'Paris', media: '', correct: true },
          { answer: 'London', media: '', correct: false },
          { answer: 'Berlin', media: '', correct: false },
        ],
      },
    ],
  },
  {
    round: 2,
    title: 'Music Reverse',
    moderation: 'moderation',
    question: [
      {
        question: [
          { question: 'What that song?' },
          { media: questionrevwerse1 },
        ],
        answers: [
          {
            answer: 'Radio Gaga - Queen',
            media: answerrevwerse1,
            correct: true,
          },
        ],
      },
      {
        question: [
          { question: 'What that song?' },
          { media: questionrevwerse2 },
        ],
        answers: [
          {
            answer: 'Take on me - A-ha',
            media: answerrevwerse2,
            correct: true,
          },
        ],
      },
      {
        question: [
          { question: 'What that song?' },
          { media: questionrevwerse3 },
        ],
        answers: [
          {
            answer: 'I want it that way - Backstreet Boys',
            media: answerrevwerse3,
            correct: true,
          },
        ],
      },
      {
        question: [
          { question: 'What that song?' },
          { media: questionrevwerse4 },
        ],
        answers: [
          {
            answer: 'Roxanne - The Police',
            media: answerrevwerse4,
            correct: true,
          },
        ],
      },
    ],
  },
];
