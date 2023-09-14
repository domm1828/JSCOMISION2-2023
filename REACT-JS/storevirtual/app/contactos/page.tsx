'use client'
import Button from '@/app/components/button';
import { NewButton } from '@/app/components/button2';

const contatos = ()=>{
    const edad = 80;
    const objectData = { name:'juan',age:'89'}
    return (
        <div className="p-8">
            <h1 className="text-4xl py-4 ">Page Contactos</h1>

            <Button name='Juan' age='18'>
                <p>Ejemplo de acciones</p>
            </Button>
            <Button name='Pedro' age={edad} />

            <NewButton valor='1' name='Pedro' age={objectData} />
        </div>
    );

}
export default contatos;