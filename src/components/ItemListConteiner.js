import React from 'react';
import '../styles/ItemListConteiner.css';
import ItemList from './ItemList';


function ItemListConteiner(props){
    return(
        <div className="ItemConteiner">
            <h3>{props.greeting}</h3>
            <ItemList/>
        </div>
    )
}


export default ItemListConteiner;