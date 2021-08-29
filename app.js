// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//   .then((response) => response.json())
//   .then((data) => display(data));

// const blogList = document.querySelector("#blog-list");
// const title = document.createElement("h4");

// function display(data) {
//   const fiveList = data.slice(0, 5);
//   console.log(fiveList);

//   for (let i = 0; i < fiveList.length; i++) {
//     title.textContent = fiveList[i].title;
//     blogList.appendChild(title);
//     blogList.innerHTML += `${fiveList[i].body} <hr />`;
//   }
//   return blogList;
// }

let postsArray = [];

function renderPosts() {
  let html = "";
  for (let post of postArray) {
    html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
      `;
  }
  document.getElementById("blog-list").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postArray = data.slice(0, 5);
    renderPosts();
  });

const newPost = document.querySelector("#new-post");

const handleSubmit = (event) => {
  event.preventDefault();
  let postTitle = document.querySelector("#post-title").value;
  let postBody = document.querySelector("#post-body").value;

  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postArray.unshift(post);
      renderPosts();
      newPost.reset();
    });
};

newPost.addEventListener("submit", handleSubmit);
