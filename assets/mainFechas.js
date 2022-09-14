// documentacion fc dev https://developers.facebook.com/apps/3373431092940569/instagram-basic-display/basic-display/

// claves instagram 
const appId = '3373431092940569';
const appSecret = '665d182c8bc0852f494910f6d9cdea78';
const token = 'IGQVJVZAWt1REJlRG5aLXVjLXZAvRzh3aFpxeXFNd1JJeENZAcFFzSEczWEt5dTE2bVpiZADZAFaTNrVS03RDkwNkhndTc2WEs0bWwxNVFqZA2k2TmZAGRGcyQ3NVd19oYkNYYWphRW5SeVR6VmFvbm1RVTkyRQZDZD';

const contentInstagram = document.getElementById('contentInstagram');

const URL = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${token}`;

console.log(URL);

const API = 'https://instagram130.p.rapidapi.com/account-info?username=herrnuke'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a058f4537msh591192a9a68ae4bp1b0a6fjsn310795b2c879',
		'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
	}
};




// fetch(API, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// async function fetchData(urlApi){
//     const response = await fetch(urlApi,options);
//     const data = await response.json();
// 	console.log(data);
//     return data;
// }

// fetchData(API);

// (async () =>{
// 	try{
// 		const postInstagram = await fetchData(API);
// 		let view = `
// 		// ${postInstagram.items.map}
// 		`
// 	}
// })