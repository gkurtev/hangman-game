import { useState } from 'react';

function Vowels() {
  const [vowels, setVowels] = useState(['A', 'E', 'I', 'O', 'U']);

  const renderLetters = () => {
    return vowels.map((vowel, index) => {
      return <li key={index}>{vowel}</li>;
    });
  };

  return (
    <div className='letters letters--vowels'>
      <div className='letters-list'>
        <ul>{renderLetters()}</ul>
      </div>
    </div>
  );
}

export default Vowels;
