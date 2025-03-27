/* VARIABLES */
let listElements = []

/* METHODS */
const refreshList = () => {
    console.log("refreshList");
    let list = document.getElementById("list");
    let newList = "";
    console.log(listElements);

    for (let i = 0; i < listElements.length; i++)
    {
        if (listElements[i].finishDate == null)
        {
            newList +=
            `
            <tr>
                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                <td>${listElements[i].text}</td>
                <td>${new Date(listElements[i].creationDate).toDateString()}</td>
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