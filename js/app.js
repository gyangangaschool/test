const image = document.getElementById('file');
document.getElementById("sub").addEventListener("click", function () {
    clear();

    const find = document.querySelector('#search').value;
    const link = document.querySelector('#link');
    
    if (find === search.value) {

        var y = link.href = "./halltickets/" + find + ".pdf";
        const img = document.createElement("pdf");
        const t = img.src = "./halltickets/" + find + ".pdf";

        image.appendChild(img)
        link.textContent = y;

    }
    if (find =! search.value) {
        link.textContent = ("Invalid Response");
    }

    function clear() {
        while (image.firstChild)
            image.removeChild(image.firstChild)
    }
});