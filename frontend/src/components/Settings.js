import { Link } from 'react-router-dom';
import React from 'react';
import AddCategory from './AddCategory';
import EditableCategories from './EditableCategories';

function Settings() {
  return (
    <div className='settings'>
      <div className='settings__inner'>
        <div className='settings__content'>
          <div className='settings__head'>
            <h1>SETTINGS</h1>
          </div>

          <div className='settings__body'>
            <EditableCategories />
          </div>

          <div className='settings__actions'>
            <Link to='/'>Back</Link>

            <AddCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
