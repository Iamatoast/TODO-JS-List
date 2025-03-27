/* VARIABLES */
let listElements = []

/* METHODS */
const refreshList = () => {
    console.log("refreshList");
    let list = document.getElementById("list");
    console.log(list)
    let newList = "";
    console.log(listElements);

    for (let i = 0; i < listElements.length; i++)
    {
        console.log(document.getElementById(i).checked)
        if (document.getElementById(i).checked || document.getElementById(i).checked == null) // FIX
        {
            newList +=
            `
            <tr id="${listElements[i].id}">
                <th scope="row">${listElements[i].id + 1}</th>
                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                <td>${listElements[i].text}</td>
                <td>${new Date(listElements[i].creationDate).toDateString()}</td>
                <td>${listElements[i].finishDate ? new Date(listElements[i].finishDate).toDateString() : "???"}</td>
            </tr>
            `
        }
        else
        {
            newList +=
            `
            <tr>
                <th scope="row">${listElements[i].id + 1}</th>
                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked></th>
                <td>${listElements[i].text}</td>
                <td>${listElements[i].creationDate ? new Date(listElements[i].creationDate).toDateString() : "???"}</td>
                <td>${listElements[i].finishDate ? new Date(listElements[i].finishDate).toDateString() : "???"}</td>
            </tr>
            `
        }
    }
    console.log(newList);
    list.innerHTML = newList;
}

const addListElement = () => {
    console.log("addListElement");
    let text = document.getElementById("text");

    let listElement = {
        id: listElements.length,
        text: text.value,
        creationDate: Date(),
        finishDate: null
    }

    listElements.push(listElement);

    refreshList();
}

const removeListElement = (id) => {
    console.log("removeListElement");
    listElements.splice(id, 1);
    listElements.forEach((el, index) => el.id = index);

    refreshList();
}