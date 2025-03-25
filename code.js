let listElements = []

const refreshList = () => {
    list = document.getElementById("list");

    list.innerHTML = '';

    for (let i; i < listElements.length; i++)
    {
        list.innerHTML =
        ``
          listElements[i]  
        ``
    }
}