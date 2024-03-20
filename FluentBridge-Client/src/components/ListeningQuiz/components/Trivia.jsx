import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import "../ListeningQuiz.css"; // Import CSS file containing animation keyframes

export default function Trivia({
                                 data,
                                 questionNumber,
                                 setQuestionNumber,
                                 setTimeOut,
                               }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    console.log("Setting question with questionNumber:", questionNumber);
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    console.log("Data updated:", data);
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);



  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");

    console.log("Selected Answer:", a);

    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(2000, () => {
          if (questionNumber < data.length) {
            const nextQuestionNumber = questionNumber + 1;
            console.log("Next Question Number:", nextQuestionNumber);
            setQuestionNumber(nextQuestionNumber);
            setSelectedAnswer(null);
            setClassName("answer");
            setQuestion(data[nextQuestionNumber - 1]);
          } else {
            setTimeOut(true);
          }
        });
      } else {
        wrongAnswer();
        delay(2000, () => {
          setTimeOut(true);
        });
      }
    });
  };



  if (!data || !question) {
    return <div>Loading...</div>;
  }

  return (
      <div className="trivia mt-8 mb-10">
        <div className="question text-white bg-purple-700 py-4 px-6 rounded-md mb-8">
          {question?.question}
        </div>
        <div className="answers grid grid-cols-2 gap-4">
          {question?.answers.map((answer, index) =>
              (
                  <div
                      className={`${
                          selectedAnswer === answer ? className : "answer"
                      } ${
                          selectedAnswer === answer && answer.correct
                              ? "correct"
                              : selectedAnswer === answer
                                  ? "wrong"
                                  :""
                      } bg-purple-500 hover:bg-purple-900 text-white py-2 px-4 rounded-md cursor-pointer transition duration-300 ease-in-out`}
                      onClick={() => !selectedAnswer && handleClick(answer)}
                      key={answer._id} // Assuming answer has an id
                  >
                    {answer.text}
                  </div>
              ))}
        </div>
      </div>
  );
}
