import { useState } from 'react';
import { addChallenge } from '../actions/store-actions';
import { dbPostChallenge } from '../api-calls/db-requests';
import { serializeForm } from '../helpers/utils';

function AddCategory() {
  const [showCategory, setShowCategory] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = serializeForm(event.target);

    dbPostChallenge(formData).then((res) => {
      if (res.status === 201) {
        addChallenge(formData);
        setShowCategory(false);
      } else {
        console.log('error category was not added');
      }
    });
  };

  return (
    <div className='add-category'>
      {showCategory ? (
        <div className='add-category__content'>
          <form onSubmit={handleSubmit} className='add-category__form'>
            <div className='add-category__field'>
              <label htmlFor='category'>Category</label>

              <input type='text' name='category' id='category' />
            </div>

            <div className='add-category__field'>
              <label htmlFor='words'>words</label>

              <textarea name='words' rows='10' id='words'></textarea>
            </div>

            <div className='add-category__actions'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <div className='add-category__trigger'>
          <button className='btn' onClick={() => setShowCategory(true)}>
            Add category
          </button>
        </div>
      )}
    </div>
  );
}

export default AddCategory;
