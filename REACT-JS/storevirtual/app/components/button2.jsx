import { useState, useEffect } from 'react';

export const NewButton = (props)=>{
    console.log(props)
    const [list,setList] = useState([]);
    const [count,setCount] = useState(0);

    const addElements = (x)=>{
        let arrayList = []
        for(let i=0;i<=x;i++){
            let addList = <li key={i}>{i}</li>;
            //setList(list=>[...list,addList])
            arrayList.push(addList);
        }
       // return arrayList;
        setList(arrayList);
    }

    useEffect(()=>{
        addElements(10)
    },[])

    useEffect(()=>{
        if(count>0){
            addElements(20)
        }
    },[count])

    return (
        <>
        <p>hola prueba comonents {props.name} {props.age.name}</p>
        {props.valor==='0' ? <p>hola..</p> : <p>dos...</p>}
            {
                (()=>{
                    if(props.valor == 0){
                        return (<p>Algo.....</p>)
                    }
                    else{
                        return (<p>otra..</p>)
                    }
                })()
            }
            <ul>
                {list}
            </ul>
            <button onClick={()=>{
                setCount(1);
            }}>Cambiar</button>
       
        </>
    );
}