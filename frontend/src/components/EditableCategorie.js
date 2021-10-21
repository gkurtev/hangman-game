function EditableCategorie(props) {
  const { challenge } = props;

  const wordsArray = challenge?.words || [];
  const renderWords = () => {
    return wordsArray.map((word, index) => {
      return <li key={index}>{word}</li>;
    });
  };

  return (
    <div className='editable-categorie'>
      <div className='editable-categorie__head'>
        <p>{challenge.category}</p>
      </div>

      <div className='editable-categories__body'>
        <ul>{renderWords()}</ul>
      </div>

      <div className='editable-categories__actions'>
        <button>Add word</button>
      </div>
    </div>
  );
}
export default EditableCategorie;
