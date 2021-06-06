import React from 'react'
import './ItemListConteiner.css'

function ItemListConteiner(props){
    return(
        <div className="ItemConteiner">
            <h3>{props.greeting}</h3>
        </div>
    )
}


export default ItemListConteiner;