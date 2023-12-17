let elementImage = document.getElementById("imgHealth");
let elementName = document.getElementById("name");
let button = document.getElementById("changeImage");

let elementImage1 = document.getElementById("imgHealth1");
let elementName1 = document.getElementById("name1");
let button1 = document.getElementById("changeImage1")


const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '16dbc09bf0mshbd605ba35088dbcp136201jsn11353c161ca8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

function getRamdom() {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.length);
            elementImage.src = data[randomIndex].img;
            elementName.innerHTML = data[randomIndex].name;
        })
        .catch(error => console.error("Error fetching data:", error));
}

function getRamdom1() {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            let randomIndex1 = Math.floor(Math.random() * data.length);
            elementImage1.src = data[randomIndex1].img;
            elementName1.innerHTML = data[randomIndex1].name;
        })
        .catch(error => console.error("Error fetching data:", error));
}



button.addEventListener("click", getRamdom);
button1.addEventListener("click", getRamdom1);

window.onload = getRamdom;
window.onload = getRamdom1;
