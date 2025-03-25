/* VARIABLES */
let listElements = []

/* METHODS */
const refreshList = () => {
    list = document.getElementById("list");

    list.innerHTML = '';

    for (let i; i < listElements.length; i++)
    {
        if (listElements[i].finishDate == null)
        {
            list.innerHTML =
            ``
              listElements[i].text
              listElements[i].creationDate  
            ``    
        }
        else
        {
            list.innerHTML =
            `
            <tr>
                <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                <td>${listElements[i].text}</td>
                <td>${listElements[i].creationDate}</td>
                <td>${listElements[i].finishDate}</td>
            </tr>
            `
        }
    }
}

const addListElement = () => {
    let text = document.getElementById("text");

    let listElement = {
        id: listElements.length,
        text: text,
        creationDate: Date.toDateString(),
        finishDate: null
    }

    listElements.push(listElement);
}

const removeListElement = (id) => {
    listElements.splice(id, 1)
}