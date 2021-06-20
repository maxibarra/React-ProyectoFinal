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
        <div style={{padding:"10px",paddingLeft:"65px",textAlign:"center",display:"flex",alignItems:"center"}}>
            <button style={{fontSize:"30px",display:"inline",color:"red",border:"none",background:"none"}} onClick={disminuirCount} > - </button> 
            <div style={{margin:"10px"}}>{count}</div>  
            <button style={{fontSize:"30px",display:"inline",color:"green",border:"none",background:"none"}}onClick={aumentarCount}> + </button> <br></br>
    
        </div>
    )
}



export default ItemCount;