import Letters from './Letters';
import Vowels from './Vowels';
import './Play.css';
import Challenge from './Challenge';
import { useEffect } from 'react';
import { useState } from 'react';
import { dbFetchSingleCategory } from '../api-calls/db-requests';
import { shuffle } from '../helpers/utils';

function Play() {
  const [words, setWords] = useState([]);
  const [currentChallenge, setCurrentChallenge] = useState('');

  useEffect(() => {
    const challengeId = window.location.href.split('/').pop();

    dbFetchSingleCategory(challengeId).then((data) => {
      const shuffledWords = shuffle(data.words);

      setCurrentChallenge(shuffledWords[0]);
      setWords(shuffledWords);
    });
  }, []);
  return (
    <div className='play'>
      <div className='play__inner'>
        <div className='play__body'>
          <div className='play__grid'>
            <div className='play__left'>
              <Vowels />
            </div>

            <div className='play__middle'>
              <Challenge challenge={currentChallenge} />
            </div>

            <div className='play__right'>
              <Letters />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
