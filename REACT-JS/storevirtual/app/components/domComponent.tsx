'use client'
import { useRef, useState } from "react"

/** UseRef 
 * ref
*/
export const DomComponent = () =>{
    const [play,setPlay] = useState(false);
    const inputRef= useRef(null);
    const countRef = useRef(0);
    const listRef = useRef(null);
    const videoRef = useRef(null);

    const handleClick = () =>{
        countRef.current = countRef.current +1;
        alert(countRef)
    }
    const handleInput = () =>{
        inputRef.current.focus();

        const ul = listRef.current;
        ul.querySelectorAll('li')[0]
    }

    const handleClickVideo = ()=>{
        const playing =  !play;
        setPlay(playing);
        if(playing){
            videoRef.current.play();
        }
        else{
            videoRef.current.pause();
        }
    }
    return (<>
    <div className="p-8">
    <button onClick={handleClick}> Click</button>

    <input ref={inputRef}/>
    <button onClick={handleInput}> Focus en el input </button>

     <ul ref={listRef}>
        <li>Elemento</li>
        <li>Elemento</li>
        <li>Elemento</li>
        <li>Elemento</li>
     </ul>

        <button onClick={handleClickVideo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
             {play ? 'Pause'  : 'Play' }
        </button>
        <video ref={videoRef}
        onPlay={()=>{setPlay(true)}}
        onPause={()=>{setPlay(false)}}
        >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video> 
     </div>
    </>);
}