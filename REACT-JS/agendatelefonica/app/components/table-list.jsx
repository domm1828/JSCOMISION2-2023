'use client'
import { Contacts } from "./contact";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export const TableList = ({ listContact, handleEditContact, handleDeleteContact }) => {
    const [filter,setFilter] = useState('');
    const [filterContact,setFilterContact] = useState(listContact); 

    const handleFilter = () =>{
        let search = filter.trim().toLowerCase();  
        let filters = listContact.filter((contact)=>{
            return contact.firstName.toLowerCase().includes(search) || contact.lastName.toLowerCase().includes(search)
        });
        setFilterContact(filters);
    }

    useEffect(()=>{
       // handleFilter();
       setFilter('');
        setFilterContact(listContact);
    },[listContact]);

    return (<>
        <div className="m-2">
            <input
                value={filter}
                onChange={(e)=>{setFilter(e.target.value)}}
                type="text"
                name="filter"
                id="filter"
                onKeyUp={handleFilter}
                placeholder="Filter by Full name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>
        <table className="w-full text-gray-500">
            <thead className="bg-gray-50 text-gray-700 uppercase">
                <tr> 
                    <th>DNI</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterContact.map((contact, index) => (
                        <>
                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{contact.dni}</td>
                                <td className="px-6 py-4">{contact.firstName}</td>
                                <td className="px-6 py-4">{contact.lastName}</td>
                                <td className="px-6 py-4">{contact.email}</td>
                                <td className="px-6 py-4">{contact.phone}</td>
                                <td className="px-6 py-4">
                                    <button type="button" onClick={() => { handleEditContact(contact, index) }} className="rounded-md bg-indigo-600 px-3 py-2 m-1"><PencilIcon className="h-6 w-6 text-white" /></button>

                                    <button type="button" onClick={() => { handleDeleteContact(contact.dni) }} className="rounded-md bg-red-600 px-3 py-2  m-1"><TrashIcon className="h-6 w-6 text-white" /></button>
                                </td>
                            </tr>
                        </>
                    ))
                }
            </tbody>
        </table>
    </>);
}