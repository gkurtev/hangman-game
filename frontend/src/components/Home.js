import Button from './Button';

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
            <Button classes='btn--link' text='Play' type='link' url='/' />

            <Button classes='btn--link btn--blue' text='Settings' type='link' url='/settings' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
