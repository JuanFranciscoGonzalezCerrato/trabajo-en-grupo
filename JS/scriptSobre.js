let elementImage1 = document.getElementById("imgHealth1");
let elementName1 = document.getElementById("name1");

let elementImage2 = document.getElementById("imgHealth2");
let elementName2= document.getElementById("name2");

let elementImage3 = document.getElementById("imgHealth3");
let elementName3= document.getElementById("name3");

let elementImage4 = document.getElementById("imgHealth4");
let elementName4= document.getElementById("name4");

let elementImage5 = document.getElementById("imgHealth5");
let elementName5 = document.getElementById("name5");

let initialCard = document.getElementById("initialCard");
let fiveCards = document.getElementById("fiveCards")

let button = document.getElementById("fiveImage");

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
            let randomIndex1 = Math.floor(Math.random() * data.length);
            let randomIndex2 = Math.floor(Math.random() * data.length);
            let randomIndex3 = Math.floor(Math.random() * data.length);
            let randomIndex4 = Math.floor(Math.random() * data.length);
            let randomIndex5 = Math.floor(Math.random() * data.length);
            elementImage1.src = data[randomIndex1].img;
            elementName1.innerHTML = data[randomIndex1].name;
            elementImage2.src = data[randomIndex2].img;
            elementName2.innerHTML = data[randomIndex2].name;
            elementImage3.src = data[randomIndex3].img;
            elementName3.innerHTML = data[randomIndex3].name;
            elementImage4.src = data[randomIndex4].img;
            elementName4.innerHTML = data[randomIndex4].name;
            elementImage5.src = data[randomIndex5].img;
            elementName5.innerHTML = data[randomIndex5].name;
        })
        .catch(error => console.error("Error fetching data:", error));
}
button.addEventListener("click", function() {
    window.getRamdom();
    initialCard.style.display = "none";
    fiveCards.style.display = "flex";

    $('.card').click(function() {
        $(this).toggleClass('flipped');
        $('.shadow').toggleClass('bigger');
      })
    
});


