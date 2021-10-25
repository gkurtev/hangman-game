import React, { Component } from 'react';
import Button from './Button';
import Categories from './Categories';

class SelectCategory extends Component {
  render() {
    return (
      <div className='select-category'>
        <div className='select-category__inner'>
          <div className='select-category__head'>
            <h1>Select</h1>
          </div>
          <div className='select-category__body'>
            <Categories />
          </div>

          <div className='select-category__actions'>
            <Button type='link' url='/'>
              Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectCategory;
