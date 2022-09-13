const API = 'https://instagram130.p.rapidapi.com/account-info?username=herrnuke'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a058f4537msh591192a9a68ae4bp1b0a6fjsn310795b2c879',
		'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
	}
};

fetch(API, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));