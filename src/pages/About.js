import React, {useEffect,useState} from 'react'
import {getFirestore} from '../firebase/firebase'
import Nosotros from '../components/Nosotros';


function About() {
    const[productos,setProductos] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        const db = getFirestore()
        const productCollection = db.collection("productos")
        productCollection.get().then(
            (querySnapshot)=>{
                if(querySnapshot.size === 0){
                    console.log('no hay resultados')
                }
                setProductos(querySnapshot.docs.map(doc => doc.data()))
            }
            ).catch((error)=>{console.log('error searching items',error)}
            ).finally(()=>{setLoading(false)});
    },[]);


    return <div>
        <Nosotros/>
      {console.log(productos)}
    </div>
    
}

export default About;
