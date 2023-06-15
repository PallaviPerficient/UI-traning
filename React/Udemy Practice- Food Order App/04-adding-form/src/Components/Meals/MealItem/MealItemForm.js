import React from 'react';
import './MealItemForm.css';
import InputField from '../../UI/InputField';

const MealItemForm = (props) => {
  return (
    <form className="form">
      <InputField
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm;