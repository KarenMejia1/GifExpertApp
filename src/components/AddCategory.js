import React from 'react';
import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) =>{

    const[inputValue, setInputValue] = useState('');

    //Cambiar Input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //
    const handlesubmit = (e) => {
        e.preventDefault();
        
        //Para no inserta datos vacios
        if(inputValue.trim().length>2){
            //setCategories
        setCategories(cats => [ inputValue, ...cats]);
        setInputValue(''); 
        }

        
        
    }

    

    return (
        <form onSubmit={ handlesubmit }>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>         
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}