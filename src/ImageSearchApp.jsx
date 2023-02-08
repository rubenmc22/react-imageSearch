import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const ImageSearchApp = () => {

    const [ categories, setcategories ] = useState([ ]);
    //console.log(categories);

    const onAddCategory = (newCategory) => {
      //  console.log(newCategory);

        if(categories.includes(newCategory)) return
        setcategories([ newCategory , ...categories ]);
        
    }

    return (
        <>
            {/* Titulo */}
            <h1>ImageSearchApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory = { (event) => onAddCategory(event) }
            />
              
            {/* Listado de Gif */}
                {                                   //Return    
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={category} 
                            category={category}  />         
                    
                    ))
                }
            {/* Gif Item */}
        </>
    )
}
