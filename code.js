/* VARIABLES */
let listElement = {
    text: null,
    creationDate: null,
    finishDate: null
}

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

