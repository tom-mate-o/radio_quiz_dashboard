import questionrevwerse1 from './soundfiles/music_reverse/question_reverse_radio_gaga.mp3';
import answerrevwerse1 from './soundfiles/music_reverse/answer_reverse_radio_gaga.mp3';
import questionrevwerse2 from './soundfiles/music_reverse/question_reverse_take_on_me.mp3';
import answerrevwerse2 from './soundfiles/music_reverse/answer_reverse_take_on_me.mp3';
import questionrevwerse3 from './soundfiles/music_reverse/question_reverse_i_want_it_that_way.mp3';
import answerrevwerse3 from './soundfiles/music_reverse/answer_reverse_i_want_it_that_way.mp3';
import questionrevwerse4 from './soundfiles/music_reverse/question_reverse_roxanne.mp3';
import answerrevwerse4 from './soundfiles/music_reverse/answer_reverse_roxanne.mp3';
import questiongoogle1 from './soundfiles/google_zingt/question_africa.mp3';
import answergoogle1 from './soundfiles/google_zingt/answer_africa.mp3';
import questiongoogle2 from './soundfiles/google_zingt/question_feel.mp3';
import answergoogle2 from './soundfiles/google_zingt/answer_feel.mp3';
import questiongoogle3 from './soundfiles/google_zingt/question_like_a_prayer.mp3';
import answergoogle3 from './soundfiles/google_zingt/answer_like_a_prayer.mp3';
import answerpoetry1 from './soundfiles/poetry_lyrics/answer_violet_hill.mp3';
import answerpoetry2 from './soundfiles/poetry_lyrics/answer_islands_in_the_stream.mp3';
import answerpoetry3 from './soundfiles/poetry_lyrics/answer_feel_good_inc.mp3';
import beatthetoaster from './soundfiles/beat_the_toaster.mp3';

export const quizData = [
  {
    round: 1,
    title: 'Google zingt',
    moderation:
      'Het is quizmaandag. Ik heb een geweldige quiz voor jullie voorbereid. Het is heel makkelijk. Er zijn 10 rondes. Als je een ronde wint, mag je het volgende liedje kiezen, als je verliest, mag ik kiezen. Je kunt ook lekker thuis meedoen. Als je het antwoord weet, schreeuw het dan hardop in de radio en win een fantastische prijs. In ronde 1 zingt Google een liedje voor je in Nederlands. (Best of 3) ',
    question: [
      {
        question: [
          { question: 'Wat is dat voor een liedje?' },
          { media: questiongoogle1 },
        ],
        answers: [
          {
            answer: 'Africa - Toto',
            media: answergoogle1,
            correct: true,
          },
        ],
      },
      {
        question: [
          { question: 'Wat is dat voor een liedje?' },
          { media: questiongoogle2 },
        ],
        answers: [
          {
            answer: 'Feel - Robbie Williams',
            media: answergoogle2,
            correct: true,
          },
        ],
      },
      {
        question: [
          { question: 'Wat is dat voor een liedje?' },
          { media: questiongoogle3 },
        ],
        answers: [
          {
            answer: 'Lika A Prayer - Madonna',
            media: answergoogle3,
            correct: true,
          },
        ],
      },
    ],
  },

  {
    round: 2,
    title: 'Medicijn of Pokémon?',
    moderation:
      'Je moet gewoon raden - Ist het en Medicijn of en Pokémon (Best of 5)',
    question: [
      {
        question: [{ question: 'Rozerem' }, { media: '' }],
        answers: [
          { answer: 'Medicijn (slaapmiddel)', media: '', correct: true },
        ],
      },
      {
        question: [{ question: 'Geodon' }, { media: '' }],
        answers: [
          { answer: 'Medicijn (antipsychoticum)', media: '', correct: true },
        ],
      },
      {
        question: [{ question: 'Glaceon' }, { media: '' }],
        answers: [
          { answer: 'Pokemon (4th gen. ice)', media: '', correct: true },
        ],
      },
      {
        question: [{ question: 'Aceon' }, { media: '' }],
        answers: [
          { answer: 'Medicijn (hoge bloeddruk)', media: '', correct: true },
        ],
      },
      {
        question: [{ question: 'Genesect' }, { media: '' }],
        answers: [
          { answer: 'Pokemon (5th gen. bug-steel)', media: '', correct: true },
        ],
      },
    ],
  },

  {
    round: 3,
    title: 'Nerd Trivia',
    moderation:
      'Nu testen we je nerdkennis. 3 vragen, het correcte antwoord levert één punt. (Best of 3)',
    question: [
      {
        question: [
          {
            question:
              'Tolkien zei over zichzelf dat hij alleen de vertaler van Lord Of the Rings was. Dus wat was de oorspronkelijke naam van Frodo in "Westron?"...',
          },
          { media: '' },
        ],
        answers: [
          { answer: 'Maura Labingi', media: '', correct: true },
          { answer: 'Banazîr Galbasi', media: '', correct: false },
          { answer: 'Kalimac Brandagamba', media: '', correct: false },
        ],
      },
      {
        question: [{ question: 'Wie is de oom van Kylo Ren?' }, { media: '' }],
        answers: [
          {
            answer:
              'Luke Skywalker (Leia Organa is zijn moeder, Luke is haar broer)',
            media: '',
            correct: true,
          },
        ],
      },
      {
        question: [
          {
            question:
              'Wie is de jongste kapitein in de geschiedenis van Star-Trek?',
          },
          { media: '' },
        ],
        answers: [
          { answer: 'Jean-Luc Picard', media: '', correct: false },
          { answer: 'James Kirk', media: '', correct: true },
          { answer: 'Michael Burnham', media: '', correct: false },
        ],
      },
    ],
  },

  {
    round: 4,
    title: 'Music Reverse',
    moderation:
      'De titel zegt het toch al. Je hoort 3 nummers omgekeerd afgespeeld en vertelt me welke dat waren. (Best of 3)',
    question: [
      {
        question: [
          {
            question:
              'Wat is dat voor een liedje? of Ejdeil nee roov tad si taw?',
          },
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
          { question: 'Wat is dat voor een liedje?' },
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
          { question: 'Wat is dat voor een liedje?' },
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
          { question: 'Wat is dat voor een liedje?' },
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
  {
    round: 5,
    title: 'Lonely Island Madness',
    moderation:
      'Stel je voor dat je op een onbewoond eiland zit. En er zit 24 uur lang een liedje in je hoofd. En Ohrwurm. Maar je kunt er maar één van twee songs kiezen. Welk liedje zou >>>IK<<< kiezen? (Best of 5)',
    question: [
      {
        question: [
          {
            question: '"Coco Jamboo" of "Cutten Eye Joe"',
          },
          { media: '' },
        ],
        answers: [{ answer: 'Coco Jamboo', media: '', correct: true }],
      },
      {
        question: [
          {
            question: '"Last Christmas" of "All I Want for Christmas Is You"',
          },
          { media: '' },
        ],
        answers: [{ answer: 'Last Christmas', media: '', correct: true }],
      },
      {
        question: [
          {
            question: '"Achy Breaky Heart" of "Don’t Worry, Be Happy"',
          },
          { media: '' },
        ],
        answers: [{ answer: 'Achy Breaky Heart', media: '', correct: true }],
      },
      {
        question: [
          {
            question: '"Rockstar", Nickleback of "We Are The World"',
          },
          { media: '' },
        ],
        answers: [{ answer: 'We Are The World', media: '', correct: true }],
      },
      {
        question: [
          {
            question: '"Who Let the Dogs Out" of "Barbie Girl"',
          },
          { media: '' },
        ],
        answers: [{ answer: 'Barbie Girl', media: '', correct: true }],
      },
    ],
  },
  {
    round: 6,
    title: 'Beat the Toaster',
    moderation:
      'Ik stop nu een snee toast in de broodrooster. En terwijl de toast roostert, heb je tijd om begrippen te benoemen.',
    question: [
      {
        question: [
          { question: 'Noem 25 Beatles-nummers' },
          { media: beatthetoaster },
        ],
        answers: [
          {
            answer: '45secons',
            media: '',
            correct: true,
          },
        ],
      },
    ],
  },
  {
    round: 7,
    title: 'Poetry Lyrics',
    moderation:
      'Ik zal nu songteksten opzeggen - je moet raden welke. (Best of 3) ',
    question: [
      {
        question: [
          {
            question:
              "It was a long and dark December From the rooftops I remember There was snow, white snow  Clearly I remember From the windows they were watching While we froze down below  When the future's architectured By a carnival of idiots on show You'd better lie low  If you love me, won't you let me know?",
          },
          { media: '' },
        ],
        answers: [
          {
            answer: 'Coldplay -  Violet Hill',
            media: answerpoetry1,
            correct: true,
          },
        ],
      },
      {
        question: [
          {
            question:
              "Baby, when I met you There was peace unknown I set out to get you With a fine tooth comb I was soft inside There was something going on  You do something to me That I can't explain Hold me closer and I feel no pain Every beat of my heart We got something going on  Tender love is blind It requires a dedication All this love we feel Needs no conversation We ride it together, ah-ha Making love with each other, ah-ha",
          },
          { media: '' },
        ],
        answers: [
          {
            answer: 'Kenny Rogers & Dolly Parton -  Islands In The Stream',
            media: answerpoetry2,
            correct: true,
          },
        ],
      },
      {
        question: [
          {
            question:
              "City's breaking down on a camel's back They just have to go 'cause they don't know wack So while you fill the streets, it's appealing to see You won't get out the county 'cause you're damned and free  You got a new horizon. It's ephemeral style A melancholy town where we never smile And all I wanna hear is the message beep My dreams, they've gotta kiss me 'Cause I don't get to sleep, no",
          },
          { media: '' },
        ],
        answers: [
          {
            answer: 'Gorillaz - Feel Good Inc.',
            media: answerpoetry3,
            correct: true,
          },
        ],
      },
    ],
  },
  {
    round: 8,
    title: 'Music Trivia',
    moderation:
      'Nu testen we je music-kennis. 3 vragen, het correcte antwoord levert één punt. (Best of 3)',
    question: [
      {
        question: [
          {
            question: 'Welke nationaliteit heeft de popgroep Franz Ferdinand?',
          },
          { media: '' },
        ],
        answers: [
          { answer: 'English', media: '', correct: false },
          { answer: 'Austrian', media: '', correct: false },
          { answer: 'Scottish', media: '', correct: true },
        ],
      },
      {
        question: [{ question: 'Noem 3 van de 5 Spice Girls' }, { media: '' }],
        answers: [
          {
            answer:
              'Melanie Brown ("Scary Spice"); Melanie Chisholm ("Sporty Spice"); Emma Bunton ("Baby Spice"); Geri Halliwell ("Ginger Spice"); and Victoria Beckham ("Posh Spice").',
            media: '',
            correct: true,
          },
        ],
      },
      {
        question: [
          {
            question:
              'Welke zanger heeft in elk van de laatste vier decennia een Billboard nummer 1-hit gehad?',
          },
          { media: '' },
        ],
        answers: [
          { answer: 'Madonna', media: '', correct: false },
          { answer: 'Mariah Carey', media: '', correct: true },
          { answer: 'Elton John', media: '', correct: false },
        ],
      },
    ],
  },
  {
    round: 9,
    title: 'Beat the Toaster - Deel 2',
    moderation:
      'Ik heb honger. Dus maak ik nog een toast voor ons. Terwijl hij toast, noem jij...',
    question: [
      {
        question: [
          {
            question: '25 Simpsons Characters',
          },
          { media: beatthetoaster },
        ],
        answers: [
          {
            answer: '45secons',
            media: '',
            correct: true,
          },
        ],
      },
    ],
  },
  {
    round: 10,
    title: 'Waar of onwaar',
    moderation: 'Heel makkelijk. Heel snel. 5 vragen. Waar of onwaar',
    question: [
      {
        question: [
          {
            question:
              'Waar of niet waar: De Amazone is de langste rivier ter wereld.',
          },
          { media: '' },
        ],
        answers: [
          {
            answer: 'Onwaar (De Nijl is de langste rivier).',
            media: '',
            correct: false,
          },
        ],
      },
      {
        question: [
          {
            question: 'Waar of niet waar: De Eiffeltoren is hoger in de zomer.',
          },
          { media: '' },
        ],
        answers: [
          {
            answer: 'Waar (Metalen zetten uit bij verhitting).',
            media: '',
            correct: true,
          },
        ],
      },
      {
        question: [
          {
            question:
              'Waar of Onwaar: Goudvissen hebben een geheugen van drie seconden.',
          },
          { media: '' },
        ],
        answers: [
          {
            answer:
              'Onwaar (Goudvissen hebben een geheugen van enkele maanden).',
            media: '',
            correct: false,
          },
        ],
      },
      {
        question: [
          {
            question:
              'Waar of Onwaar: Het menselijk lichaam heeft 206 botten bij de geboorte.',
          },
          { media: '' },
        ],
        answers: [
          {
            answer:
              "Onwaar (Baby's worden geboren met ongeveer 270 botten, die vergroeien naarmate ze groeien).",
            media: '',
            correct: false,
          },
        ],
      },
      {
        question: [
          {
            question:
              'Waar of niet waar: De Chinese Muur is zichtbaar vanuit de Space',
          },
          { media: '' },
        ],
        answers: [
          {
            answer:
              'Onwaar (Het is niet zichtbaar met het blote oog vanuit Space).',
            media: '',
            correct: false,
          },
        ],
      },
    ],
  },
];
