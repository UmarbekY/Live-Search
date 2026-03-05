const search = document.getElementById("search");
const fruits = document.getElementById("fruits");

search.addEventListener("keyup", function() {
    let value = search.value.toLowerCase();
    let item = fruits.getElementsByTagName("li");

    Array.from(item).forEach(element => {
        let text = element.textContent.toLowerCase();

        if(text.includes(value)) {
            element.style.display = "list-item"
        } else {
            element.style.display = "none";
        }
    });
});