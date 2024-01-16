const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/EX1_572';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4170662b57mshc05e6ad8540166fp1928d0jsn93551b80c778',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

async function verify(){
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

verify();

document.addEventListener('DOMContentLoaded', () => {
    cargarCarta();
});

async function cargarCarta() {
const imagen =document.getElementById("image");
const imagen2 =document.getElementById("image2")

const randomCard = Math.floor(Math.random() * (598 - 556 + 1)) + 556;
const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${randomCard}`);

const data = await response.json();

imagen.src = data.img;
imagen2.src= data.img;
};

// 556-598