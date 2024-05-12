import React, { useState } from 'react';
import backgroundImage from '../components/fon.jpg';
import './Item.css';
const Item = () => {
  const [riddles, setRiddles] = useState([
    {
      id: 1,
      description: "Что имеет ключи, но не может открыть замок?",
      option1: "Пианино",
      option2: "Карта",
      option3: "Компьютер",
      option4: "Книга",
      correct: 2
    },
    {
      id: 2,
      description: "Что имеет голову, хвост, коричневое, и не имеет ног?",
      option1: "Пенни",
      option2: "Змея",
      option3: "Дерево",
      option4: "Гриб",
      correct: 1
    },
    {
      id: 3,
      description: "Что бегает по всему двору, но не двигается?",
      option1: "Ограда",
      option2: "Ветер",
      option3: "Тень",
      option4: "Дерево",
      correct: 3
    },
    // Добавляем два новых вопроса
    {
      id: 4,
      description: "Что можно увидеть с закрытыми глазами?",
      option1: "Сон",
      option2: "Воздух",
      option3: "Туман",
      option4: "Мечта",
      correct: 2
    },
    {
      id: 5,
      description: "Что всегда идет, но никогда не приходит?",
      option1: "Время",
      option2: "Дождь",
      option3: "Свет",
      option4: "Звук",
      correct: 1
    }
  ]);

  const [answers, setAnswers] = useState(new Array(riddles.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [reset, setReset] = useState(false);

  const handleAnswer = (index, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let isAllCorrect = true;
    answers.forEach((selectedOption, index) => {
      if (selectedOption !== riddles[index].correct) {
        isAllCorrect = false;
      }
    });
    setShowResult(true);
    setResultMessage(isAllCorrect ? "Все ответы верные!" : "Один или несколько ответов неверны");
    setReset(true);
  };

  const resetQuiz = () => {
    setAnswers(new Array(riddles.length).fill(null));
    setShowResult(false);
    setResultMessage("");
    setReset(false);
  };

  const reloadPage = () => {
    window.location.reload();
  };
  const [userQuestion, setUserQuestion] = useState("");
  const [userOptions, setUserOptions] = useState(["", "", "", ""]);

  const handleUserQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleUserOptionChange = (index, e) => {
    const newOptions = [...userOptions];
    newOptions[index] = e.target.value;
    setUserOptions(newOptions);
  };


  return (
    <div className="container"> {/* Обертка для всего контента */}
    <div className="background-image"></div> {/* Див для фонового изображения */}
    <div className="content"> {/* Контент страницы */}
      <h1 className="title">Решите загадки</h1>
      <div className="riddles-container">
        {riddles.map((riddle, index) => (
          <div key={riddle.id} className="riddle">
            <p>{riddle.description}</p>
            <ul style={{listStyleType: 'none', paddingLeft: 0}}>
              <li className="option"><input type="radio" name={`riddle_${riddle.id}`} value={riddle.option1} onChange={() => handleAnswer(index, 1)} /> {riddle.option1}</li>
              <li className="option"><input type="radio" name={`riddle_${riddle.id}`} value={riddle.option2} onChange={() => handleAnswer(index, 2)} /> {riddle.option2}</li>
              <li className="option"><input type="radio" name={`riddle_${riddle.id}`} value={riddle.option3} onChange={() => handleAnswer(index, 3)} /> {riddle.option3}</li>
              <li className="option"><input type="radio" name={`riddle_${riddle.id}`} value={riddle.option4} onChange={() => handleAnswer(index, 4)} /> {riddle.option4}</li>
            </ul>
          </div>
        ))}
        </div>
    </div>
    </div>
  );
};

export default Item;