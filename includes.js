function loadHTML(selector, file) {
    fetch(file) //Load the file (e.g, includes/header.html)
        .then(response => {
            if(!response.ok) throw new Error(`Could not load ${file}`);
            return response.text(); //Convert the response to plain text (HTML)
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data; //Insert it into the page
        })
        .catch(error => console.error(error)); //Handle errors (like file not found)
}