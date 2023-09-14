'use client';
import { useThemeContext } from "../context/theme";

const about = ()=>{
    const {color,setColor}= useThemeContext();
    return (
        <section className={color+' h-screen'}>
        <div className="p-8">
            <h1 className="text-4xl py-4 ">Page about</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
                setColor('bg-blue-200')
            }}> Cambiar color</button>
        </div>
        </section>
    );

}
export default about;