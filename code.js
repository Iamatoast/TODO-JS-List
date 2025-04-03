/* VARIABLES */
let listElements = [];

/* METHODS */
const refreshList = () => {
    let list = document.getElementById("list");

    let newList = "";

    for (let i = 0; i < listElements.length; i++) {
        let isChecked = document.getElementById(`checkbox-${listElements[i].id}`)?.checked || false;

        if (isChecked) //FIX
        {
            listElements[i].finishDate = Date();
        }
        else {
            finishDate = null;
        }

        if (listElements.length > 0) {
            newList +=
                `
            <tr id="${listElements[i].id}" onclick="select(${listElements[i].id})">
                <th scope="row">${listElements[i].id + 1}</th>
                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="checkbox-${listElements[i].id}" ${isChecked ? "checked" : ""}></th>
                <td>${listElements[i].text}</td>
                <td>${listElements[i].creationDate ? new Date(listElements[i].creationDate).toDateString() : "???"}</td>
                <td>${listElements[i].finishDate ? new Date(listElements[i].finishDate).toDateString() : "???"}</td>
            </tr>
            `;
        }
        else {
            newList +=
                `
            <tr>
                <th scope="row">1</th>
                <th scope="row">
                    <input class="form-check-input" type="checkbox" value="" id="checkbox-0">
                </th>
                <td>No hay elementos</td>
                <td>???</td>
                <td>???</td>
            </tr>
            `;
        }
    }

    list.innerHTML = newList;
}

const addListElement = () => {
    let text = document.getElementById("text");

    let listElement = {
        id: listElements.length,
        text: text.value,
        creationDate: Date(),
        finishDate: null
    }

    listElements.push(listElement);

    refreshList();
    //Agarrar por id la ubicacion del la fecha que queres cambiar (poner id a la fecha). Una vez que se le de a click, modificar el fecha.innerhtml y agregar el valor calculado
    let input = document.querySelectorAll(".form-check-input")

    input.forEach((element) => {
        //el click puede cambiar por change, investigalo
        element.addEventListener("change", () => {

        })


    })
}

const removeListElement = (id) => {
    listElements.splice(id, 1);
    listElements.forEach((el, index) => el.id = index);

    refreshList();
}

const select = (id) =>{
	let task = document.getElementById(id);
	task.classList.toggle("checked");
	task.classList.toggle("table-active");
}
const deleteTask = () =>{
	let tasks = document.querySelectorAll(".checked");
	if(tasks === undefined || tasks.length == 0){
		alert("No hay tareas seleccionadas");
	}
	else{
		console.log(tasks[0].id);
		console.log(listElements);
		for(let i = 0; i < tasks.length; i++){
			listElements.splice(tasks[i].id, 1);
		}
		console.log(listElements);
		refreshList();
	}
}
