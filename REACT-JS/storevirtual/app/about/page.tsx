'use client';
import { DomComponent } from "../components/domComponent";
import { useThemeContext } from "../context/theme";
import { InputComponent } from './../components/InputComponent';
import { useState } from 'react';

const about = ()=>{
    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const {color,setColor}= useThemeContext();
    return (
        <section className={color+' h-screen'}>
        <div className="p-8">
            <h1 className="text-4xl py-4 ">Page about</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
                setColor('bg-blue-200')
            }}> Cambiar color</button>
        </div>

        <DomComponent />

        <form className="p-3">
            <p>{name} {lastName}</p>
            <InputComponent changeValue={setName} value={name} cssdiv='p-3' label='Nombres Completos' placeholder='Nombres completos' className='bg-blue-500 p-3' />
            <InputComponent changeValue={setLastName} value={lastName}  cssdiv='p-3' label='Apellidos Completos' placeholder='Apellidos completos' className='bg-blue-500 p-3' />
        </form>
        </section>
    );

}
export default about;