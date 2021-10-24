import React from 'react';
import { useState } from 'react';
import { dbUpdateWords } from '../actions/store-actions';

function EditableCategorie(props) {
  const { challenge } = props;
  const [wordValue, setWordValue] = useState('');
  const [toggle, setToggle] = useState(false);
  const [wordsArray, setwordsArray] = useState(challenge?.words || []);

  const renderwordsArray = () => {
    return wordsArray.map((word, index) => {
      return (
        <li key={index}>
          <div
            className='editable-categories__word'
            style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 300 }}
          >
            <span>{word}</span>

            <button onClick={() => removeWord(word)}>x</button>
          </div>
        </li>
      );
    });
  };

  const removeWord = (removedWord) => {
    const removedWordIndex = wordsArray.indexOf(removedWord);
    const newWordsArray = [...wordsArray];

    newWordsArray.splice(removedWordIndex, 1);

    const wordsData = {
      words: newWordsArray,
    };

    dbUpdateWords(wordsData, challenge.id).then((res) => {
      if (res.status === 200) setwordsArray(newWordsArray);
    });
  };

  const openAddWordForm = () => {
    setToggle(true);
  };

  //added word on the fronted now i need to add in backend
  const addWord = () => {
    const duplicates = wordsArray.find((x) => x === wordValue);
    const wordsData = {
      words: [...wordsArray, wordValue],
    };

    if (wordValue.length <= 0 || duplicates) return;

    dbUpdateWords(wordsData, challenge.id).then((res) => {
      if (res.status === 200) {
        setwordsArray((prevwordsArray) => {
          return [...prevwordsArray, wordValue];
        });

        closeAddWordForm();
      }
    });
  };

  const closeAddWordForm = () => {
    setToggle(false);
    setWordValue('');
  };

  return (
    <div className='editable-categorie'>
      <div className='editable-categorie__head'>
        <p>{challenge.category}</p>
      </div>

      <div className='editable-categories__body'>
        <ul>{renderwordsArray()}</ul>
      </div>

      <div className='editable-categories__actions'>
        {toggle ? (
          <div className='editable-categories__actions__add'>
            <input
              autoFocus
              type='text'
              value={wordValue}
              onChange={(e) => setWordValue(e.target.value)}
            />

            <button onClick={addWord}>Add word</button>
            <button onClick={closeAddWordForm}>Cancel</button>
          </div>
        ) : (
          <button onClick={openAddWordForm}>Add word</button>
        )}
      </div>
    </div>
  );
}
export default EditableCategorie;
