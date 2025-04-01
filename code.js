/* VARIABLES */
let listElements = [];

/* METHODS */
const refreshList = () => {
    console.log("refreshList");
    let list = document.getElementById("list");
    console.log(list)

    let newList = "";

    for (let i = 0; i < listElements.length; i++)
    {
        let isChecked = document.getElementById(`checkbox-${listElements[i].id}`)?.checked || false;

        if (isChecked) //FIX
        {
            listElements[i].finishDate = Date();
        }
        else
        {
            finishDate = null;
        }

        if (listElements.length > 0)
        {
            newList +=
            `
            <tr id="">
                <th scope="row">${listElements[i].id + 1}</th>
                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="checkbox-${listElements[i].id}" ${isChecked ? "checked" : ""}></th>
                <td>${listElements[i].text}</td>
                <td>${listElements[i].creationDate ? new Date(listElements[i].creationDate).toDateString() : "???"}</td>
                <td>${listElements[i].finishDate ? new Date(listElements[i].finishDate).toDateString() : "???"}</td>
            </tr>
            `;
        }
        else
        {
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