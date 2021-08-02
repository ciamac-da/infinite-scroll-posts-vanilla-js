const postsContainer = document.getElementById("posts-container")
const loading = document.querySelector(".loader")
const filter = document.getElementById("filter")

let limit = 5;
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
`
postsContainer.appendChild(postEL)
})
}
// Show initial posts
showPosts()

// Show loader & fetch more posts
const showLoading = () => {
 loading.classList.add("show")

 setTimeout(() => {
   loading.classList.remove("show")
   setTimeout(()=> {
     page++
     showPosts()
   }, 300)
 },1000)
}

window.addEventListener("scroll",  () => {
  const { scrollTop, scrollHeight, clientHeight} = document.documentElement
  console.log(scrollTop)
  console.log(scrollHeight)
  console.log(clientHeight)

  if(scrollTop + clientHeight >= scrollHeight -5) {
   showLoading()
  }
})
