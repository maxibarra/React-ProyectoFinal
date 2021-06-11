import React,{useState} from 'react'   


const ItemCount = () => {

    const [initial, setClicks] = useState(1);

     function aumentarCount(){
         initial <= 19 ?
         setClicks(initial+1) : console.log("No hay mas stock disponible");
     };

    function disminuirCount(){
        initial > 1 ?
        setClicks(initial-1) : console.log("No puede ser menor a 1");
    }; 
    
    
    
    return(
        <div>
            <button onClick={aumentarCount} > + </button> 
            <div>{initial}</div>  
            <button onClick={disminuirCount}> - </button> <br></br>
            <button>Agregar al carrito</button>
        </div>
    )
}



export default ItemCount;