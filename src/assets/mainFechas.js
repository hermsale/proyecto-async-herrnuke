
const BASE_API = 'https://graph.instagram.com/me';
const ACCESS_TOKEN = 'IGQVJVdlFrNUwyV09CSUVQT1k2OVNBeEhMZAUJhUEtOR2NZAYVRQTG1zbkpEZAlA5b2xkVTRpMFFaYUctbUs4ZAm5vNFBMRzZAWN0tmeDRvTHJ6cXhBX0NWelFpbWNBT0N5OWRHcTlneGMyOW1XV0p1VWYtNgZDZD';

const URLProfile = `${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`;
const URLMedia = `${BASE_API}/media?fields=id,media_url,permalink&access_token=${ACCESS_TOKEN}`;


const contentInstagram = null || document.getElementById('contentInstagram');
const body = document.querySelector('body');

const username = document.getElementById('username');

async function getUserInfo() {
	const response = await fetch(URLProfile)
	const userInfo = await response.json()
	console.log(userInfo)

	username.innerHTML = userInfo.username;
	return userInfo
  }
  
  getUserInfo()

  async function getUserMediaInfo() {
	const response = await fetch(URLMedia)
	const userMediaInfo = await response.json()
	console.log(userMediaInfo)
	return userMediaInfo
  }
  

getUserMediaInfo()
	.then(media => {
	let view = `
	${media.data.map(posts => `
	<div class="group relative" >
		<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"> 
			<img src="${posts.media_url}"class="w-full">
		</div>
	</div>
	`).slice(0).join('')}`;
	contentInstagram.innerHTML = view;
  }).catch(error =>{
	let viewError = `
	<div style="background-color:#404040; color:white"> 
            <h1> Ocurrio un error! Estamos trabajando en ello... </h1>
            <span class="block xl:inline">Recuerda visitarnos en: </span>
            <span class="block xl:inline">IG</span>
            <span class="block text-indigo-600 xl:inline" style="color:white">@Herrnuke</span>
    </div>
	`;
	console.log(error)
	contentInstagram.innerHTML = viewError;
  })
