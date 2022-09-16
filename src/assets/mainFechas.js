const BASE_API = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = 'IGQVJWc1dNRTU2azJrekl3X0tuSXdUcG5Ba1JMd2h2dTlUSkRmX3RHX2xvN2ZAyTVh5djN5ekdMRHV6NXFaWUp0OUhNdTZAUQlpZAbUtFcWx5d3QxZA2EteWhxdlh5M3g5VmhRdlVsYnI4T21VN2pJRmhtUlp1TEV3YW1ZAcnJj';

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
