import React from 'react';
import '../styles/ItemListConteiner.css';
import ItemDetailConteiner from './ItemDetailConteiner';


function ItemListConteiner(props){
    return(
        <div className="ItemConteiner">
            <h3>{props.greeting}</h3>
            <ItemDetailConteiner/>
        </div>
    )
}


export default ItemListConteiner;