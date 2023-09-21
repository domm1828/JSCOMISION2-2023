
'use client'
import { FormRegister } from '@/app/components/form-register';
import { TableList } from '@/app/components/table-list';
import { useState, useEffect } from 'react';
export default function Home() {

  const [contacts,setContacts ] = useState([]);

  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (
    <main className="p-12">

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FormRegister listContact={contacts} updateList={setContacts} />
        </div>
        <div>
          <TableList  listContact={contacts} />
        </div>
      </div>
    
    </main>
  )
}
