import React from 'react';
import AddCategory from './AddCategory';
import EditableCategories from './EditableCategories';
import Button from './Button';

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
            <Button type='link' url='/'>
              Back
            </Button>

            <AddCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
