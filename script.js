const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8cdf76e32emsh1f9d83de6474589p12529cjsnb0dc6ef04525',
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