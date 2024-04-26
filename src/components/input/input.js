import React, { useState , useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {input} from './../../store/actioncreator.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './input.css';


const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
    const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(input(inputValue));
},[inputValue]);

  return (
    <div>

      <i className="bi bi-search icon-search"></i>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="search for a country..."
      />
    </div>
  );
};

export default Input;
