'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState, useEffect } from 'react'

export const FormRegister = ({ listContact, updateList, editContact }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');
    const inputName = useRef(null);

    const [edit, setEdit] = useState(false);

    const handleCancel = () => {
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setDni('');
        setEdit(false);
        inputName.current.focus();
    }

    const validateDni = () => {
        return listContact.findIndex((contact) => {
            return contact.dni == dni;
        });
    }

    const handleSubmit = () => {
        if ((name.trim().length > 0) &&
            (lastName.trim().length > 0) &&
            (email.trim().length > 0) &&
            (phone.trim().length > 0)) {
            if (!edit) {
                let contact = [{
                    dni,
                    firstName: name,
                    lastName,
                    email,
                    phone
                }];
                if (validateDni() == -1) {
                    updateList([...listContact, ...contact]);
                    handleCancel();
                }
                else {
                    alert("Error DNI")
                    inputName.current.focus();
                }
            }
            else {
                let index = validateDni();
                if (validateDni() == -1 || validateDni() == index) {
                    listContact[index].dni = dni;
                    listContact[index].firstName = name;
                    listContact[index].lastName = lastName;
                    listContact[index].email = email;
                    listContact[index].phone = phone;
                    updateList([...listContact]);
                    handleCancel();
                }
                else {
                    alert("Error DNI")
                    inputName.current.focus();
                }
            }


        }
        else {

        }
    }

    useEffect(() => {
        if (editContact != null) {

            setDni(editContact.dni);
            setName(editContact.firstName);
            setLastName(editContact.lastName);
            setPhone(editContact.phone);
            setEmail(editContact.email);
            setEdit(true)
        }
        console.log(editContact)
    }, [editContact])

    return (<>
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        DNI
                    </label>
                    <div className="mt-2">
                        <input
                            ref={inputName}
                            value={dni}
                            onChange={(e) => {
                                setDni(e.target.value)
                            }}
                            type="number"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input

                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


                <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone
                    </label>
                    <div className="mt-2">
                        <input
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                            id="phone"
                            name="phone"
                            type="text"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" onClick={handleCancel} className=" bg-red-600 rounded-md px-3 py-2  text-sm font-semibold leading-6 text-white hover:bg-red-500">
                    <FontAwesomeIcon icon={faXmark} className='h-6 w-6 text-white-500' /> Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <FontAwesomeIcon icon={faFloppyDisk} className='h-6 w-6 text-white-500' />
                    {edit ? 'Edit' : 'Save'}
                </button>
            </div>
        </div>
    </>);
}