function Category(props) {
  const { challenge } = props;
  return (
    <div className='category'>
      <div className='category__inner'>
        <div className='category__head'>
          <h6>{challenge.category}</h6>
        </div>

        <div className='category__content'>
          {challenge.words.map((word, index) => {
            return <li key={index}>{word}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
