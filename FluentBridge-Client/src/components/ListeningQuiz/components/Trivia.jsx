import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

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

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          if (questionNumber < data.length) {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
          } else {
            setTimeOut(true); // Terminate when questions are over
          }
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };

  return (
    <div className="trivia mt-8 mb-10">
      <div className="question text-white bg-purple-700 py-4 px-6 rounded-md mb-8">
        {question?.question}
      </div>
      <div className="answers grid grid-cols-2 gap-4">
        {question?.answers.map((a) => (
          <div
            className={`${
              selectedAnswer === a ? className : "answer"
            } ${a.correct ? "correct" : "wrong"} bg-purple-500 hover:bg-purple-900 text-white py-2 px-4 rounded-md cursor-pointer transition duration-300 ease-in-out`}
            onClick={() => !selectedAnswer && handleClick(a)}
            key={a.text}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
