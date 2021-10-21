import { useStore } from 'react-context-hook';
import EditableCategorie from './EditableCategorie';

function EditableCategories() {
  const [challenges] = useStore('challenges', []);

  const renderChallenges = () => {
    console.log(challenges);
    return challenges.map((challenge) => {
      return <EditableCategorie key={challenge.id} challenge={challenge} />;
    });
  };

  return <div>{renderChallenges()}</div>;
}
export default EditableCategories;
