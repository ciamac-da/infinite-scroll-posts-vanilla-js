const postsContainer = document.getElementById("posts-container")
const loading = document.getElementById("loader")
const filter = document.getElementById("filter")

let limit = 3;
let page = 1;


const getPosts = async() => {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
const data = await res.json()
return data
}

// Show posts in DOM
const showPosts = async()  => {
const posts = await getPosts()
posts.forEach( post => {
const postEL = document.createElement("div")
postEL.classList.add("post")
postEL.innerHTML = `
<div class="number">${post.id}</div>
<div class="post-info">
<h2 class="post-title">${post.title}</h2>
<p class="post-body">${post.body}</p>
</div>
`;
postsContainer.appendChild(postEL)
});
}
// Show initial posts
showPosts()
