'use client'
import { Contacts } from "./contact";
import { PencilIcon,TrashIcon } from '@heroicons/react/24/solid'

export const TableList = ({listContact}) => {
    return (<>
        <table className="w-full text-gray-500">
            <thead className="bg-gray-50 text-gray-700 uppercase">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {
                    listContact.map((contact, index) => (
                        <>
                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{contact.firstName}</td>
                                <td className="px-6 py-4">{contact.lastName}</td>
                                <td className="px-6 py-4">{contact.email}</td>
                                <td className="px-6 py-4">{contact.phone}</td>
                                <td className="px-6 py-4">
                                    <button className="rounded-md bg-indigo-600 px-3 py-2 m-1"><PencilIcon className="h-6 w-6 text-white"/></button>
                                    
                                    <button className="rounded-md bg-red-600 px-3 py-2  m-1"><TrashIcon className="h-6 w-6 text-white" /></button>
                                </td>
                            </tr>
                        </>
                    ))
                }
            </tbody>
        </table>
    </>);
}