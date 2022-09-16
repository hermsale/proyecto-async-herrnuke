
const BASE_API = 'https://graph.instagram.com/me';
const ACCESS_TOKEN = 'IGQVJXUHJ3ems2LVR0RFZAuQmRFYUdjelRaNDF3SGpQN0hnOHhKQktDS19Kd2I1c3o5elNXSXQyTnozQ2JKVGRYblRfVU43eGEzUlVVdVZAXbVA3TmpETDNqZAURQUEJoQlJiRmpzS0QwLVdoUVdGUDZANWgZDZD';

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
  })
