
const BASE_API = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = 'IGQVJXOC1WUzhxbl9rTkx5SWlyeEFBdlJERjNhMkhtRXV5eHRJdE0xZAGpOUlBzdTRxRTRDNjRuQ3RaVFJLNnBlUWt0dFRkNEk0aXh6bFptUXRZAM00xWlZAJV3ctZAFppRjktU1FjZAU5ib3pXSl9EYmY5M3FiRnFKRXpCNGlJ';

const URL = `${BASE_API}?fields=id,media_url,permalink&access_token=${ACCESS_TOKEN}`;

const contentInstagram = null || document.getElementById('contentInstagram');
const body = document.querySelector('body');

const username = document.getElementById('username');

async function getUserInfo() {
	const response = await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`)
	const userInfo = await response.json()
	console.log(userInfo)

	username.innerHTML = userInfo.username;
	return userInfo
  }
  
  getUserInfo()

  async function getUserMediaInfo() {
	const response = await fetch(`${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`)
	const userMediaInfo = await response.json()
	console.log(userMediaInfo)
	return userMediaInfo
  }
  
getUserMediaInfo();

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
  })
