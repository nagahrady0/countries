import React, { useState , useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {select} from './../../store/actioncreator.js';

import "./selectbox.css";

const SelectBox = () => {
  const [selectedOption, setSelectedOption] = useState('default');
  
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'default', label: 'Filter by region', disabled: true },
    { value: 'Africa', label: 'africa' },
    { value: 'Americas', label: 'america' },
    { value: 'Asia', label: 'asia' },
    { value: 'Europe', label: 'europe' },
    { value: 'Oceania', label: 'oceania' },
  ];

useEffect(()=>{
    dispatch(select(selectedOption));
},[selectedOption]);
  
  
  const elements =options.map(option => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))
  


  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
		{elements}
      </select>
    </div>
  );
};

export default SelectBox;
