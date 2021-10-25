import { useState } from 'react';
import { dbFetchData } from '../api-calls/db-requests';
import { useAsync } from '../custom-hooks/custom-hooks';
import Category from './Category';

function Categories() {
  const [challenges, setChallenges] = useState([]);

  useAsync(dbFetchData, setChallenges);
  //non custom hook way to use effect
  //left for reference
  // useEffect(() => {
  //   let isMounted = true;

  //   dbFetchData().then((data) => {
  //     console.log(data);

  //     if (isMounted) setChallenges(data);
  //   });

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div className='categories'>
      <div className='categories__items'>
        <div className='categories__item'>
          {challenges.map((challenge) => {
            return <Category key={challenge.id} challenge={challenge} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
