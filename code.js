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
            ``
            listElements[i].text
            listElements[i].creationDate
            listElements[i].finishDate
            ``    
        }
    }
}

const addListElement = () => {
    let text = document.getElementById("text");
    let creationDate = document.getElementById("creationDate");

    let listElement = {
        text: text,
        creationDate: creationDate,
        finishDate: null
    }

    listElements.push(listElement);
}