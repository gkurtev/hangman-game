import { Link } from 'react-router-dom';
import { useStore } from 'react-context-hook';
import React, { useEffect } from 'react';

function Settings() {
  const [hangmanData, setHangmanData] = useStore('hangmanData', []);

  const test = useStore('hangmanData');
  useEffect(() => {
    console.log(test);
  });

  const removeCategory = (id) => {
    const filterData = hangmanData.filter((x) => x.id !== id);
    console.log(filterData);

    setHangmanData(filterData);
  };

  return (
    <div className='settings'>
      <div className='settings__inner'>
        <div className='settings__content'>
          <div className='settings__head'>
            <h1>SETTINGS</h1>
          </div>
          <div className='settings__body'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi.</p>
          </div>
          <div className='settings__actions'>
            <Link to='/'>Back</Link>
          </div>

          <div className='settings__counter'>
            {hangmanData.map((data) => (
              <li key={data.id}>
                <div>{data.category}</div>
                <button onClick={() => removeCategory(data.id)}>Remove</button>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
