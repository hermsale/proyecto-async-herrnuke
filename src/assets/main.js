

// código importado de https://rapidapi.com/ytdlfree/api/youtube-v31/
// Para implementar YouTube en el proyecto 
console.log('entro');
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCxfYb0xYwM9-AnKlxNF1zBQ&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById('content');
const body = document.querySelector('body');
const btnVideoId = document.querySelector('#btn-videoId');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		'X-RapidAPI-Key': '1f8a6aaa2bmsh0d494ed21e51951p1ee721jsne008e3968bd8'
	}
};



// fetch('', options)
// 	.then(response => response.json()) // obtenemos la primera respuesta y la transformamos a JSON 
// 	.then(response => console.log(response)) 
// 	.catch(err => console.error(err));

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}
// target="_blank"
// creamos una funcion async anonima, para la carga de la funcion fetchData
(async () => {
    try{

        const channelVideos = await fetchData(API); // cargamos el canal de videos 
        console.log('consulta');
        // generamos un template en base a la logica del html, para cargarle lo que recibimos de la API 
        // hacemos un map de videos.item para regresar un nuevo arreglo, pero con la transformacion del template de cada uno de los elementos del array que obtengo
        let view = `
            ${channelVideos.items.map(video => `
            <div class="group relative" >
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none" id="btn-videoId"> 
                    
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    
                    
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm  text-neutral-300">
                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" onclick=console.log('entra a la lista de videos en YT') target="_blank">
                        <span aria-hidden="true" class="absolute inset-0">
                        </span>
                        </a>
                        ${video.snippet.title}   <br>  
                        ${video.snippet.description}
                    </h3>
                </div>
            </div>
            `).slice(0,3).join('')} 
        `;
        content.innerHTML = view; // agregamos a content lo que haya en view
        // console.log(channelVideos); // utilizado para visualizar el objeto 
    } 
    catch(error){
        console.error(error);
        let viewError = `
        <div style="background-color:#404040; color:white"> 
            <h1> Ocurrio un error! Estamos trabajando en ello... </h1>
            <span class="block xl:inline">Recuerda visitarnos en: </span>
            <span class="block xl:inline">IG</span>
            <span class="block text-indigo-600 xl:inline" style="color:white">@Herrnuke</span>
        </div>
        `
        body.innerHTML = viewError;
    }
})();


