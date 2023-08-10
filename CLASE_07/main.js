let dataPersona = [];
const addDataPersona = (firstName, lastName, birthday, address, status, dni, condition = true) => {
    let person = {
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if (condition) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }

}

const addFormPerson = () => {
    let firstName = document.getElementById("fistName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    if (findDniOne(dni.value) == -1) {
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value, dni.value);
        document.getElementById("formPerson").reset();
        dni.focus();
        document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
        messageAlert("Datos Guardados");
    }
    else {
        dni.focus();
        messageAlert("ERROR, EL DNI YA SE ENCUENTRA REGISTRADO", "error");
    }
}



const listPerson = (dataArray) => {
    let list = '';
    if (dataArray.length > 0) {
        dataArray.forEach((person,index) => {
            list += `<tr>
                    <td>${person.dni}</td>
                    <td>${person.firstName} ${person.lastName}</td>
                    <td>${person.birthday}</td>
                    <td>${person.address}</td>
                    <td>${person.status}</td>
                    <td><button type="button" onclick="deleteRegisterPerson(${person.dni})" class="btn btn-danger">ELIMINAR</button></td>
                    </tr>`;
        });
    }
    else {
        list = `<tr>
                    <td class="text-center" colspan="6">NO HAY REGISTRO FILTRADOS</td>
                </tr>`;
    }
    return list;
}

const findDniOne = (dni) => {
    return dataPersona.findIndex((person) => {
        return person.dni == parseInt(dni)
    })
}

const searchInput = () => {
    let search = document.getElementById("search").value;
    search = search.trim().toLowerCase();
    let filterData = filteDataPerson(search);

    document.getElementById("listPerson").innerHTML = listPerson(filterData);

}

const filteDataPerson = (search) => {
    return dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(search) ||
            person.lastName.toLowerCase().includes(search);
    });
}

const deleteRegisterPerson = (dni) =>{
    let position = findDniOne(dni);
    dataPersona.splice(position,1);
    document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
}

const messageAlert = (title, icon = 'success') => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 900
    })
}

/** 1.- agregar el boton de editar la data
 * 2.- hacer el guardado de la data
 */