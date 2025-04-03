/* VARIABLES */
let listElements = [];

/* METHODS */
const refreshList = () => {
    let list = document.getElementById("list");

    let newList = "";

    for (let i = 0; i < listElements.length; i++) {
	listElements[i].id = i;

        if (listElements[i].checked) //FIX
        {
            listElements[i].finishDate = Date();
        }
        else {
            listElements[i].finishDate = null;
        }

        if (listElements.length > 0) {
            newList +=
                `
            <tr id="${i}" onclick="select(${i})">
                <th scope="row">${i + 1}</th>
                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="checkbox-${listElements[i].id}" ${listElements[i].checked ? "checked" : ""} onclick="checkTask(${i})"></th>
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
	    id: 0,
        text: text.value,
        creationDate: Date(),
        finishDate: null,
	    checked: false
    }

    listElements.push(listElement);

    refreshList();
    
}

const removeListElement = (id) => {
    listElements.splice(id, 1);
    listElements.forEach((el, index) => el.id = index);

    refreshList();
}
const checkTask = (id) => {
	let task = listElements[id];
	task.checked = !task.checked;
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
		let numEliminado = 0;
		for(let i = 0; i < tasks.length; i++){
			listElements.splice(tasks[i].id - numEliminado, 1);
			numEliminado++;
		}
		refreshList();
	}
}
const showFastest = () =>{
	let task = [listElements[0]];
	let text;
	for(let i = 1; i < listElements.length; i++){
		if(task[0].finishDate == null) task = [listElements[i]];
		else if(listElements[i].finishDate > task[0].finishDate) task = [listElements[i]];
		else if(listElements[i].finishDate == task[0].finishDate) task.push(listElements[i]);
	console.log(task[0]);
	}
	if(task[0].finishDate == null){
		text = "Ninguna tarea se ha completado";
	}
	else if(task.length == 1){
		text = `La tarea mas rapida fue la numero ${task[0].id + 1}`;
	}
	else{
		text = "Las tareas mas rapidas fueron: ";
		for(let i = 0; i < task.length; i++){
			if(i + 1 == task.length) text += " y ";
			text += "la numero " + (task[i].id + 1);
			if(i + 2 != task.length && i + 1 != task.length) text += ", ";
		}
	}
	alert(text);
}
