import { useState } from "react";
import { ImageSearchApp } from "../ImageSearchApp";


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState(''); //Hook de estado
  //  console.log(setcategories);
    //Desectrucutura event -> target
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
        //console.log(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const inputValueClean =  inputValue.trim();
    
        if(inputValueClean.length <= 1) return;
       // console.log(inputValueClean);
        onNewCategory(inputValueClean);
        setInputValue('');

    }

  return (
   <form onSubmit={ (event) => onSubmit(event)}>
        <input
                type="text"
                placeholder="Busca un Gifs"
                //onChange={(event) => onInputChange(event)}  Forma 1
                onChange={ onInputChange }  //Forma 2
                value= { inputValue }

        />
   </form>
   
    
  )
}
