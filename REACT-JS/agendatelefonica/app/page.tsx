
'use client'
import { FormRegister } from '@/app/components/form-register';
import { TableList } from '@/app/components/table-list';
import { useState, useEffect } from 'react';
export default function Home() {

  const [contacts,setContacts ] = useState([]);
  const [editContact, setEditContact] = useState(null);


  const handleEditContact = (contact:any,index:number) =>{
    let elements={index};
    //spread iterable
    setEditContact({...contact,...elements});
  }

  const handleDeleteContact = (index:number) =>{
      contacts.splice(index,1);
      setContacts([...contacts]);
  }

  useEffect(()=>{
    console.log(contacts)
  },[contacts])



  return (
    <main className="p-12">

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormRegister listContact={contacts} updateList={setContacts} editContact={editContact} />
        </div>
        <div>
          <TableList  listContact={contacts} handleEditContact={handleEditContact} handleDeleteContact={handleDeleteContact} />
        </div>
      </div>
    
    </main>
  )
}
