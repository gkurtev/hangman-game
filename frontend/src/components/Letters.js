import { useState } from 'react';

function Letters() {
  const [letters, setLetters] = useState([
    'B',
    'C',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]);

  const renderLetters = () => {
    return letters.map((letter, index) => {
      return <li key={index}>{letter}</li>;
    });
  };

  return (
    <div className='letters'>
      <div className='letters-list'>
        <ul>{renderLetters()}</ul>
      </div>
    </div>
  );
}

export default Letters;
