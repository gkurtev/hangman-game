import React from 'react';
import { useState } from 'react';
import { storeRemoveCategory } from '../actions/store-actions';
import { dbDeleteCategory, dbUpdateWords } from '../api-calls/db-requests';
import Button from './Button';
import './EditableCategories.css';

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
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{word}</span>

            <Button action={() => removeWord(word)}>x</Button>
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
      if (res.status === 200) {
        setwordsArray(newWordsArray);

        console.log(wordsArray.length);
        if (wordsArray.length <= 1) {
          removeCategory();
        }
      }
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

  const removeCategory = () => {
    dbDeleteCategory(challenge.id).then((res) => {
      if (res.status === 200) {
        storeRemoveCategory(challenge.id);
      }
    });
  };

  return (
    <div className='editable-categorie'>
      <div className='editable-categorie__head'>
        <div
          className='editable-categorie__head__inner'
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <h6 className='editable-categorie__title'>{challenge.category}</h6>

          <Button action={removeCategory}>remove category</Button>
        </div>
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

            <Button action={addWord}>Add word</Button>
            <Button action={closeAddWordForm}>Cancel</Button>
          </div>
        ) : (
          <Button action={openAddWordForm}>Add word</Button>
        )}
      </div>
    </div>
  );
}
export default EditableCategorie;
