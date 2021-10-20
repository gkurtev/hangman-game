import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='home__inner'>
        <div className='home__content'>
          <div className='home__head'>
            <h1>Hangman</h1>
          </div>
          <div className='home__body'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi.</p>
          </div>
          <div className='home__actions'>
            <Link to='/'>Play</Link>

            <Link to='/settings'>Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
