import React,{useState} from 'react'   

const Min = 1;
const Max = 20;
const ItemCount = () => {

    const [count, setCount] = useState(Min);

     function aumentarCount(){
        let valor = count + 1;
        if(valor <= Max){
            setCount(count + 1);
        }
         
     };

    function disminuirCount(){
        let valor = count - 1;
        if(valor >= Min){
            setCount(count - 1);
        }
    }; 
    
    
    
    return(
        <div>
            <button onClick={aumentarCount} > + </button> 
            <div>{count}</div>  
            <button onClick={disminuirCount}> - </button> <br></br>
    
        </div>
    )
}



export default ItemCount;